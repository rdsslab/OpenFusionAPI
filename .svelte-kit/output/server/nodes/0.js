import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B5ypKeC2.js","_app/immutable/chunks/DdU6TeyE.js","_app/immutable/chunks/qlM31bOh.js","_app/immutable/chunks/DkMaMBf8.js","_app/immutable/chunks/CdMQSp13.js"];
export const stylesheets = [];
export const fonts = [];
