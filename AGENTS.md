# AGENTS.md

## What this repo is

Thin SvelteKit wrapper that ships the OpenFusion API platform. It has almost no code of its own:

- `src/routes/openfusionapi/+page.svelte` renders the admin GUI from `@rdsslab/libopenfusionapigui` (git dependency).
- `server/index.js` instantiates the real engine from `@rdsslab/libopenfusionapi` (git dependency).
- Docs in `docs/handlers/*.md` mirror the engine's handler docs.

**Most logic lives in the git dependencies**, not here. To change core behavior (handlers, JWT/auth, validation), work in the separate `libOpenFusionAPI` repo. This repo only bumps the dep version — the `node_modules` copy is regenerated on every install. Editing `node_modules/@rdsslab/libopenfusionapi` is pointless: `npm install` and the Dockerfile's `npm update` overwrite it.

## Commands

- `npm run dev` — SvelteKit dev server (GUI only; does not run the API server).
- `npm run build` — builds GUI to `www/`; already sets `--max-old-space-size=6144` (do not remove; builds OOM otherwise).
- `npm start` — runs `server/index.js` (the actual API + serves the built GUI).
- `npm run check` — `svelte-kit sync && svelte-check` (typecheck).
- `npm run lint` — `prettier --check . && eslint .`; `npm run format` — `prettier --write .`. There are no local prettier/eslint config files.

Run order for changes: `npm run check` -> `npm run lint` -> `npm run build`.

## Gotchas

- **`server/index.js` throws at startup unless `PUBLIC_API_SERVER_HOST` is set** (non-null). The local `.env` sets it to `""` which passes, but a fresh checkout has no `.env` at all.
- **No test framework exists.** `test/` is gitignored and holds only a dev SQLite DB (`test/test1.sqlite`, referenced by the local `.env`) plus an agent instructions doc. Verify changes by running the server and hitting the UI/API manually. `BUILD_DB=true` initializes the schema on first start.
- **`www/` and `.svelte-kit/` are committed to git** (including stale `.svelte-kit/adapter-node` output from an older adapter). Both are build artifacts — never hand-edit; regenerate with `npm run build`. Current adapter is `adapter-static` (`svelte.config.js`), not adapter-node.
- Core deps install from GitHub URLs (`package.json` dependencies), so `npm install` needs network + git. `npm run reinstall` does a clean install + build.
- Custom server-side functions: `PATH_APP_FUNCTIONS=src/fn`; place code under `src/fn/{public,system}/{dev,qa,prd}/` (dirs exist but are untracked).
- Local dev default creds: `superuser` / `superuser`, UI at `http://localhost:3000/openfusionapi`.
- Endpoint URL shape: `/api/{app}/{env}/{resource}/{version}` (envs: `dev`, `qa`, `prd`), gated by `EXPOSE_DEV_API`/`EXPOSE_QA_API`/`EXPOSE_PRD_API`.

## Deploy

- Multi-stage `Dockerfile` (node:22-slim + Chromium for PDF gen, PM2 runtime via `process.yml`). `ARG CACHEBUST` forces `npm update` of the git deps on each build — don't disable it, it's how lib releases reach the image.
- `.github/workflows/docker-publish.yml` pushes `edwinspire/openfusionapi` to Docker Hub on push to `main` and `v*` tags. One environment variable in compose: `PUBLIC_API_SERVER_HOST`.
