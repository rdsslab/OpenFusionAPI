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
		client: {start:"_app/immutable/entry/start.QXURAI9s.js",app:"_app/immutable/entry/app.D4-a231b.js",imports:["_app/immutable/entry/start.QXURAI9s.js","_app/immutable/chunks/DCGIGq9T.js","_app/immutable/chunks/hFSWOasN.js","_app/immutable/chunks/_qRdeSML.js","_app/immutable/entry/app.D4-a231b.js","_app/immutable/chunks/hFSWOasN.js","_app/immutable/chunks/BdWqek70.js","_app/immutable/chunks/CYTIQcpr.js","_app/immutable/chunks/_qRdeSML.js","_app/immutable/chunks/Cw0ldSUd.js","_app/immutable/chunks/NqFZHUJD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
