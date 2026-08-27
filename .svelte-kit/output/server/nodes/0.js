import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BvoUpC_c.js","_app/immutable/chunks/BOC6GrGB.js","_app/immutable/chunks/Dm9VPeBZ.js","_app/immutable/chunks/DmbHfchK.js","_app/immutable/chunks/B6Q5HyOc.js"];
export const stylesheets = [];
export const fonts = [];
