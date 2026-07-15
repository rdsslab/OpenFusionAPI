export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icono01.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DJgYuIdq.js",app:"_app/immutable/entry/app.VhNsYNfX.js",imports:["_app/immutable/entry/start.DJgYuIdq.js","_app/immutable/chunks/CZlWIBYF.js","_app/immutable/chunks/DQhtrERB.js","_app/immutable/chunks/D6BNytTX.js","_app/immutable/entry/app.VhNsYNfX.js","_app/immutable/chunks/DQhtrERB.js","_app/immutable/chunks/CplmGJLJ.js","_app/immutable/chunks/6xQtPOe7.js","_app/immutable/chunks/D6BNytTX.js","_app/immutable/chunks/BHyiJAxq.js","_app/immutable/chunks/CBBDHL4S.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
