export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set(["admin-ui/apiclients.png","admin-ui/apikeys.png","admin-ui/basic.png","admin-ui/bots.png","admin-ui/dashboard.png","admin-ui/endpoints.png","admin-ui/logs.png","admin-ui/system-users.png","admin-ui/tasks.png","admin-ui/variables.png","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icono01.png","landing/screenshot.png"]),
	mime_types: {".png":"image/png",".ico":"image/x-icon"},
	client: {start:"_app/immutable/entry/start.Ctbn51i-.js",app:"_app/immutable/entry/app.BdE6Df8_.js",imports:["_app/immutable/entry/start.Ctbn51i-.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/CRzLMJPS.js","_app/immutable/chunks/BDJTgC41.js","_app/immutable/chunks/esjcECqL.js","_app/immutable/chunks/ChjFk_Qr.js","_app/immutable/chunks/B87k6SFy.js","_app/immutable/chunks/DrBc5vkq.js","_app/immutable/entry/app.BdE6Df8_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
	
	nodes: [
		__memo(() => import('./nodes/0.js')),
		__memo(() => import('./nodes/1.js')),
		__memo(() => import('./nodes/2.js')),
		__memo(() => import('./nodes/3.js'))
	],
	remotes: {
		
	},
	routes: [
		{
			id: "/",
			pattern: /^\/$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 2 },
			endpoint: null
		},
		{
			id: "/openfusionapi",
			pattern: /^\/openfusionapi\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 3 },
			endpoint: null
		}
	],
	prerendered_routes: new Set([]),
	matchers: async () => {
		return {};
	},
	server_assets: {}
}
})();
