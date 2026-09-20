<script>
	import { resolve } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';

	const logo = '/android-chrome-192x192.png';

	/** @type {'en' | 'es'} */
	let lang = $state('en');

	// Screenshots data for the carousel
	const screenshots = [
		{
			src: '/admin-ui/dashboard.png',
			alt: { en: 'Dashboard', es: 'Panel de control' },
			caption: { en: 'Dashboard — real-time metrics', es: 'Dashboard — métricas en tiempo real' }
		},
		{
			src: '/admin-ui/basic.png',
			alt: { en: 'Basic', es: 'Básico' },
			caption: { en: 'Basic — app overview', es: 'Basic — vista general de la app' }
		},
		{
			src: '/admin-ui/endpoints.png',
			alt: { en: 'Endpoints', es: 'Endpoints' },
			caption: {
				en: 'Endpoints — list, create, test, promote',
				es: 'Endpoints — listar, crear, probar, promover'
			}
		},
		{
			src: '/admin-ui/variables.png',
			alt: { en: 'Variables', es: 'Variables' },
			caption: { en: 'Variables — per-environment config', es: 'Variables — config por entorno' }
		},
		{
			src: '/admin-ui/apikeys.png',
			alt: { en: 'API Keys', es: 'API Keys' },
			caption: {
				en: 'API Keys — external client access',
				es: 'API Keys — acceso de clientes externos'
			}
		},
		{
			src: '/admin-ui/bots.png',
			alt: { en: 'Bots', es: 'Bots' },
			caption: { en: 'Bots — Telegram bots management', es: 'Bots — gestión de bots de Telegram' }
		},
		{
			src: '/admin-ui/tasks.png',
			alt: { en: 'Tasks', es: 'Tareas' },
			caption: { en: 'Tasks — scheduled executions', es: 'Tasks — ejecuciones programadas' }
		},
		{
			src: '/admin-ui/logs.png',
			alt: { en: 'Logs', es: 'Logs' },
			caption: { en: 'Logs — trace search & errors', es: 'Logs — búsqueda de trazas y errores' }
		},
		{
			src: '/admin-ui/system-users.png',
			alt: { en: 'System Users', es: 'Usuarios de Sistema' },
			caption: { en: 'System Users — RBAC management', es: 'Usuarios de Sistema — gestión RBAC' }
		},
		{
			src: '/admin-ui/apiclients.png',
			alt: { en: 'API Clients', es: 'Clientes API' },
			caption: {
				en: 'API Clients — JWT auth & rate limits',
				es: 'Clientes API — auth JWT y rate limiting'
			}
		}
	];

	// Carousel state
	let currentSlide = $state(0);
	/** @type {ReturnType<typeof setInterval> | null} */
	let autoSlideTimer = null;
	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	// SSR guard
	import { browser } from '$app/environment';

	// Auto-slide functionality
	function startAutoSlide() {
		if (!browser) return;
		if (autoSlideTimer) return;
		autoSlideTimer = setInterval(() => {
			currentSlide = (currentSlide + 1) % screenshots.length;
		}, 5000);
	}

	function stopAutoSlide() {
		if (!browser) return;
		if (autoSlideTimer) {
			clearInterval(autoSlideTimer);
			autoSlideTimer = null;
		}
	}

	function nextSlide() {
		stopAutoSlide();
		currentSlide = (currentSlide + 1) % screenshots.length;
		startAutoSlide();
	}

	function prevSlide() {
		stopAutoSlide();
		currentSlide = (currentSlide - 1 + screenshots.length) % screenshots.length;
		startAutoSlide();
	}

	/** @param {number} index */
	function goToSlide(index) {
		stopAutoSlide();
		currentSlide = index;
		startAutoSlide();
	}

	// Lightbox functions
	/** @param {number} index */
	function openLightbox(index) {
		if (!browser) return;
		lastFocusedEl = document.activeElement;
		lightboxIndex = index;
		lightboxOpen = true;
		stopAutoSlide();
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		if (!browser) return;
		lightboxOpen = false;
		startAutoSlide();
		document.body.style.overflow = '';
		if (lastFocusedEl instanceof HTMLElement) lastFocusedEl.focus();
		lastFocusedEl = null;
	}

	/** @type {Element | null} */
	let lastFocusedEl = null;

	$effect(() => {
		if (!browser || !lightboxOpen) return;
		/** @type {HTMLElement | null} */
		const closeBtn = document.querySelector('.lightbox-close');
		closeBtn?.focus({ preventScroll: true });
	});

	function prevLightbox() {
		if (!browser) return;
		lightboxIndex = (lightboxIndex - 1 + screenshots.length) % screenshots.length;
	}

	function nextLightbox() {
		if (!browser) return;
		lightboxIndex = (lightboxIndex + 1) % screenshots.length;
	}

	/** @type {HTMLElement | null} */
	let carouselEl = null;

	onMount(() => {
		if (!browser) return;
		startAutoSlide();
		carouselEl = document.querySelector('.carousel');
		carouselEl?.addEventListener('mouseenter', stopAutoSlide);
		carouselEl?.addEventListener('mouseleave', startAutoSlide);
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		if (!browser) return;
		stopAutoSlide();
		carouselEl?.removeEventListener('mouseenter', stopAutoSlide);
		carouselEl?.removeEventListener('mouseleave', startAutoSlide);
		document.body.style.overflow = '';
		document.removeEventListener('keydown', handleKeydown);
	});

	/** @param {KeyboardEvent} e */
	function handleKeydown(e) {
		const target = e.target;
		if (
			target instanceof HTMLElement &&
			(target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))
		) {
			return;
		}
		if (e.key === 'Escape') {
			if (lightboxOpen) closeLightbox();
		} else if (e.key === 'ArrowLeft') {
			if (lightboxOpen) prevLightbox();
			else prevSlide();
		} else if (e.key === 'ArrowRight') {
			if (lightboxOpen) nextLightbox();
			else nextSlide();
		}
	}

	const t = $derived(
		lang === 'en'
			? {
					langLabel: 'Español',
					nav: {
						docs: 'Documentation',
						features: 'Features',
						app: 'Enter',
						github: 'GitHub'
					},
					hero: {
						badge: 'Open source · Production-proven · AI-friendly',
						title: 'Ship production-ready API endpoints in minutes.',
						subtitle:
							'OpenFusion API is a low-code, AI-friendly platform that lets humans and AI agents create, govern, and deploy REST endpoints from a clean web interface — without repetitive backend boilerplate.',
						ctaPrimary: 'View on GitHub',
						ctaSecondary: 'Read the docs (libOpenFusionAPI)',
						stats: [
							{ value: '10+', label: 'Handlers' },
							{ value: '8', label: 'Databases' },
							{ value: '3', label: 'Environments' },
							{ value: '100%', label: 'Open source' }
						]
					},
					strip: [
						'MIT License',
						'Docker-ready',
						'PM2 runtime',
						'JSON Schema',
						'MCP support',
						'OWASP-hardened'
					],
					problem: {
						kicker: 'The problem it solves',
						title: 'Stop rebuilding the same API plumbing for every service.',
						text: 'Building APIs is full of repetitive, error-prone work: environment setup, access control, database connections, validation, and caching. OpenFusion API centralizes and standardizes all of it so your team — or an AI agent — can focus on describing the service instead of re-assembling infrastructure.',
						colA: 'Traditional approach',
						rows: [
							'Write boilerplate for every new endpoint',
							'Manage DB connections per service',
							'Rebuild validation logic each time',
							'Manual environment promotion',
							'No standard for AI-assisted delivery',
							'Duplicate credentials across services'
						],
						colB: 'With OpenFusion API',
						rowsB: [
							'Select a handler and configure in minutes',
							'One centralized, reusable connection config',
							'JSON Schema validation built in per endpoint',
							'dev / qa / prd environments built-in',
							'Native MCP support — agents build endpoints autonomously',
							'App-level variables shared across endpoints'
						],
						imgAlt: 'OpenFusion API control panel'
					},
					features: {
						kicker: 'Key features',
						title: 'Everything you need to deliver APIs fast and safely.',
						items: [
							{
								title: 'Handler-based architecture',
								desc: 'Pick the right handler per endpoint — SQL, REST, SOAP, MongoDB, HANA, custom JS — with no custom wiring.'
							},
							{
								title: 'Multi-database support',
								desc: 'PostgreSQL, MySQL, MS SQL Server, MariaDB, Oracle, SQLite, SAP HANA and MongoDB from a single platform.'
							},
							{
								title: 'JSON Schema validation',
								desc: 'Define and enforce the exact shape of input/output data, and make endpoints predictable for AI tools.'
							},
							{
								title: 'MCP & AI-native',
								desc: 'Expose any endpoint as an MCP tool with name, title and description so AI agents can build and deploy services.'
							},
							{
								title: 'dev / qa / prd environments',
								desc: 'First-class environment isolation with independent toggles and variable sets per stage.'
							},
							{
								title: 'App-level variables',
								desc: 'Define credentials, hosts and reusable values once, and reference them from any endpoint in the app.'
							},
							{
								title: 'Caching & JWT auth',
								desc: 'Per-endpoint response caching with TTL, plus built-in JWT generation and validation.'
							},
							{
								title: 'Automation you can govern',
								desc: 'Recurring interval tasks on cron or interval, plus messaging bots — all with full access control.'
							}
						]
					},
					handlers: {
						kicker: 'Available handlers',
						title: 'One platform, every integration pattern.',
						text: 'Handlers cover the full spectrum of modern and legacy integration. Each handler ships its own documentation and a machine-readable contract.',
						list: [
							{
								code: 'SQL',
								desc: 'Parameterized queries against any Sequelize-compatible database'
							},
							{
								code: 'SQL_BULK_I',
								desc: 'Bulk inserts for high-volume data ingestion'
							},
							{
								code: 'FETCH',
								desc: 'Call external REST APIs and relay or transform responses'
							},
							{
								code: 'SOAP',
								desc: 'Convert legacy SOAP/WSDL services into clean REST endpoints'
							},
							{
								code: 'JS',
								desc: 'Run custom JavaScript logic server-side in a sandbox'
							},
							{
								code: 'FUNCTION',
								desc: 'Call reusable functions from your backend src/fn folder'
							},
							{ code: 'MONGODB', desc: 'Query and mutate MongoDB collections' },
							{ code: 'HANA', desc: 'Connect to SAP HANA databases' },
							{
								code: 'MCP',
								desc: 'Expose endpoints as MCP tools consumable by AI agents'
							},
							{
								code: 'TEXT',
								desc: 'Return static or dynamically generated text/file responses'
							}
						]
					},
					how: {
						kicker: 'How it works',
						title: 'From requirement to live endpoint in minutes.',
						steps: [
							{
								title: 'Select your application',
								desc: 'Choose or create an app from the top dropdown — each app isolates endpoints, variables, and keys.'
							},
							{
								title: 'Build via the sidebar',
								desc: 'Use the left navigation: Dashboard → Endpoints → Variables → API Keys → Bots → Tasks → Logs → System Users → API Clients.'
							},
							{
								title: 'Publish endpoints',
								desc: 'Pick a handler (SQL, FETCH, JS, MCP, etc.), set method, access level, and schema — deploy instantly.'
							}
						],
						agentTitle: 'Built for AI agents too',
						agentText:
							'Agents create and publish endpoints autonomously through MCP tooling: create the application, define shared variables, add endpoints with handler and schema, then validate and publish — no infrastructure code required.'
					},
					ecosystem: {
						kicker: 'OpenFusion ecosystem',
						title: 'Three libraries, one delivery model.',
						items: [
							{
								name: 'libOpenFusionAPI',
								role: 'Core platform engine',
								desc: 'Endpoint model, handlers, validation, governance and runtime. This is where the most detailed and up-to-date documentation lives.',
								cta: 'Read the detailed docs',
								highlight: true,
								url: 'https://github.com/rdsslab/libOpenFusionAPI'
							},
							{
								name: 'libOpenFusionAPIGUI',
								role: 'Management interface',
								desc: 'Svelte-based admin UI that powers fast onboarding for technical and non-specialist teams.',
								cta: 'View repo',
								highlight: false,
								url: 'https://github.com/rdsslab/libOpenFusionAPIGUI'
							},
							{
								name: '@rdsslab/uFetch',
								role: 'Universal HTTP layer',
								desc: 'Resilient HTTP execution for Node/browser and fail-safe batch requests in integration-heavy workloads.',
								cta: 'View repo',
								highlight: false,
								url: 'https://github.com/rdsslab/uFetch'
							}
						]
					},
					adminUi: {
						kicker: 'Admin UI overview',
						title: 'Real admin interface — built for humans and AI.',
						text: 'The admin console is a Svelte-based SPA with a persistent left sidebar, top app selector, and context-aware main panel. All sections are accessible via the sidebar:',
						sections: [
							{
								title: 'Core workflow',
								desc: 'Day-to-day endpoint management',
								items: [
									'New — create application/endpoint/variable/key/bot/task',
									'Dashboard — real-time CPU, memory, response time, request volume, status codes, top endpoints, errors',
									'Basic — app overview and settings',
									'Endpoints — list, create, edit, test, clone, promote across dev/qa/prd',
									'Variables — app-level config per environment (credentials, hosts, reusable values)',
									'API Keys — manage external client access with scopes and expiration'
								]
							},
							{
								title: 'Automation & observability',
								desc: 'Recurring tasks, bots, and logs',
								items: [
									'Bots — Telegram bots with grammY, webhook/polling, auto-recovery',
									'Tasks — interval/cron scheduled endpoint execution with history',
									'Logs — trace search, error filtering, slow-query analysis, per-request timeline'
								]
							},
							{
								title: 'System administration',
								desc: 'User and client management',
								items: [
									'System Users — internal platform users with role-based env permissions',
									'API Clients — external consumers with JWT auth and rate limiting'
								]
							}
						]
					},
					quickstart: {
						kicker: 'Quick start',
						title: 'Run it with Docker and publish your first endpoint in under 15 minutes.',
						steps: [
							'docker compose up -d',
							'Open http://localhost:3000/openfusionapi',
							'Log in and create an application'
						],
						defaultCreds: 'Default credentials:',
						user: 'superopenfusionapi',
						pass: 'Sup3r@0penFusion!',
						local: {
							title: 'Or run locally',
							code: 'git clone https://github.com/rdsslab/OpenFusionAPI.git\ncd OpenFusionAPI\nnpm install\nnpm run build\nnpm run start'
						}
					},
					cta: {
						title: 'Ready to publish your next endpoint?',
						text: 'Explore the docs, star the repo, spin up the Docker image, or open the live console.',
						github: 'OpenFusionAPI on GitHub',
						docs: 'Core library docs',
						console: 'Enter'
					},
					footer: {
						tagline: 'Low-code, AI-friendly API platform.',
						rights: 'Released under the MIT License.',
						links: {
							docs: 'Documentation',
							handlers: 'Handler reference',
							compose: 'Docker Compose',
							license: 'License'
						},
						open: 'OpenFusionAPI · production instance'
					}
				}
			: {
					langLabel: 'English',
					nav: {
						docs: 'Documentación',
						features: 'Características',
						app: 'Entrar',
						github: 'GitHub'
					},
					hero: {
						badge: 'Open source · Probado en producción · Amigable con IA',
						title: 'Publica endpoints API listos para producción en minutos.',
						subtitle:
							'OpenFusion API es una plataforma low-code y amigable con IA que permite a humanos y agentes de IA crear, gobernar y desplegar endpoints REST desde una interfaz web limpia, sin código repetitivo.',
						ctaPrimary: 'Ver en GitHub',
						ctaSecondary: 'Leer documentación (libOpenFusionAPI)',
						stats: [
							{ value: '10+', label: 'Handlers' },
							{ value: '8', label: 'Bases de datos' },
							{ value: '3', label: 'Entornos' },
							{ value: '100%', label: 'Open source' }
						]
					},
					strip: [
						'Licencia MIT',
						'Listo para Docker',
						'Runtime PM2',
						'JSON Schema',
						'Soporte MCP',
						'Endurecido OWASP'
					],
					problem: {
						kicker: 'El problema que resuelve',
						title: 'Deja de reconstruir la misma infraestructura API para cada servicio.',
						text: 'Construir APIs está lleno de trabajo repetitivo y propenso a errores: configuración de entornos, control de acceso, conexiones a bases de datos, validación y caché. OpenFusion API centraliza y estandariza todo ello para que tu equipo — o un agente de IA — pueda enfocarse en describir el servicio en lugar de volver a armar la infraestructura.',
						colA: 'Enfoque tradicional',
						rows: [
							'Escribir boilerplate para cada nuevo endpoint',
							'Gestionar conexiones DB por servicio',
							'Reconstruir la validación cada vez',
							'Promoción manual entre entornos',
							'Sin estándar para entrega asistida por IA',
							'Credenciales duplicadas entre servicios'
						],
						colB: 'Con OpenFusion API',
						rowsB: [
							'Selecciona un handler y configura en minutos',
							'Una config de conexión centralizada y reutilizable',
							'Validación JSON Schema integrada por endpoint',
							'Entornos dev / qa / prd incluidos',
							'MCP nativo — los agentes crean endpoints de forma autónoma',
							'Variables a nivel de app compartidas entre endpoints'
						],
						imgAlt: 'Panel de control de OpenFusion API'
					},
					features: {
						kicker: 'Características clave',
						title: 'Todo lo que necesitas para entregar APIs rápido y de forma segura.',
						items: [
							{
								title: 'Arquitectura basada en handlers',
								desc: 'Elige el handler adecuado por endpoint — SQL, REST, SOAP, MongoDB, HANA, JS personalizado — sin wiring a medida.'
							},
							{
								title: 'Soporte multi-base de datos',
								desc: 'PostgreSQL, MySQL, MS SQL Server, MariaDB, Oracle, SQLite, SAP HANA y MongoDB desde una sola plataforma.'
							},
							{
								title: 'Validación JSON Schema',
								desc: 'Define y aplica la forma exacta de los datos de entrada/salida, y haz endpoints predecibles para herramientas de IA.'
							},
							{
								title: 'MCP y nativo para IA',
								desc: 'Expone cualquier endpoint como herramienta MCP con nombre, título y descripción para que los agentes de IA construyan y desplieguen servicios.'
							},
							{
								title: 'Entornos dev / qa / prd',
								desc: 'Aislamiento de entornos de primera clase con toggles y variables independientes por etapa.'
							},
							{
								title: 'Variables a nivel de app',
								desc: 'Define credenciales, hosts y valores reutilizables una vez, y refiérelos desde cualquier endpoint de la app.'
							},
							{
								title: 'Caché y auth JWT',
								desc: 'Caché de respuestas por endpoint con TTL, más generación y validación JWT integradas.'
							},
							{
								title: 'Automatización gobernada',
								desc: 'Tareas recurrentes con intervalos o cron, más bots de mensajería, todo con control de acceso completo.'
							}
						]
					},
					handlers: {
						kicker: 'Handlers disponibles',
						title: 'Una plataforma, todos los patrones de integración.',
						text: 'Los handlers cubren todo el espectro de integración moderna y legacy. Cada handler incluye su propia documentación y un contrato legible por máquina.',
						list: [
							{
								code: 'SQL',
								desc: 'Consultas parametrizadas contra cualquier base compatible con Sequelize'
							},
							{
								code: 'SQL_BULK_I',
								desc: 'Inserciones masivas para ingesta de alto volumen'
							},
							{
								code: 'FETCH',
								desc: 'Llama APIs REST externas y reenvía o transforma respuestas'
							},
							{
								code: 'SOAP',
								desc: 'Convierte servicios legacy SOAP/WSDL en endpoints REST limpios'
							},
							{
								code: 'JS',
								desc: 'Ejecuta lógica JavaScript personalizada en el servidor dentro de un sandbox'
							},
							{
								code: 'FUNCTION',
								desc: 'Llama funciones reutilizables desde tu carpeta backend src/fn'
							},
							{
								code: 'MONGODB',
								desc: 'Consulta y modifica colecciones MongoDB'
							},
							{ code: 'HANA', desc: 'Conecta a bases de datos SAP HANA' },
							{
								code: 'MCP',
								desc: 'Expone endpoints como herramientas MCP consumibles por agentes de IA'
							},
							{
								code: 'TEXT',
								desc: 'Devuelve respuestas de texto/archivo estáticas o generadas dinámicamente'
							}
						]
					},
					how: {
						kicker: 'Cómo funciona',
						title: 'Del requerimiento al endpoint operativo en minutos.',
						steps: [
							{
								title: 'Selecciona tu aplicación',
								desc: 'Elige o crea una app desde el selector superior — cada app aísla endpoints, variables y claves.'
							},
							{
								title: 'Construye desde la barra lateral',
								desc: 'Usa la navegación izquierda: Dashboard → Endpoints → Variables → API Keys → Bots → Tasks → Logs → Usuarios de Sistema → Clientes API.'
							},
							{
								title: 'Publica endpoints',
								desc: 'Elige handler (SQL, FETCH, JS, MCP, etc.), método, nivel de acceso y schema — despliega al instante.'
							}
						],
						agentTitle: 'También construido para agentes de IA',
						agentText:
							'Los agentes crean y publican endpoints de forma autónoma a través de herramientas MCP: crean la aplicación, definen variables compartidas, agregan endpoints con handler y schema, y luego validan y publican — sin escribir código de infraestructura.'
					},
					ecosystem: {
						kicker: 'Ecosistema OpenFusion',
						title: 'Tres librerías, un mismo modelo de entrega.',
						items: [
							{
								name: 'libOpenFusionAPI',
								role: 'Motor principal de la plataforma',
								desc: 'Modelo de endpoints, handlers, validación, gobernanza y runtime. Aquí vive la documentación más detallada y actualizada.',
								cta: 'Leer la documentación detallada',
								highlight: true,
								url: 'https://github.com/rdsslab/libOpenFusionAPI'
							},
							{
								name: 'libOpenFusionAPIGUI',
								role: 'Interfaz de gestión',
								desc: 'GUI admin basada en Svelte que acelera el onboarding de equipos técnicos y no especialistas.',
								cta: 'Ver repositorio',
								highlight: false,
								url: 'https://github.com/rdsslab/libOpenFusionAPIGUI'
							},
							{
								name: '@rdsslab/uFetch',
								role: 'Capa HTTP universal',
								desc: 'Ejecución HTTP resiliente para Node/navegador y peticiones batch a prueba de fallos en cargas integradas.',
								cta: 'Ver repositorio',
								highlight: false,
								url: 'https://github.com/rdsslab/uFetch'
							}
						]
					},
					adminUi: {
						kicker: 'Vista de la consola admin',
						title: 'Interfaz real — diseñada para humanos y IA.',
						text: 'La consola admin es una SPA en Svelte con barra lateral persistente, selector de app en la cabecera y panel principal contextual. Todas las secciones accesibles desde la barra lateral:',
						sections: [
							{
								title: 'Flujo principal',
								desc: 'Gestión diaria de endpoints',
								items: [
									'New — crear aplicación/endpoint/variable/clave/bot/tarea',
									'Dashboard — CPU, memoria, tiempo de respuesta, volumen de peticiones, códigos de estado, top endpoints, errores en tiempo real',
									'Basic — vista general y ajustes de la app',
									'Endpoints — listar, crear, editar, probar, clonar, promover entre dev/qa/prd',
									'Variables — configuración a nivel de app por entorno (credenciales, hosts, valores reutilizables)',
									'API Keys — gestionar acceso de clientes externos con ámbitos y expiración'
								]
							},
							{
								title: 'Automatización y observabilidad',
								desc: 'Tareas recurrentes, bots y logs',
								items: [
									'Bots — bots de Telegram con grammY, webhook/polling, auto-recuperación',
									'Tasks — ejecución programada (interval/cron) de endpoints con historial',
									'Logs — búsqueda de trazas, filtrado de errores, análisis de consultas lentas, timeline por petición'
								]
							},
							{
								title: 'Administración del sistema',
								desc: 'Gestión de usuarios y clientes',
								items: [
									'Usuarios de Sistema — usuarios internos con permisos RBAC por entorno',
									'Clientes API — consumidores externos con auth JWT y rate limiting'
								]
							}
						]
					},
					quickstart: {
						kicker: 'Inicio rápido',
						title: 'Ejecútalo con Docker y publica tu primer endpoint en menos de 15 minutos.',
						steps: [
							'docker compose up -d',
							'Abre http://localhost:3000/openfusionapi',
							'Inicia sesión y crea una aplicación'
						],
						defaultCreds: 'Credenciales por defecto:',
						user: 'superopenfusionapi',
						pass: 'Sup3r@0penFusion!',
						local: {
							title: 'O ejecútalo localmente',
							code: 'git clone https://github.com/rdsslab/OpenFusionAPI.git\ncd OpenFusionAPI\nnpm install\nnpm run build\nnpm run start'
						}
					},
					cta: {
						title: '¿Listo para publicar tu próximo endpoint?',
						text: 'Explora la documentación, da una estrella al repo, levanta la imagen Docker o abre la consola en vivo.',
						github: 'OpenFusionAPI en GitHub',
						docs: 'Docs de la librería principal',
						console: 'Entrar'
					},
					footer: {
						tagline: 'Plataforma API low-code y amigable con IA.',
						rights: 'Publicado bajo la Licencia MIT.',
						links: {
							docs: 'Documentación',
							handlers: 'Referencia de handlers',
							compose: 'Docker Compose',
							license: 'Licencia'
						},
						open: 'OpenFusionAPI · instancia de producción'
					}
				}
	);

	const githubUrl = 'https://github.com/rdsslab/OpenFusionAPI';
	const libUrl = 'https://github.com/rdsslab/libOpenFusionAPI';
	const appUrl = '/openfusionapi';
</script>

<svelte:head>
	<title>OpenFusion API | Low-Code, AI-Friendly API Platform</title>
</svelte:head>

<div class="landing">
	<header class="nav">
		<a class="brand" href={resolve('/')} aria-label="OpenFusion API">
			<img src={logo} alt="OpenFusion API logo" width="36" height="36" />
			<span>OpenFusion API</span>
		</a>

		<nav class="nav-links">
			<a href="#docs">{t.nav.docs}</a>
			<a href="#features">{t.nav.features}</a>
			<div class="lang">
				<button
					class:active={lang === 'en'}
					aria-pressed={lang === 'en'}
					onclick={() => (lang = 'en')}
					type="button">EN</button
				>
				<button
					class:active={lang === 'es'}
					aria-pressed={lang === 'es'}
					onclick={() => (lang = 'es')}
					type="button">ES</button
				>
			</div>
			<a class="btn btn-ghost btn-enter" href={resolve(appUrl)}>{t.nav.app}</a>
			<a class="btn btn-primary" href={githubUrl} target="_blank" rel="noopener noreferrer">
				<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
				{t.nav.github}
			</a>
		</nav>
	</header>

	<main>
		<section class="hero">
			<span class="hero-badge">{t.hero.badge}</span>
			<h1>{t.hero.title}</h1>
			<p class="hero-sub">{t.hero.subtitle}</p>

			<div class="hero-cta">
				<a
					class="btn btn-primary btn-lg"
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
						/>
					</svg>
					{t.hero.ctaPrimary}
				</a>
				<a class="btn btn-ghost btn-lg" href={libUrl} target="_blank" rel="noopener noreferrer">
					{t.hero.ctaSecondary}
					<svg
						viewBox="0 0 24 24"
						width="16"
						height="16"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</a>
			</div>

			<div class="hero-stats">
				{#each t.hero.stats as stat (stat)}
					<div class="stat">
						<span class="stat-value">{stat.value}</span>
						<span class="stat-label">{stat.label}</span>
					</div>
				{/each}
			</div>

			<div class="hero-shot">
				<img src="/landing/screenshot.png" alt={t.problem.imgAlt} />
			</div>
		</section>

		<section class="strip" aria-label="Highlights">
			{#each t.strip as item (item)}
				<span class="chip">{item}</span>
			{/each}
		</section>

		<section class="section" id="problem">
			<div class="section-head">
				<span class="kicker">{t.problem.kicker}</span>
				<h2>{t.problem.title}</h2>
				<p>{t.problem.text}</p>
			</div>

			<div class="compare">
				<div class="compare-col">
					<h3 class="compare-title muted">{t.problem.colA}</h3>
					<ul>
						{#each t.problem.rows as row (row)}
							<li>{row}</li>
						{/each}
					</ul>
				</div>
				<div class="compare-col highlight">
					<h3 class="compare-title">{t.problem.colB}</h3>
					<ul>
						{#each t.problem.rowsB as row (row)}
							<li>{row}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="section" id="features">
			<div class="section-head">
				<span class="kicker">{t.features.kicker}</span>
				<h2>{t.features.title}</h2>
			</div>
			<div class="grid">
				{#each t.features.items as feature (feature)}
					<article class="card">
						<h3>{feature.title}</h3>
						<p>{feature.desc}</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="section" id="handlers">
			<div class="section-head">
				<span class="kicker">{t.handlers.kicker}</span>
				<h2>{t.handlers.title}</h2>
				<p>{t.handlers.text}</p>
			</div>
			<div class="handler-grid">
				{#each t.handlers.list as handler (handler)}
					<div class="handler-chip">
						<code>{handler.code}</code>
						<span>{handler.desc}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section" id="how">
			<div class="section-head">
				<span class="kicker">{t.how.kicker}</span>
				<h2>{t.how.title}</h2>
			</div>
			<div class="steps">
				{#each t.how.steps as step, i (step)}
					<article class="step">
						<span class="step-num">0{i + 1}</span>
						<h3>{step.title}</h3>
						<p>{step.desc}</p>
					</article>
				{/each}
			</div>

			<div class="agent">
				<div>
					<h3>{t.how.agentTitle}</h3>
					<p>{t.how.agentText}</p>
				</div>
				<div class="agent-flow">
					{#each t.how.steps as step, i (step)}
						<span>{i + 1}. {step.title}</span>
					{/each}
				</div>
			</div>
		</section>

		<section class="section" id="admin-ui">
			<div class="section-head">
				<span class="kicker">{t.adminUi.kicker}</span>
				<h2>{t.adminUi.title}</h2>
				<p>{t.adminUi.text}</p>
			</div>
			<div class="admin-ui-grid">
				{#each t.adminUi.sections as section (section)}
					<article class="admin-ui-card">
						<h3>{section.title}</h3>
						<p>{section.desc}</p>
						<ul>
							{#each section.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>

			<div class="admin-ui-screenshots">
				<h3 class="screenshots-title">
					{lang === 'en' ? 'Admin UI Screenshots' : 'Capturas de la Consola Admin'}
				</h3>

				<div class="carousel" role="region" aria-label="Admin UI screenshots carousel">
					<div class="carousel-track" style="transform: translateX({-currentSlide * 100}%);">
						{#each screenshots as screenshot, i (screenshot.src)}
							<div class="carousel-slide" style="width: 100%;">
								<figure class="carousel-figure">
									<button
										type="button"
										class="carousel-figure-btn"
										aria-label={lang === 'en'
											? `Enlarge: ${screenshot.alt.en}`
											: `Ampliar: ${screenshot.alt.es}`}
										onclick={() => openLightbox(i)}
									>
										<img
											src={screenshot.src}
											alt={screenshot.alt[lang]}
											loading={i === 0 ? 'eager' : 'lazy'}
										/>
									</button>
									<figcaption>{screenshot.caption[lang]}</figcaption>
								</figure>
							</div>
						{/each}
					</div>

					<button
						class="carousel-btn carousel-prev"
						aria-label={lang === 'en' ? 'Previous screenshot' : 'Captura anterior'}
						onclick={prevSlide}
					>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg
						>
					</button>
					<button
						class="carousel-btn carousel-next"
						aria-label={lang === 'en' ? 'Next screenshot' : 'Siguiente captura'}
						onclick={nextSlide}
					>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg
						>
					</button>

					<div class="carousel-indicators" aria-label="Slide indicators">
						{#each screenshots as screenshot, i (screenshot.src)}
							<button
								class="carousel-indicator {i === currentSlide ? 'active' : ''}"
								aria-label={lang === 'en' ? `Go to slide ${i + 1}` : `Ir a captura ${i + 1}`}
								aria-current={i === currentSlide ? 'true' : 'false'}
								onclick={() => goToSlide(i)}
							></button>
						{/each}
					</div>
				</div>

				<p class="carousel-hint">
					{lang === 'en'
						? 'Click image to enlarge • Auto-advances every 5s'
						: 'Clic en la imagen para ampliar • Avanza automáticamente cada 5s'}
				</p>

				{#if lightboxOpen}
					<div
						class="lightbox"
						role="dialog"
						aria-modal="true"
						tabindex="-1"
						aria-label={lang === 'en' ? 'Enlarged screenshot' : 'Captura ampliada'}
						onkeydown={(e) => {
							if (e.key === 'Escape') {
								e.stopPropagation();
								closeLightbox();
							}
						}}
						onclick={(e) => {
							// Close only when the backdrop itself is clicked
							if (e.target === e.currentTarget) {
								closeLightbox();
							}
						}}
					>
						<button
							class="lightbox-close"
							aria-label={lang === 'en' ? 'Close' : 'Cerrar'}
							onclick={closeLightbox}
						>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg
							>
						</button>
						<button
							class="lightbox-nav lightbox-prev"
							aria-label={lang === 'en' ? 'Previous' : 'Anterior'}
							onclick={(e) => {
								e.stopPropagation();
								prevLightbox();
							}}
						>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg
							>
						</button>
						<figure class="lightbox-figure">
							<img
								src={screenshots[lightboxIndex].src}
								alt={screenshots[lightboxIndex].alt[lang]}
							/>
							<figcaption>{screenshots[lightboxIndex].caption[lang]}</figcaption>
						</figure>
						<button
							class="lightbox-nav lightbox-next"
							aria-label={lang === 'en' ? 'Next' : 'Siguiente'}
							onclick={(e) => {
								e.stopPropagation();
								nextLightbox();
							}}
						>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg
							>
						</button>
					</div>
				{/if}
			</div>
		</section>

		<section class="section" id="docs">
			<div class="section-head">
				<span class="kicker">{t.ecosystem.kicker}</span>
				<h2>{t.ecosystem.title}</h2>
			</div>
			<div class="ecosystem">
				{#each t.ecosystem.items as item (item)}
					<article class="eco-card" class:highlight={item.highlight}>
						<span class="eco-role">{item.role}</span>
						<h3>{item.name}</h3>
						<p>{item.desc}</p>
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							class="btn btn-sm"
							class:btn-primary={item.highlight}
							class:btn-ghost={!item.highlight}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.cta}
						</a>
						<!-- eslint-enable svelte/no-navigation-without-resolve -->
					</article>
				{/each}
			</div>
		</section>

		<section class="section" id="quickstart">
			<div class="section-head">
				<span class="kicker">{t.quickstart.kicker}</span>
				<h2>{t.quickstart.title}</h2>
			</div>
			<div class="quickstart">
				<div class="quick-col">
					<ol>
						{#each t.quickstart.steps as step (step)}
							<li><code>{step}</code></li>
						{/each}
					</ol>
					<p class="creds">
						{t.quickstart.defaultCreds}
						<code>{t.quickstart.user}</code> / <code>{t.quickstart.pass}</code>
					</p>
				</div>
				<div class="quick-col">
					<h3>{t.quickstart.local.title}</h3>
					<pre><code>{t.quickstart.local.code}</code></pre>
				</div>
			</div>
		</section>

		<section class="cta">
			<h2>{t.cta.title}</h2>
			<p>{t.cta.text}</p>
			<div class="cta-buttons">
				<a class="btn btn-primary btn-lg" href={githubUrl} target="_blank" rel="noopener noreferrer"
					>{t.cta.github}</a
				>
				<a class="btn btn-ghost btn-lg" href={libUrl} target="_blank" rel="noopener noreferrer"
					>{t.cta.docs}</a
				>
				<a class="btn btn-ghost btn-lg btn-enter" href={resolve(appUrl)}>{t.cta.console}</a>
			</div>
		</section>
	</main>

	<footer class="footer">
		<div class="footer-top">
			<a class="brand" href={resolve('/')}>
				<img src={logo} alt="OpenFusion API logo" width="32" height="32" />
				<span>OpenFusion API</span>
			</a>
			<p>{t.footer.tagline}</p>
			<p class="footer-open">
				{t.footer.open} ·
				<a href="https://www.openfusionapi.com" target="_blank" rel="noopener noreferrer"
					>openfusionapi.com</a
				>
			</p>
		</div>
		<div class="footer-links">
			<a href={libUrl} target="_blank" rel="noopener noreferrer">{t.footer.links.docs}</a>
			<a href={libUrl} target="_blank" rel="noopener noreferrer">{t.footer.links.handlers}</a>
			<a href={githubUrl} target="_blank" rel="noopener noreferrer">{t.footer.links.compose}</a>
			<a href={githubUrl} target="_blank" rel="noopener noreferrer">{t.footer.links.license}</a>
		</div>
		<p class="footer-rights">{t.footer.rights}</p>
	</footer>
</div>

<style>
	.landing {
		--bg: #070b14;
		--bg-soft: #0e131c;
		--panel: rgba(255, 255, 255, 0.04);
		--border: rgba(255, 255, 255, 0.09);
		--text: #e8ecf4;
		--muted: #9aa5bd;
		--accent-1: #ff6b1a;
		--accent-2: #ff8c42;
		--accent-3: #ff3d00;

		background: var(--bg);
		background-image:
			radial-gradient(60rem 40rem at 10% -10%, rgba(255, 107, 26, 0.28), transparent 60%),
			radial-gradient(50rem 36rem at 90% 8%, rgba(255, 140, 66, 0.16), transparent 55%),
			radial-gradient(56rem 42rem at 50% 110%, rgba(255, 61, 0, 0.2), transparent 60%);
		color: var(--text);
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			sans-serif;
		line-height: 1.6;
		min-height: 100vh;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(html) {
		color-scheme: dark;
	}

	::selection {
		background: rgba(255, 107, 26, 0.45);
		color: #fff;
	}

	:focus-visible {
		outline: 2px solid var(--accent-2);
		outline-offset: 2px;
	}

	img {
		display: block;
		max-width: 100%;
	}

	.nav {
		align-items: center;
		backdrop-filter: blur(12px);
		background: rgba(7, 11, 20, 0.72);
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: space-between;
		padding: 0.9rem clamp(1rem, 4vw, 3.5rem);
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.brand {
		align-items: center;
		display: inline-flex;
		font-weight: 700;
		gap: 0.6rem;
	}

	.nav-links {
		align-items: center;
		display: flex;
		gap: 1.25rem;
	}

	.nav-links > a:not(.btn) {
		color: var(--muted);
		font-size: 0.92rem;
	}

	.nav-links > a:not(.btn):hover {
		color: var(--text);
	}

	.lang {
		border: 1px solid var(--border);
		border-radius: 999px;
		display: inline-flex;
		overflow: hidden;
	}

	.lang button {
		background: transparent;
		border: 0;
		color: var(--muted);
		cursor: pointer;
		font: inherit;
		font-size: 0.82rem;
		padding: 0.25rem 0.7rem;
	}

	.lang button.active {
		background: linear-gradient(135deg, var(--accent-1), var(--accent-3));
		color: #fff;
	}

	.btn {
		align-items: center;
		border-radius: 10px;
		display: inline-flex;
		font-size: 0.92rem;
		font-weight: 600;
		gap: 0.5rem;
		justify-content: center;
		padding: 0.6rem 1.1rem;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease,
			background 0.15s ease;
		white-space: nowrap;
	}

	.btn:hover {
		transform: translateY(-1px);
	}

	.btn-sm {
		padding: 0.45rem 0.9rem;
	}

	.btn-lg {
		font-size: 1rem;
		padding: 0.85rem 1.5rem;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--accent-1), var(--accent-3));
		box-shadow: 0 8px 24px rgba(255, 107, 26, 0.35);
		color: #fff;
	}

	.btn-primary:hover {
		box-shadow: 0 12px 32px rgba(255, 107, 26, 0.5);
	}

	.btn-ghost {
		background: var(--panel);
		border: 1px solid var(--border);
		color: var(--text);
	}

	.btn-ghost:hover {
		background: rgba(255, 255, 255, 0.08);
	}

	/* ── Animated fire border for the console "Enter" buttons ── */
	.btn-enter {
		position: relative;
		isolation: isolate;
		animation: enterGlow 2.6s ease-in-out infinite;
	}

	.btn-enter::before {
		content: '';
		position: absolute;
		inset: 0;
		padding: 2px;
		border-radius: inherit;
		background: linear-gradient(100deg, var(--accent-1), #ffdf4d, var(--accent-3), var(--accent-1));
		background-size: 300% 100%;
		animation: enterBorderShift 4s linear infinite;
		-webkit-mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		mask-composite: exclude;
		pointer-events: none;
	}

	@keyframes enterBorderShift {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100% 0;
		}
	}

	@keyframes enterGlow {
		0%,
		100% {
			box-shadow: 0 0 0 rgba(255, 107, 26, 0);
		}
		50% {
			box-shadow: 0 0 18px rgba(255, 107, 26, 0.55);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.btn-enter::before {
			animation: none;
			background: var(--accent-1);
		}
		.btn-enter {
			animation: none;
			box-shadow: 0 0 10px rgba(255, 107, 26, 0.3);
		}
	}

	.hero {
		margin: 0 auto;
		max-width: 1100px;
		padding: clamp(3.5rem, 9vw, 7rem) clamp(1rem, 4vw, 3rem) 0;
		text-align: center;
	}

	.hero-badge {
		background: rgba(255, 107, 26, 0.14);
		border: 1px solid rgba(255, 107, 26, 0.4);
		border-radius: 999px;
		color: #ffd0a3;
		display: inline-block;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		margin-bottom: 1.5rem;
		padding: 0.4rem 1rem;
	}

	h1 {
		font-size: clamp(2.2rem, 5.5vw, 3.9rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.08;
		margin: 0 auto 1.25rem;
		max-width: 18ch;
	}

	h1,
	h2,
	h3 {
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			sans-serif;
	}

	.hero-sub {
		color: var(--muted);
		font-size: clamp(1rem, 2vw, 1.2rem);
		margin: 0 auto 2.25rem;
		max-width: 62ch;
	}

	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		justify-content: center;
	}

	.hero-stats {
		border-top: 1px solid var(--border);
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		margin: 3.5rem auto 0;
		max-width: 820px;
		padding-top: 2rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
	}

	.stat-value {
		color: var(--accent-1);
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		font-size: 1.6rem;
		font-weight: 700;
	}

	.stat-label {
		color: var(--muted);
		font-size: 0.88rem;
	}

	.hero-shot {
		border: 1px solid var(--border);
		border-radius: 16px;
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
		margin: 3rem auto 0;
		overflow: hidden;
		max-width: 960px;
	}

	.hero-shot img {
		width: 100%;
	}

	.strip {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		justify-content: center;
		margin: 3rem auto;
		max-width: 980px;
		padding: 0 1rem;
	}

	.chip {
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 999px;
		color: var(--muted);
		font-size: 0.85rem;
		padding: 0.4rem 0.9rem;
	}

	.section {
		margin: 0 auto;
		max-width: 1100px;
		padding: clamp(3rem, 7vw, 5.5rem) clamp(1rem, 4vw, 3rem);
	}

	.section-head {
		margin-bottom: 2.5rem;
		max-width: 720px;
	}

	.section-head p {
		color: var(--muted);
		font-size: 1.05rem;
	}

	.kicker {
		color: var(--accent-2);
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		margin-bottom: 0.8rem;
		text-transform: uppercase;
	}

	h2 {
		font-size: clamp(1.6rem, 3.4vw, 2.4rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.15;
		margin: 0 0 0.9rem;
	}

	.compare {
		display: grid;
		gap: 1.2rem;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}

	.compare-col {
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.6rem;
	}

	.compare-col.highlight {
		background: linear-gradient(180deg, rgba(255, 107, 26, 0.12), rgba(255, 140, 66, 0.06));
		border-color: rgba(255, 107, 26, 0.45);
	}

	.compare-title {
		font-size: 1.05rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.compare-title.muted {
		color: var(--muted);
	}

	.compare-col ul {
		display: grid;
		gap: 0.7rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.compare-col li {
		align-items: flex-start;
		color: var(--muted);
		display: flex;
		font-size: 0.95rem;
		gap: 0.6rem;
	}

	.compare-col li::before {
		border-radius: 50%;
		content: '';
		flex: none;
		height: 0.5rem;
		margin-top: 0.5rem;
		width: 0.5rem;
	}

	.compare-col:not(.highlight) li::before {
		background: rgba(248, 113, 113, 0.7);
	}

	.compare-col.highlight li {
		color: var(--text);
	}

	.compare-col.highlight li::before {
		background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
	}

	.grid {
		display: grid;
		gap: 1.1rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.card {
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.4rem 1.5rem;
		transition:
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.card:hover {
		border-color: rgba(255, 107, 26, 0.5);
		transform: translateY(-3px);
	}

	.card h3 {
		font-size: 1.05rem;
		margin: 0 0 0.5rem;
	}

	.card p {
		color: var(--muted);
		font-size: 0.93rem;
		margin: 0;
	}

	.handler-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	}

	.handler-chip {
		align-items: flex-start;
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 14px;
		display: flex;
		gap: 1rem;
		padding: 1.15rem 1.3rem;
	}

	.handler-chip code {
		background: rgba(255, 140, 66, 0.12);
		border: 1px solid rgba(255, 140, 66, 0.35);
		border-radius: 8px;
		color: #ffd0a3;
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		font-size: 0.8rem;
		font-weight: 700;
		flex: none;
		padding: 0.25rem 0.5rem;
	}

	.handler-chip span {
		color: var(--muted);
		font-size: 0.92rem;
	}

	.steps {
		display: grid;
		gap: 1.2rem;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
	}

	.step {
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.6rem;
	}

	.step-num {
		color: var(--accent-2);
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		font-size: 1.4rem;
		font-weight: 700;
	}

	.step h3 {
		font-size: 1.05rem;
		margin: 0.6rem 0 0.4rem;
	}

	.step p {
		color: var(--muted);
		font-size: 0.93rem;
		margin: 0;
	}

	.agent {
		align-items: center;
		background: linear-gradient(135deg, rgba(255, 61, 0, 0.14), rgba(255, 107, 26, 0.1));
		border: 1px solid rgba(255, 61, 0, 0.4);
		border-radius: 16px;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		margin-top: 2rem;
		padding: 1.8rem;
	}

	.agent h3 {
		font-size: 1.15rem;
		margin: 0 0 0.5rem;
	}

	.agent p {
		color: var(--muted);
		font-size: 0.95rem;
		margin: 0;
	}

	.agent-flow {
		border-left: 1px solid rgba(255, 61, 0, 0.4);
		display: grid;
		gap: 0.45rem;
		padding-left: 1.2rem;
	}

	.agent-flow span {
		color: var(--text);
		font-size: 0.92rem;
	}

	.ecosystem {
		display: grid;
		gap: 1.2rem;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}

	.eco-card {
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 1.6rem;
	}

	.eco-card.highlight {
		background: linear-gradient(180deg, rgba(255, 107, 26, 0.16), rgba(255, 140, 66, 0.08));
		border-color: rgba(255, 107, 26, 0.5);
	}

	.eco-role {
		color: var(--accent-2);
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.eco-card h3 {
		font-size: 1.2rem;
		margin: 0;
	}

	.eco-card p {
		color: var(--muted);
		font-size: 0.95rem;
		margin: 0;
	}

	.eco-card .btn {
		align-self: flex-start;
		margin-top: auto;
	}

	.admin-ui-grid {
		display: grid;
		gap: 1.2rem;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	.admin-ui-card {
		background: var(--panel);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 1.6rem;
	}

	.admin-ui-card h3 {
		font-size: 1.1rem;
		margin: 0 0 0.4rem;
	}

	.admin-ui-card p {
		color: var(--muted);
		font-size: 0.9rem;
		margin: 0 0 1rem;
	}

	.admin-ui-card ul {
		display: grid;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.admin-ui-card li {
		align-items: flex-start;
		color: var(--text);
		display: flex;
		font-size: 0.88rem;
		gap: 0.5rem;
	}

	.admin-ui-card li::before {
		background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
		border-radius: 50%;
		content: '';
		flex: none;
		height: 0.4rem;
		margin-top: 0.55rem;
		width: 0.4rem;
	}

	.admin-ui-screenshots {
		margin-top: 3rem;
	}

	.screenshots-title {
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0 0 1.5rem;
		text-align: center;
	}

	/* ── Carousel ── */
	.carousel {
		position: relative;
		max-width: 1100px;
		margin: 0 auto;
		border-radius: 16px;
		overflow: hidden;
		background: var(--panel);
		border: 1px solid var(--border);
	}

	.carousel-track {
		display: flex;
		transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.carousel-slide {
		flex: 0 0 100%;
	}

	.carousel-figure {
		margin: 0;
		position: relative;
		background: var(--panel-dark, #0b0f1a);
	}

	.carousel-figure-btn {
		display: block;
		width: 100%;
		padding: 0;
		border: none;
		background: none;
		cursor: zoom-in;
		overflow: hidden;
	}

	.carousel-figure-btn:focus-visible {
		outline: 2px solid var(--accent-2);
		outline-offset: -2px;
	}

	.carousel-figure img {
		display: block;
		width: 100%;
		aspect-ratio: 1035 / 765;
		object-fit: contain;
		object-position: center;
	}

	.carousel-figure figcaption {
		background: linear-gradient(180deg, transparent, rgba(7, 11, 20, 0.95));
		border-top: 1px solid var(--border);
		color: var(--muted);
		font-size: 0.9rem;
		padding: 1.2rem 1.5rem 1rem;
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(7, 11, 20, 0.8);
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--text);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem;
		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
		z-index: 10;
	}

	.carousel-btn:hover {
		background: rgba(255, 107, 26, 0.9);
		border-color: var(--accent-1);
		transform: translateY(-50%) scale(1.1);
	}

	.carousel-btn:focus-visible {
		outline: 2px solid var(--accent-2);
		outline-offset: 2px;
	}

	.carousel-prev {
		left: 1rem;
	}
	.carousel-next {
		right: 1rem;
	}

	@media (max-width: 760px) {
		.carousel-btn {
			padding: 0.5rem;
		}
		.carousel-prev {
			left: 0.5rem;
		}
		.carousel-next {
			right: 0.5rem;
		}
		.carousel-figure figcaption {
			padding: 0.8rem 1rem 0.6rem;
			font-size: 0.8rem;
		}
	}

	.carousel-indicators {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		padding: 1rem 1.5rem;
		background: var(--panel);
		border-top: 1px solid var(--border);
	}

	.carousel-indicator {
		background: var(--border);
		border: none;
		border-radius: 50%;
		cursor: pointer;
		height: 8px;
		width: 8px;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
	}

	.carousel-indicator:hover {
		background: var(--accent-2);
		transform: scale(1.2);
	}

	.carousel-indicator.active {
		background: var(--accent-1);
		transform: scale(1.25);
	}

	.carousel-hint {
		color: var(--muted);
		font-size: 0.8rem;
		margin: 1rem 0 0;
		text-align: center;
	}

	/* ── Lightbox ── */
	.lightbox {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.95);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		animation: lightboxFadeIn 0.2s ease;
		padding: 2rem;
	}

	@keyframes lightboxFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.lightbox-close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		background: rgba(7, 11, 20, 0.8);
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--text);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem;
		transition:
			background 0.2s ease,
			border-color 0.2s ease;
		z-index: 10;
	}

	.lightbox-close:hover {
		background: rgba(255, 61, 0, 0.9);
		border-color: var(--accent-3);
	}

	.lightbox-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(7, 11, 20, 0.8);
		border: 1px solid var(--border);
		border-radius: 50%;
		color: var(--text);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem;
		transition:
			background 0.2s ease,
			border-color 0.2s ease;
		z-index: 10;
	}

	.lightbox-nav:hover {
		background: rgba(255, 107, 26, 0.9);
		border-color: var(--accent-1);
	}

	.lightbox-prev {
		left: 1.5rem;
	}
	.lightbox-next {
		right: 1.5rem;
	}

	@media (max-width: 760px) {
		.lightbox-close {
			top: 1rem;
			right: 1rem;
			padding: 0.5rem;
		}
		.lightbox-nav {
			padding: 0.5rem;
		}
		.lightbox-prev {
			left: 1rem;
		}
		.lightbox-next {
			right: 1rem;
		}
	}

	.lightbox-figure {
		margin: 0;
		max-width: 90vw;
		max-height: 85vh;
	}

	.lightbox-figure img {
		display: block;
		max-width: 100%;
		max-height: 80vh;
		height: auto;
		object-fit: contain;
		border-radius: 8px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
	}

	.lightbox-figure figcaption {
		color: var(--muted);
		font-size: 0.95rem;
		margin-top: 1rem;
		padding: 0 1rem;
		text-align: center;
	}

	.quickstart {
		background: rgba(7, 11, 20, 0.6);
		border: 1px solid var(--border);
		border-radius: 16px;
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		padding: 1.8rem;
	}

	.quick-col ol {
		display: grid;
		gap: 0.8rem;
		margin: 0;
		padding-left: 1.2rem;
	}

	.quick-col li {
		color: var(--muted);
		font-size: 0.95rem;
	}

	.quick-col code,
	.creds code {
		background: rgba(255, 255, 255, 0.07);
		border-radius: 6px;
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		font-size: 0.88rem;
		padding: 0.15rem 0.45rem;
	}

	.creds {
		color: var(--muted);
		font-size: 0.92rem;
		margin-top: 1.2rem;
	}

	.quick-col h3 {
		margin: 0 0 0.8rem;
	}

	.quick-col pre {
		background: #0a0f1c;
		border: 1px solid var(--border);
		border-radius: 10px;
		margin: 0;
		overflow-x: auto;
		padding: 1.1rem;
	}

	.quick-col pre code {
		background: transparent;
		color: #ffd0a3;
		font-size: 0.82rem;
		padding: 0;
	}

	.cta {
		background:
			radial-gradient(40rem 20rem at 50% 120%, rgba(255, 107, 26, 0.35), transparent 70%),
			var(--bg-soft);
		border-top: 1px solid var(--border);
		padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1rem, 4vw, 3rem);
		text-align: center;
	}

	.cta h2 {
		margin-left: auto;
		margin-right: auto;
		max-width: 24ch;
	}

	.cta p {
		color: var(--muted);
		font-size: 1.05rem;
		margin: 0 auto 2rem;
		max-width: 60ch;
	}

	.cta-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		justify-content: center;
	}

	.footer {
		background: #05080f;
		border-top: 1px solid var(--border);
		display: grid;
		gap: 1.2rem;
		justify-items: center;
		padding: 2.5rem clamp(1rem, 4vw, 3rem);
		text-align: center;
	}

	.footer p {
		color: var(--muted);
		font-size: 0.9rem;
		margin: 0;
	}

	.footer-open a {
		color: var(--accent-2);
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		justify-content: center;
	}

	.footer-links a {
		color: var(--muted);
		font-size: 0.9rem;
	}

	.footer-links a:hover {
		color: var(--text);
	}

	.footer-rights {
		font-size: 0.82rem;
	}

	:global(::-webkit-scrollbar) {
		height: 10px;
		width: 10px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #070b14;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: rgba(255, 255, 255, 0.14);
		border: 2px solid #070b14;
		border-radius: 999px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: rgba(255, 107, 26, 0.5);
	}

	:global(html) {
		scrollbar-color: rgba(255, 255, 255, 0.22) #070b14;
	}

	@media (max-width: 760px) {
		.nav-links > a:not(.btn) {
			display: none;
		}
	}
</style>
