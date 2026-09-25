export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin-ui/apiclients.png","admin-ui/apikeys.png","admin-ui/basic.png","admin-ui/bots.png","admin-ui/dashboard.png","admin-ui/endpoints.png","admin-ui/logs.png","admin-ui/system-users.png","admin-ui/tasks.png","admin-ui/variables.png","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icono01.png","landing/screenshot.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D0SNM7dR.js",app:"_app/immutable/entry/app.DzZxtBVU.js",imports:["_app/immutable/entry/start.D0SNM7dR.js","_app/immutable/chunks/DKHkpEkj.js","_app/immutable/chunks/jE69t7OX.js","_app/immutable/chunks/D11ncwOE.js","_app/immutable/entry/app.DzZxtBVU.js","_app/immutable/chunks/jE69t7OX.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/openfusionapi/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
