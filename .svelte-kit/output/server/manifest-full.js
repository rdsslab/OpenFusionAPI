export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icono01.png","landing/screenshot.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.p5Zxt3Yw.js",app:"_app/immutable/entry/app.DhS9jX2r.js",imports:["_app/immutable/entry/start.p5Zxt3Yw.js","_app/immutable/chunks/BiQyls9Z.js","_app/immutable/chunks/3cBWHhvM.js","_app/immutable/chunks/BIaccSAA.js","_app/immutable/entry/app.DhS9jX2r.js","_app/immutable/chunks/BiQyls9Z.js","_app/immutable/chunks/PrG3ektw.js","_app/immutable/chunks/Be8BmtHY.js","_app/immutable/chunks/3cBWHhvM.js","_app/immutable/chunks/BiUSH4BA.js","_app/immutable/chunks/BvztrB9Z.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
