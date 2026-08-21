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
		client: {start:"_app/immutable/entry/start.Bn8yqnjD.js",app:"_app/immutable/entry/app.DoRxjO--.js",imports:["_app/immutable/entry/start.Bn8yqnjD.js","_app/immutable/chunks/Ft9uEyJI.js","_app/immutable/chunks/DXiC7E6Q.js","_app/immutable/chunks/DK81g_0K.js","_app/immutable/entry/app.DoRxjO--.js","_app/immutable/chunks/Ft9uEyJI.js","_app/immutable/chunks/Dz-bLFQS.js","_app/immutable/chunks/ByVderMS.js","_app/immutable/chunks/DXiC7E6Q.js","_app/immutable/chunks/5SH8XRQt.js","_app/immutable/chunks/C_EhQX_a.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
