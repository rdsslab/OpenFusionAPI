

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/openfusionapi/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D8gcLRFA.js","_app/immutable/chunks/jE69t7OX.js","_app/immutable/chunks/D11ncwOE.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = ["_app/immutable/assets/3.CIIaeDZp.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.Bs6tcqqs.woff2","_app/immutable/assets/fa-regular-400.DRN8N0d1.woff2","_app/immutable/assets/fa-solid-900.IAB4Droh.woff2","_app/immutable/assets/fa-v4compatibility.CErXDOsT.woff2"];
