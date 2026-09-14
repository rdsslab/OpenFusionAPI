import { a5 as head, a6 as attr, e as escape_html, a7 as attr_class, a8 as ensure_array_like, a4 as derived } from "../../chunks/index.js";
function _page($$renderer) {
  const logo = "/android-chrome-192x192.png";
  let lang = "en";
  const t = derived(
    () => ({
      langLabel: "Español",
      nav: {
        docs: "Documentation",
        features: "Features",
        app: "Open console",
        github: "GitHub"
      },
      hero: {
        badge: "Open source · Production-proven · AI-friendly",
        title: "Ship production-ready API endpoints in minutes.",
        subtitle: "OpenFusion API is a low-code, AI-friendly platform that lets humans and AI agents create, govern, and deploy REST endpoints from a clean web interface — without repetitive backend boilerplate.",
        ctaPrimary: "View on GitHub",
        ctaSecondary: "Read the docs (libOpenFusionAPI)",
        stats: [
          { value: "10+", label: "Handlers" },
          { value: "8", label: "Databases" },
          { value: "3", label: "Environments" },
          { value: "100%", label: "Open source" }
        ]
      },
      strip: [
        "MIT License",
        "Docker-ready",
        "PM2 runtime",
        "JSON Schema",
        "MCP support",
        "OWASP-hardened"
      ],
      problem: {
        kicker: "The problem it solves",
        title: "Stop rebuilding the same API plumbing for every service.",
        text: "Building APIs is full of repetitive, error-prone work: environment setup, access control, database connections, validation, and caching. OpenFusion API centralizes and standardizes all of it so your team — or an AI agent — can focus on describing the service instead of re-assembling infrastructure.",
        colA: "Traditional approach",
        rows: [
          "Write boilerplate for every new endpoint",
          "Manage DB connections per service",
          "Rebuild validation logic each time",
          "Manual environment promotion",
          "No standard for AI-assisted delivery",
          "Duplicate credentials across services"
        ],
        colB: "With OpenFusion API",
        rowsB: [
          "Select a handler and configure in minutes",
          "One centralized, reusable connection config",
          "JSON Schema validation built in per endpoint",
          "dev / qa / prd environments built-in",
          "Native MCP support — agents build endpoints autonomously",
          "App-level variables shared across endpoints"
        ],
        imgAlt: "OpenFusion API control panel"
      },
      features: {
        kicker: "Key features",
        title: "Everything you need to deliver APIs fast and safely.",
        items: [
          {
            title: "Handler-based architecture",
            desc: "Pick the right handler per endpoint — SQL, REST, SOAP, MongoDB, HANA, custom JS — with no custom wiring."
          },
          {
            title: "Multi-database support",
            desc: "PostgreSQL, MySQL, MS SQL Server, MariaDB, Oracle, SQLite, SAP HANA and MongoDB from a single platform."
          },
          {
            title: "JSON Schema validation",
            desc: "Define and enforce the exact shape of input/output data, and make endpoints predictable for AI tools."
          },
          {
            title: "MCP & AI-native",
            desc: "Expose any endpoint as an MCP tool with name, title and description so AI agents can build and deploy services."
          },
          {
            title: "dev / qa / prd environments",
            desc: "First-class environment isolation with independent toggles and variable sets per stage."
          },
          {
            title: "App-level variables",
            desc: "Define credentials, hosts and reusable values once, and reference them from any endpoint in the app."
          },
          {
            title: "Caching & JWT auth",
            desc: "Per-endpoint response caching with TTL, plus built-in JWT generation and validation."
          },
          {
            title: "Automation you can govern",
            desc: "Recurring interval tasks on cron or interval, plus messaging bots — all with full access control."
          }
        ]
      },
      handlers: {
        kicker: "Available handlers",
        title: "One platform, every integration pattern.",
        text: "Handlers cover the full spectrum of modern and legacy integration. Each handler ships its own documentation and a machine-readable contract.",
        list: [
          {
            code: "SQL",
            desc: "Parameterized queries against any Sequelize-compatible database"
          },
          {
            code: "SQL_BULK_I",
            desc: "Bulk inserts for high-volume data ingestion"
          },
          {
            code: "FETCH",
            desc: "Call external REST APIs and relay or transform responses"
          },
          {
            code: "SOAP",
            desc: "Convert legacy SOAP/WSDL services into clean REST endpoints"
          },
          {
            code: "JS",
            desc: "Run custom JavaScript logic server-side in a sandbox"
          },
          {
            code: "FUNCTION",
            desc: "Call reusable functions from your backend src/fn folder"
          },
          {
            code: "MONGODB",
            desc: "Query and mutate MongoDB collections"
          },
          { code: "HANA", desc: "Connect to SAP HANA databases" },
          {
            code: "MCP",
            desc: "Expose endpoints as MCP tools consumable by AI agents"
          },
          {
            code: "TEXT",
            desc: "Return static or dynamically generated text/file responses"
          }
        ]
      },
      how: {
        kicker: "How it works",
        title: "From requirement to live endpoint in minutes.",
        steps: [
          {
            title: "Create an application",
            desc: "The root container for a group of related endpoints."
          },
          {
            title: "Define app variables",
            desc: "Store credentials, hosts and reusable IDs per environment."
          },
          {
            title: "Publish endpoints",
            desc: "Pick a handler, HTTP method and access level — and deploy."
          }
        ],
        agentTitle: "Built for AI agents too",
        agentText: "Agents create and publish endpoints autonomously through MCP tooling: create the application, define shared variables, add endpoints with handler and schema, then validate and publish — no infrastructure code required."
      },
      ecosystem: {
        kicker: "OpenFusion ecosystem",
        title: "Three libraries, one delivery model.",
        items: [
          {
            name: "libOpenFusionAPI",
            role: "Core platform engine",
            desc: "Endpoint model, handlers, validation, governance and runtime. This is where the most detailed and up-to-date documentation lives.",
            cta: "Read the detailed docs",
            highlight: true,
            url: "https://github.com/rdsslab/libOpenFusionAPI"
          },
          {
            name: "libOpenFusionAPIGUI",
            role: "Management interface",
            desc: "Svelte-based admin UI that powers fast onboarding for technical and non-specialist teams.",
            cta: "View repo",
            highlight: false,
            url: "https://github.com/rdsslab/libOpenFusionAPIGUI"
          },
          {
            name: "@rdsslab/uFetch",
            role: "Universal HTTP layer",
            desc: "Resilient HTTP execution for Node/browser and fail-safe batch requests in integration-heavy workloads.",
            cta: "View repo",
            highlight: false,
            url: "https://github.com/rdsslab/uFetch"
          }
        ]
      },
      quickstart: {
        kicker: "Quick start",
        title: "Run it with Docker and publish your first endpoint in under 15 minutes.",
        steps: [
          "docker compose up -d",
          "Open http://localhost:3000/openfusionapi",
          "Log in and create an application"
        ],
        defaultCreds: "Default credentials:",
        user: "superuser",
        pass: "superuser",
        local: {
          title: "Or run locally",
          code: "git clone https://github.com/rdsslab/OpenFusionAPI.git\ncd OpenFusionAPI\nnpm install\nnpm run build\nnpm run start"
        }
      },
      cta: {
        title: "Ready to publish your next endpoint?",
        text: "Explore the docs, star the repo, spin up the Docker image, or open the live console.",
        github: "OpenFusionAPI on GitHub",
        docs: "Core library docs",
        console: "Open the console"
      },
      footer: {
        tagline: "Low-code, AI-friendly API platform.",
        rights: "Released under the MIT License.",
        links: {
          docs: "Documentation",
          handlers: "Handler reference",
          compose: "Docker Compose",
          license: "License"
        },
        open: "OpenFusionAPI · production instance"
      }
    })
  );
  const githubUrl = "https://github.com/rdsslab/OpenFusionAPI";
  const libUrl = "https://github.com/rdsslab/libOpenFusionAPI";
  const appUrl = "/openfusionapi";
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>OpenFusion API | Low-Code, AI-Friendly API Platform</title>`);
    });
  });
  $$renderer.push(`<div class="landing svelte-1uha8ag"><header class="nav svelte-1uha8ag"><a class="brand svelte-1uha8ag" href="/" aria-label="OpenFusion API"><img${attr("src", logo)} alt="OpenFusion API logo" width="36" height="36" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">OpenFusion API</span></a> <nav class="nav-links svelte-1uha8ag"><a href="#docs" class="svelte-1uha8ag">${escape_html(t().nav.docs)}</a> <a href="#features" class="svelte-1uha8ag">${escape_html(t().nav.features)}</a> <div class="lang svelte-1uha8ag"><button${attr("aria-pressed", lang === "en")} type="button"${attr_class("svelte-1uha8ag", void 0, { "active": lang === "en" })}>EN</button> <button${attr("aria-pressed", lang === "es")} type="button"${attr_class("svelte-1uha8ag", void 0, { "active": lang === "es" })}>ES</button></div> <a class="btn btn-ghost svelte-1uha8ag"${attr("href", appUrl)}>${escape_html(t().nav.app)}</a> <a class="btn btn-primary svelte-1uha8ag"${attr("href", githubUrl)} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true" class="svelte-1uha8ag"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" class="svelte-1uha8ag"></path></svg> ${escape_html(t().nav.github)}</a></nav></header> <main class="svelte-1uha8ag"><section class="hero svelte-1uha8ag"><span class="hero-badge svelte-1uha8ag">${escape_html(t().hero.badge)}</span> <h1 class="svelte-1uha8ag">${escape_html(t().hero.title)}</h1> <p class="hero-sub svelte-1uha8ag">${escape_html(t().hero.subtitle)}</p> <div class="hero-cta svelte-1uha8ag"><a class="btn btn-primary btn-lg svelte-1uha8ag"${attr("href", githubUrl)} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true" class="svelte-1uha8ag"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" class="svelte-1uha8ag"></path></svg> ${escape_html(t().hero.ctaPrimary)}</a> <a class="btn btn-ghost btn-lg svelte-1uha8ag"${attr("href", libUrl)} target="_blank" rel="noopener noreferrer">${escape_html(t().hero.ctaSecondary)} <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="svelte-1uha8ag"><path d="M5 12h14" class="svelte-1uha8ag"></path><path d="m12 5 7 7-7 7" class="svelte-1uha8ag"></path></svg></a></div> <div class="hero-stats svelte-1uha8ag"><!--[-->`);
  const each_array = ensure_array_like(t().hero.stats);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$renderer.push(`<div class="stat svelte-1uha8ag"><span class="stat-value svelte-1uha8ag">${escape_html(stat.value)}</span> <span class="stat-label svelte-1uha8ag">${escape_html(stat.label)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="hero-shot svelte-1uha8ag"><img src="/landing/screenshot.png"${attr("alt", t().problem.imgAlt)} class="svelte-1uha8ag"/></div></section> <section class="strip svelte-1uha8ag" aria-label="Highlights"><!--[-->`);
  const each_array_1 = ensure_array_like(t().strip);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$renderer.push(`<span class="chip svelte-1uha8ag">${escape_html(item)}</span>`);
  }
  $$renderer.push(`<!--]--></section> <section class="section svelte-1uha8ag" id="problem"><div class="section-head svelte-1uha8ag"><span class="kicker svelte-1uha8ag">${escape_html(t().problem.kicker)}</span> <h2 class="svelte-1uha8ag">${escape_html(t().problem.title)}</h2> <p class="svelte-1uha8ag">${escape_html(t().problem.text)}</p></div> <div class="compare svelte-1uha8ag"><div class="compare-col svelte-1uha8ag"><h3 class="compare-title muted svelte-1uha8ag">${escape_html(t().problem.colA)}</h3> <ul class="svelte-1uha8ag"><!--[-->`);
  const each_array_2 = ensure_array_like(t().problem.rows);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let row = each_array_2[$$index_2];
    $$renderer.push(`<li class="svelte-1uha8ag">${escape_html(row)}</li>`);
  }
  $$renderer.push(`<!--]--></ul></div> <div class="compare-col highlight svelte-1uha8ag"><h3 class="compare-title svelte-1uha8ag">${escape_html(t().problem.colB)}</h3> <ul class="svelte-1uha8ag"><!--[-->`);
  const each_array_3 = ensure_array_like(t().problem.rowsB);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let row = each_array_3[$$index_3];
    $$renderer.push(`<li class="svelte-1uha8ag">${escape_html(row)}</li>`);
  }
  $$renderer.push(`<!--]--></ul></div></div></section> <section class="section svelte-1uha8ag" id="features"><div class="section-head svelte-1uha8ag"><span class="kicker svelte-1uha8ag">${escape_html(t().features.kicker)}</span> <h2 class="svelte-1uha8ag">${escape_html(t().features.title)}</h2></div> <div class="grid svelte-1uha8ag"><!--[-->`);
  const each_array_4 = ensure_array_like(t().features.items);
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let feature = each_array_4[$$index_4];
    $$renderer.push(`<article class="card svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(feature.title)}</h3> <p class="svelte-1uha8ag">${escape_html(feature.desc)}</p></article>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="section svelte-1uha8ag" id="handlers"><div class="section-head svelte-1uha8ag"><span class="kicker svelte-1uha8ag">${escape_html(t().handlers.kicker)}</span> <h2 class="svelte-1uha8ag">${escape_html(t().handlers.title)}</h2> <p class="svelte-1uha8ag">${escape_html(t().handlers.text)}</p></div> <div class="handler-grid svelte-1uha8ag"><!--[-->`);
  const each_array_5 = ensure_array_like(t().handlers.list);
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let handler = each_array_5[$$index_5];
    $$renderer.push(`<div class="handler-chip svelte-1uha8ag"><code class="svelte-1uha8ag">${escape_html(handler.code)}</code> <span class="svelte-1uha8ag">${escape_html(handler.desc)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="section svelte-1uha8ag" id="how"><div class="section-head svelte-1uha8ag"><span class="kicker svelte-1uha8ag">${escape_html(t().how.kicker)}</span> <h2 class="svelte-1uha8ag">${escape_html(t().how.title)}</h2></div> <div class="steps svelte-1uha8ag"><!--[-->`);
  const each_array_6 = ensure_array_like(t().how.steps);
  for (let i = 0, $$length = each_array_6.length; i < $$length; i++) {
    let step = each_array_6[i];
    $$renderer.push(`<article class="step svelte-1uha8ag"><span class="step-num svelte-1uha8ag">0${escape_html(i + 1)}</span> <h3 class="svelte-1uha8ag">${escape_html(step.title)}</h3> <p class="svelte-1uha8ag">${escape_html(step.desc)}</p></article>`);
  }
  $$renderer.push(`<!--]--></div> <div class="agent svelte-1uha8ag"><div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(t().how.agentTitle)}</h3> <p class="svelte-1uha8ag">${escape_html(t().how.agentText)}</p></div> <div class="agent-flow svelte-1uha8ag"><!--[-->`);
  const each_array_7 = ensure_array_like(t().how.steps);
  for (let i = 0, $$length = each_array_7.length; i < $$length; i++) {
    let step = each_array_7[i];
    $$renderer.push(`<span class="svelte-1uha8ag">${escape_html(i + 1)}. ${escape_html(step.title)}</span>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="section svelte-1uha8ag" id="docs"><div class="section-head svelte-1uha8ag"><span class="kicker svelte-1uha8ag">${escape_html(t().ecosystem.kicker)}</span> <h2 class="svelte-1uha8ag">${escape_html(t().ecosystem.title)}</h2></div> <div class="ecosystem svelte-1uha8ag"><!--[-->`);
  const each_array_8 = ensure_array_like(t().ecosystem.items);
  for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
    let item = each_array_8[$$index_8];
    $$renderer.push(`<article${attr_class("eco-card svelte-1uha8ag", void 0, { "highlight": item.highlight })}><span class="eco-role svelte-1uha8ag">${escape_html(item.role)}</span> <h3 class="svelte-1uha8ag">${escape_html(item.name)}</h3> <p class="svelte-1uha8ag">${escape_html(item.desc)}</p> <a${attr_class("btn btn-sm svelte-1uha8ag", void 0, { "btn-primary": item.highlight, "btn-ghost": !item.highlight })}${attr("href", item.url)} target="_blank" rel="noopener noreferrer">${escape_html(item.cta)}</a></article>`);
  }
  $$renderer.push(`<!--]--></div></section> <section class="section svelte-1uha8ag" id="quickstart"><div class="section-head svelte-1uha8ag"><span class="kicker svelte-1uha8ag">${escape_html(t().quickstart.kicker)}</span> <h2 class="svelte-1uha8ag">${escape_html(t().quickstart.title)}</h2></div> <div class="quickstart svelte-1uha8ag"><div class="quick-col svelte-1uha8ag"><ol class="svelte-1uha8ag"><!--[-->`);
  const each_array_9 = ensure_array_like(t().quickstart.steps);
  for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
    let step = each_array_9[$$index_9];
    $$renderer.push(`<li class="svelte-1uha8ag"><code class="svelte-1uha8ag">${escape_html(step)}</code></li>`);
  }
  $$renderer.push(`<!--]--></ol> <p class="creds svelte-1uha8ag">${escape_html(t().quickstart.defaultCreds)} <code class="svelte-1uha8ag">${escape_html(t().quickstart.user)}</code> / <code class="svelte-1uha8ag">${escape_html(t().quickstart.pass)}</code></p></div> <div class="quick-col svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(t().quickstart.local.title)}</h3> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag">${escape_html(t().quickstart.local.code)}</code></pre></div></div></section> <section class="cta svelte-1uha8ag"><h2 class="svelte-1uha8ag">${escape_html(t().cta.title)}</h2> <p class="svelte-1uha8ag">${escape_html(t().cta.text)}</p> <div class="cta-buttons svelte-1uha8ag"><a class="btn btn-primary btn-lg svelte-1uha8ag"${attr("href", githubUrl)} target="_blank" rel="noopener noreferrer">${escape_html(t().cta.github)}</a> <a class="btn btn-ghost btn-lg svelte-1uha8ag"${attr("href", libUrl)} target="_blank" rel="noopener noreferrer">${escape_html(t().cta.docs)}</a> <a class="btn btn-ghost btn-lg svelte-1uha8ag"${attr("href", appUrl)}>${escape_html(t().cta.console)}</a></div></section></main> <footer class="footer svelte-1uha8ag"><div class="footer-top svelte-1uha8ag"><a class="brand svelte-1uha8ag" href="/"><img${attr("src", logo)} alt="OpenFusion API logo" width="32" height="32" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag">OpenFusion API</span></a> <p class="svelte-1uha8ag">${escape_html(t().footer.tagline)}</p> <p class="footer-open svelte-1uha8ag">${escape_html(t().footer.open)} · <a href="https://www.openfusionapi.com" target="_blank" rel="noopener noreferrer" class="svelte-1uha8ag">openfusionapi.com</a></p></div> <div class="footer-links svelte-1uha8ag"><a${attr("href", libUrl)} target="_blank" rel="noopener noreferrer" class="svelte-1uha8ag">${escape_html(t().footer.links.docs)}</a> <a${attr("href", libUrl)} target="_blank" rel="noopener noreferrer" class="svelte-1uha8ag">${escape_html(t().footer.links.handlers)}</a> <a${attr("href", githubUrl)} target="_blank" rel="noopener noreferrer" class="svelte-1uha8ag">${escape_html(t().footer.links.compose)}</a> <a${attr("href", githubUrl)} target="_blank" rel="noopener noreferrer" class="svelte-1uha8ag">${escape_html(t().footer.links.license)}</a></div> <p class="footer-rights svelte-1uha8ag">${escape_html(t().footer.rights)}</p></footer></div>`);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
