import { h as ssr_context } from "./server.js";
// node_modules/svelte/src/index-server.js
/** @import { SSRContext } from '#server' */
/** @import { Renderer } from './internal/server/renderer.js' */
/** @param {() => void} fn */
function onDestroy(fn) {
	/** @type {Renderer} */ ssr_context.r.on_destroy(fn);
}
export { onDestroy as t };

//# sourceMappingURL=index-server.js.map