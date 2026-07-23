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
		client: {start:"_app/immutable/entry/start.CVpk1ntQ.js",app:"_app/immutable/entry/app.BDWZhcl1.js",imports:["_app/immutable/entry/start.CVpk1ntQ.js","_app/immutable/chunks/BPK82OLu.js","_app/immutable/chunks/CG9SPs7T.js","_app/immutable/chunks/DvaNPz5m.js","_app/immutable/entry/app.BDWZhcl1.js","_app/immutable/chunks/CG9SPs7T.js","_app/immutable/chunks/CEBRThOs.js","_app/immutable/chunks/Cd68eGK3.js","_app/immutable/chunks/DvaNPz5m.js","_app/immutable/chunks/HhlgIoxS.js","_app/immutable/chunks/BB2hYgyG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
