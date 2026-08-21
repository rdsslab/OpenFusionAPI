import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DEbtbhMk.js","_app/immutable/chunks/ByVderMS.js","_app/immutable/chunks/Ft9uEyJI.js","_app/immutable/chunks/UJtaq_z5.js","_app/immutable/chunks/C_EhQX_a.js"];
export const stylesheets = [];
export const fonts = [];
