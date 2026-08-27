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
		client: {start:"_app/immutable/entry/start.WM44-Urq.js",app:"_app/immutable/entry/app.A6apLlgP.js",imports:["_app/immutable/entry/start.WM44-Urq.js","_app/immutable/chunks/Dm9VPeBZ.js","_app/immutable/chunks/CYKbcZLr.js","_app/immutable/chunks/h-uKQz1t.js","_app/immutable/entry/app.A6apLlgP.js","_app/immutable/chunks/Dm9VPeBZ.js","_app/immutable/chunks/d7YECzrN.js","_app/immutable/chunks/BOC6GrGB.js","_app/immutable/chunks/CYKbcZLr.js","_app/immutable/chunks/CMxpAMG3.js","_app/immutable/chunks/B6Q5HyOc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			
			return {  };
		},
		server_assets: {}
	}
}
})();
