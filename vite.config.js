import adapter_static from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter_static({
				pages: './www'
			})
		})
	],
	build: {
		sourcemap: true
	}
});
