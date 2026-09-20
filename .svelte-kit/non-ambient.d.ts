
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/openfusionapi";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/openfusionapi": Record<string, never>
		};
		Pathname(): "/" | "/openfusionapi/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/admin-ui/apiclients.png" | "/admin-ui/apikeys.png" | "/admin-ui/basic.png" | "/admin-ui/bots.png" | "/admin-ui/dashboard.png" | "/admin-ui/endpoints.png" | "/admin-ui/logs.png" | "/admin-ui/system-users.png" | "/admin-ui/tasks.png" | "/admin-ui/variables.png" | "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/favicon.png" | "/icono01.png" | "/landing/screenshot.png" | string & {};
	}
}