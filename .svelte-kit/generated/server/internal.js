
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<title>OpenFusion API | Low-Code, AI-Friendly API Platform</title>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<meta\n\t\t\tname=\"description\"\n\t\t\tcontent=\"OpenFusion API is a production-ready, low-code API platform to build, govern, and deploy endpoints fast for humans and AI agents with MCP support.\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"keywords\"\n\t\t\tcontent=\"OpenFusion API, low-code API platform, MCP, AI agents, API gateway, SOAP to REST, SQL API, integration platform, universal-fetch\"\n\t\t/>\n\t\t<meta name=\"robots\" content=\"index, follow\" />\n\t\t<meta name=\"author\" content=\"OpenFusion API\" />\n\n\t\t<meta property=\"og:type\" content=\"website\" />\n\t\t<meta\n\t\t\tproperty=\"og:title\"\n\t\t\tcontent=\"OpenFusion API | Production-Ready APIs for Humans and AI Agents\"\n\t\t/>\n\t\t<meta\n\t\t\tproperty=\"og:description\"\n\t\t\tcontent=\"Build and deploy API endpoints in minutes with reusable handlers, JSON Schema, environment isolation, and MCP-ready tooling.\"\n\t\t/>\n\t\t<meta property=\"og:site_name\" content=\"OpenFusion API\" />\n\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t\t<meta name=\"twitter:title\" content=\"OpenFusion API | Low-Code API Platform\" />\n\t\t<meta\n\t\t\tname=\"twitter:description\"\n\t\t\tcontent=\"A production-tested platform to create integration APIs faster, including AI-agent workflows and MCP tooling.\"\n\t\t/>\n\n\t\t<script type=\"application/ld+json\">\n\t\t\t{\n\t\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\t\"@type\": \"SoftwareApplication\",\n\t\t\t\t\"name\": \"OpenFusion API\",\n\t\t\t\t\"applicationCategory\": \"DeveloperApplication\",\n\t\t\t\t\"operatingSystem\": \"Linux, Windows, Docker\",\n\t\t\t\t\"description\": \"Low-code and AI-friendly platform to create, manage, and deploy API endpoints with built-in handlers, schema validation, and MCP integration.\",\n\t\t\t\t\"url\": \"https://www.openfusionapi.com\",\n\t\t\t\t\"softwareVersion\": \"1\"\n\t\t\t}\n\t\t</script>\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error
	},
	version_hash: "1dxysno"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
