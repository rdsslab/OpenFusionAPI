
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const SVELTEKIT_FORK: string;
	export const NODE_ENV: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
	export const QT_FONT_DPI: string;
	export const npm_config_global_prefix: string;
	export const XDG_DATA_DIRS: string;
	export const npm_execpath: string;
	export const npm_config_globalconfig: string;
	export const XDG_VTNR: string;
	export const QT_IM_MODULE: string;
	export const LC_IDENTIFICATION: string;
	export const npm_config_allow_scripts: string;
	export const GDMSESSION: string;
	export const npm_config_init_module: string;
	export const QT_ACCESSIBILITY: string;
	export const MATE_DESKTOP_SESSION_ID: string;
	export const npm_lifecycle_event: string;
	export const LC_NAME: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const npm_lifecycle_script: string;
	export const TERM_PROGRAM: string;
	export const LS_COLORS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const npm_config_user_agent: string;
	export const LC_ADDRESS: string;
	export const CLUTTER_IM_MODULE: string;
	export const SSH_AUTH_SOCK: string;
	export const LC_MONETARY: string;
	export const GTK_MODULES: string;
	export const GTK_IM_MODULE: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const GIT_ASKPASS: string;
	export const COLOR: string;
	export const XDG_SEAT_PATH: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const LC_NUMERIC: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_prefix: string;
	export const NVM_INC: string;
	export const CLUTTER_BACKEND: string;
	export const PATH: string;
	export const DESKTOP_SESSION: string;
	export const TERM_PROGRAM_VERSION: string;
	export const XDG_CONFIG_DIRS: string;
	export const TERM: string;
	export const QT_SCALE_FACTOR: string;
	export const LC_MEASUREMENT: string;
	export const npm_package_name: string;
	export const HOME: string;
	export const NVM_CD_FLAGS: string;
	export const LC_TIME: string;
	export const LANG: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const PWD: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XAUTHORITY: string;
	export const npm_config_local_prefix: string;
	export const SSH_AGENT_PID: string;
	export const CHROME_DESKTOP: string;
	export const GTK_OVERLAY_SCROLLING: string;
	export const npm_package_version: string;
	export const XDG_SEAT: string;
	export const npm_command: string;
	export const GPG_AGENT_INFO: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_json: string;
	export const GDK_BACKEND: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const LC_PAPER: string;
	export const LC_TELEPHONE: string;
	export const XDG_SESSION_CLASS: string;
	export const OPENCODE_TERMINAL: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const FC_FONTATIONS: string;
	export const SHELL: string;
	export const npm_config_node_gyp: string;
	export const SESSION_MANAGER: string;
	export const NODE: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const _: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const NVM_BIN: string;
	export const XMODIFIERS: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		SVELTEKIT_FORK: string;
		NODE_ENV: string;
		EDITOR: string;
		INIT_CWD: string;
		QT_FONT_DPI: string;
		npm_config_global_prefix: string;
		XDG_DATA_DIRS: string;
		npm_execpath: string;
		npm_config_globalconfig: string;
		XDG_VTNR: string;
		QT_IM_MODULE: string;
		LC_IDENTIFICATION: string;
		npm_config_allow_scripts: string;
		GDMSESSION: string;
		npm_config_init_module: string;
		QT_ACCESSIBILITY: string;
		MATE_DESKTOP_SESSION_ID: string;
		npm_lifecycle_event: string;
		LC_NAME: string;
		XDG_GREETER_DATA_DIR: string;
		npm_lifecycle_script: string;
		TERM_PROGRAM: string;
		LS_COLORS: string;
		XDG_SESSION_DESKTOP: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		npm_config_user_agent: string;
		LC_ADDRESS: string;
		CLUTTER_IM_MODULE: string;
		SSH_AUTH_SOCK: string;
		LC_MONETARY: string;
		GTK_MODULES: string;
		GTK_IM_MODULE: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		GIT_ASKPASS: string;
		COLOR: string;
		XDG_SEAT_PATH: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		LC_NUMERIC: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_prefix: string;
		NVM_INC: string;
		CLUTTER_BACKEND: string;
		PATH: string;
		DESKTOP_SESSION: string;
		TERM_PROGRAM_VERSION: string;
		XDG_CONFIG_DIRS: string;
		TERM: string;
		QT_SCALE_FACTOR: string;
		LC_MEASUREMENT: string;
		npm_package_name: string;
		HOME: string;
		NVM_CD_FLAGS: string;
		LC_TIME: string;
		LANG: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		PWD: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XAUTHORITY: string;
		npm_config_local_prefix: string;
		SSH_AGENT_PID: string;
		CHROME_DESKTOP: string;
		GTK_OVERLAY_SCROLLING: string;
		npm_package_version: string;
		XDG_SEAT: string;
		npm_command: string;
		GPG_AGENT_INFO: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		SHLVL: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_json: string;
		GDK_BACKEND: string;
		NVM_DIR: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		LC_PAPER: string;
		LC_TELEPHONE: string;
		XDG_SESSION_CLASS: string;
		OPENCODE_TERMINAL: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		FC_FONTATIONS: string;
		SHELL: string;
		npm_config_node_gyp: string;
		SESSION_MANAGER: string;
		NODE: string;
		XDG_SESSION_PATH: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		_: string;
		XDG_CURRENT_DESKTOP: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		NVM_BIN: string;
		XMODIFIERS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
