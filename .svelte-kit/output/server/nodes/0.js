import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Dn168vOl.js","_app/immutable/chunks/Be8BmtHY.js","_app/immutable/chunks/BiQyls9Z.js","_app/immutable/chunks/BZgEktPD.js","_app/immutable/chunks/BvztrB9Z.js"];
export const stylesheets = [];
export const fonts = [];
