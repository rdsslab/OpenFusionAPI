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
		client: {start:"_app/immutable/entry/start.dxrbmS1-.js",app:"_app/immutable/entry/app.yAsEDwEd.js",imports:["_app/immutable/entry/start.dxrbmS1-.js","_app/immutable/chunks/ChHfsZFY.js","_app/immutable/chunks/rRhGjEP3.js","_app/immutable/chunks/DMQcxWgJ.js","_app/immutable/entry/app.yAsEDwEd.js","_app/immutable/chunks/ChHfsZFY.js","_app/immutable/chunks/BAmWY7LE.js","_app/immutable/chunks/B7av97Hq.js","_app/immutable/chunks/rRhGjEP3.js","_app/immutable/chunks/6c_TZLns.js","_app/immutable/chunks/CKYYrpWv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
