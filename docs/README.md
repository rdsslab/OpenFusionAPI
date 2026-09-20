# OpenFusion API – Tutorial & Reference

This section covers everything you need to go from zero to a running API endpoint.

OpenFusion API is already used in production and this guide is focused on practical adoption for technical teams, integration specialists, and AI-assisted delivery workflows.

---

## Why teams adopt OpenFusion API

- Reduce repetitive API boilerplate and speed up endpoint delivery
- Standardize security, validation, and environment controls
- Integrate SQL, SOAP, REST, MongoDB, HANA, and custom logic from one platform
- Build API surfaces that are usable by both developers and AI agents
- Move from "idea" to "running endpoint" with a repeatable operating model

---

## Ecosystem context

OpenFusion API can be used standalone, but it is strongest when aligned with its ecosystem:

- **libOpenFusionAPI**: core endpoint engine, handlers, access control, and governance
- **libOpenFusionAPIGUI**: UI layer for fast endpoint management and onboarding
- **@rdsslab/uFetch**: resilient HTTP execution and batch orchestration for integrations and AI workflows

---

## Who this guide is for

- Backend and integration engineers
- API and platform architects
- DevOps teams deploying containerized integration services
- Product teams building internal APIs quickly
- Teams enabling MCP/AI agent operations over business endpoints

---

## Prerequisites

- Node.js v20 or higher
- A running OpenFusion API instance (see [quick start](../README.md#-quick-start))
- A browser to access the web interface at `http://localhost:3000/openfusionapi`

**Default credentials:** user `superuser` / password `superuser`

---

## Video tutorials

- [Preview overview](https://youtu.be/GpjXgEJV1bI)
- [Installation process](https://youtu.be/L-DC6mIL9oM)

Production note: these tutorials are useful for first-time setup, but real value comes from applying the recommended workflow below with environment isolation, schema contracts, and access control.

---

## 1. Create an application

All endpoints live inside an **application**. Create one before adding endpoints.

1. Click **New App** (top-right)
2. Enter an application name — no spaces or special characters
3. Toggle **Enabled** to `true`
4. Click **Save**

Select the application from the dropdown to start working with it. Each application has three tabs:

- **Endpoints** — list and manage all endpoints for this app
- **Description** — free-text documentation
- **Application variables** — reusable values (credentials, hosts, etc.) per environment

---

## 2. Application variables

Before creating endpoints, define reusable variables that your endpoints will reference. Variables are scoped per environment (`dev`, `qa`, `prd`), which means you can have different database hosts or credentials per stage without changing endpoint code.

Typical use cases:

- Database connection JSON (`{"username":"...","password":"...", ...}`)
- External API base URLs
- WSDL URLs for SOAP services
- Email transporter config for `nodemailer`
- AI model defaults for `askIAWithMCP`
- Telegram bot tokens

Reference a variable inside endpoint code by its name, e.g. `$_VAR_DB_CONN`.

> **Naming rule:** the `$_VAR_` prefix is part of the variable name. Names must match `^\$_VAR_[A-Z0-9_]+$` and the stored name must be identical, character for character, to the string written in `code`. This is validated when saving the variable.

---

## 3. Create an endpoint

Inside the **Endpoints** tab, click the **New** icon. Configure:

| Field             | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| **API Resource**  | URL path + environment selector                                  |
| **Handler**       | Logic engine for this endpoint                                   |
| **Method**        | HTTP verb: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `WS`, `MQTT` |
| **Access**        | See [access control](#access-control) below                      |
| **Timeout Cache** | Response cache TTL in seconds (`0` = disabled)                   |
| **Description**   | Human/AI-readable description of the endpoint purpose            |

Once the handler is selected, additional configuration tabs appear (the **SQL** handler, for example, enables several of them).

---

## 4. JSON Schema tab

Define the expected input shape using [JSON Schema](https://json-schema.org/). This is especially important when the endpoint is used as an MCP tool — it tells AI agents exactly what fields to send.

---

## 5. Documentation tab

Most handlers include a **Documentation** tab with specific information about how the handler works. This helps maintain clear technical documentation directly associated with each endpoint.

---

## 6. MCP tab

Enable any endpoint as an **MCP tool** consumable by AI agents (GitHub Copilot, Claude, GPT, etc.):

- Set a tool **name** (no spaces), **title**, and **description**
- The platform generates an MCP-compatible interface automatically from the handler + JSON Schema

---

## Handler reference

| Handler                              | Best for                                                     |
| ------------------------------------ | ------------------------------------------------------------ |
| [JS](handlers/javascript.md)         | Custom server-side logic, data transformation, orchestration |
| [SQL](handlers/sql.md)               | CRUD operations on relational databases                      |
| [SQL_BULK_I](handlers/sql_bulk_i.md) | High-volume bulk insert operations                           |
| [FETCH](handlers/fetch.md)           | Proxying or forwarding calls to external REST APIs           |
| [SOAP](handlers/soap.md)             | Integrating legacy SOAP/WSDL web services                    |
| [FUNCTION](handlers/functions.md)    | Calling pre-registered internal backend functions            |
| [MONGODB](handlers/mongodb.md)       | MongoDB collection queries and mutations                     |
| [HANA](handlers/hana.md)             | SAP HANA database access                                     |
| [MCP](handlers/mcp.md)               | Expose endpoints as MCP tools for AI agents                  |
| [TEXT](handlers/text.md)             | Return static or dynamic text/file responses                 |
| [NA](handlers/na.md)                 | Internal no-op placeholder (not for business logic)          |

---

## URL structure

All endpoints follow this pattern:

```
/api/{app}/{environment}/{resource}/{version}
```

Example:

```
/api/demo/dev/main/test_fetch/0.01
```

- `demo` — application name
- `dev` — environment (`dev`, `qa`, `prd`)
- `main/test_fetch` — resource path
- `0.01` — version

---

## Environments

The platform manages three independent environments:

| Environment | Purpose                |
| ----------- | ---------------------- |
| `dev`       | Active development     |
| `qa`        | Staging and validation |
| `prd`       | Production traffic     |

Each environment can be independently exposed via the `EXPOSE_DEV_API`, `EXPOSE_QA_API`, and `EXPOSE_PRD_API` environment variables.

---

## Access control

Access levels (`access`) map to the authentication policy:

| Level                           | Behavior                                               |
| ------------------------------- | ------------------------------------------------------ |
| **0 – Public**                  | No authentication required                             |
| **1 – Basic**                   | HTTP Basic credentials required                        |
| **2 – Bearer** (default)        | JWT required in `Authorization: Bearer <token>` header |
| **3 – Bearer + Basic fallback** | Bearer accepted, Basic allowed as fallback             |

The `system` application **always** requires a valid Bearer token, regardless of level.

---

## Interval tasks

An **interval task** calls an existing endpoint automatically on a schedule. The task holds the schedule, payload, and credentials; the endpoint continues to own all business logic. Tasks are managed in the GUI under **Interval Tasks** and through the system MCP tools (`list_interval_tasks`, `upsert_interval_task`, `run_interval_task_now`, `reset_interval_task_attempts`, `delete_interval_task`, `get_interval_task_runs`).

Safe defaults:

- A new task starts **disabled** — enabling it is a separate, explicit decision.
- **Allow concurrent** is off, so overlapping executions of the same task are blocked.
- **Execution timeout** (default 30 s) aborts a run that exceeds it.
- Failures use **exponential backoff** (up to 1 hour) and the task auto-disables after `max_failed_attempts`, so a broken task cannot hammer a downstream service.
- **History limit** (default 50) keeps the run history bounded.

Choose **Interval** (every N seconds, minimum 1 s) for fixed elapsed-time cadences, or **Cron** (five or six fields, optional IANA timezone and daily `HH:MM` execution window) for calendar times.

The `params` payload shape:

```json
{
	"data": {
		"id": 42
	},
	"headers": {
		"x-source": "scheduler"
	}
}
```

For `GET`, `HEAD` and `DELETE`, `data` becomes query parameters. For `POST`, `PUT` and `PATCH`, it becomes the request body. Always include `data` when sending `headers`. A run is successful on HTTP `200` unless the JSON response explicitly contains `success: false` (then it is recorded as **Error**).

---

## Messaging bots

Long-running **messaging bots** are first-class entities stored in the dedicated `ofapi_bot` table. They are **not** endpoints: nothing calls them over HTTP, and they have no `resource`, `method`, or `access`. Each enabled bot runs in its own worker thread (a crashing bot cannot take the API down).

- Provider `telegram` (via grammY) is active; `whatsapp` and `ms_teams` are planned.
- **`enabled` is intent, `runtime_status` is reality.** Recoverable failures (network, DNS, `429`, provider `5xx`) back off exponentially and quarantine without disabling; permanent failures (revoked token or code that does not compile) disable the row after 3 attempts with `disabled_by = 'system'`, and correcting the token/code re-enables it automatically.
- The `token` may be a literal credential or a reference to an application variable (any value starting with `$_`, e.g. `$_VAR_TELEGRAM_TOKEN`).
- Bot activity lands in the normal log table: `method = BOT`, `idendpoint = idbot`, `url = telegram://bot/<username|idbot>`.
- Management goes through the system app: `POST /api/system/bots/prd` (`upsert_bot`), `DELETE /api/system/bots/prd` (`delete_bot`), `PATCH /api/system/bots/status/prd` (`enable_disable_bot`).
- Every bot keeps its own change history (`ofapi_bot_bkp`), and each version can be restored via `bot_restore_version`.

---

## Passwords & self-service recovery

The `system` application ships user management and a self-service password-recovery flow (OTP delivered by email and/or Telegram):

- `/user/changepassword` — any authenticated user changes their own password (old password required).
- `/user/resetpassword` — admin reset without the current password; sets `change_password=true` so the user must change it at next login.
- `/user/forgotpassword` — request a 6-digit OTP (expires in 30 min, single-use, max 5 attempts).
- `/user/resetpassword/confirm` — redeem the OTP and set a new password.
- `/user/linktelegram` — link a Telegram chat to the authenticated user for recovery delivery.

The recovery endpoints are intentionally **not** exposed as MCP tools and always answer with a generic message (anti-account-enumeration). Recovery is configured with `system` AppVars: `$_VAR_EMAIL_TRANSPORT`, `$_VAR_EMAIL_FROM`, `$_VAR_TELEGRAM_TOKEN`, `$_VAR_RESET_EMAIL_ENABLED`, `$_VAR_RESET_TELEGRAM_ENABLED`. A seeded **Recovery Password Bot** and an interval task (cron `0 3 * * *`) keep the flow running and clean up expired requests.
