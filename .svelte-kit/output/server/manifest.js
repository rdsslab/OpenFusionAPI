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
		client: {start:"_app/immutable/entry/start.CvRyEyuy.js",app:"_app/immutable/entry/app.BbXLDnWA.js",imports:["_app/immutable/entry/start.CvRyEyuy.js","_app/immutable/chunks/DXBuI49N.js","_app/immutable/chunks/CCnce0PM.js","_app/immutable/chunks/DLKkhhwc.js","_app/immutable/entry/app.BbXLDnWA.js","_app/immutable/chunks/CCnce0PM.js","_app/immutable/chunks/Bjw7MXHe.js","_app/immutable/chunks/B0vI5HJ-.js","_app/immutable/chunks/DLKkhhwc.js","_app/immutable/chunks/iA1A_eTV.js","_app/immutable/chunks/BpTGr0Fa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
