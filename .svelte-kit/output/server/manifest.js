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
		client: {start:"_app/immutable/entry/start.CLT_eyMT.js",app:"_app/immutable/entry/app.DhvhEvxy.js",imports:["_app/immutable/entry/start.CLT_eyMT.js","_app/immutable/chunks/qlM31bOh.js","_app/immutable/chunks/AVS9b612.js","_app/immutable/chunks/Dp9cwgfW.js","_app/immutable/entry/app.DhvhEvxy.js","_app/immutable/chunks/qlM31bOh.js","_app/immutable/chunks/dxnAihbV.js","_app/immutable/chunks/DdU6TeyE.js","_app/immutable/chunks/AVS9b612.js","_app/immutable/chunks/BjnbIYlQ.js","_app/immutable/chunks/CdMQSp13.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
