import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C3f7fOL8.js","_app/immutable/chunks/B0vI5HJ-.js","_app/immutable/chunks/CCnce0PM.js","_app/immutable/chunks/oAffJMD7.js","_app/immutable/chunks/BpTGr0Fa.js"];
export const stylesheets = [];
export const fonts = [];
