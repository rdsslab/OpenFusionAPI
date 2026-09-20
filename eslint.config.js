import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const gitignore = includeIgnoreFile(path.resolve(import.meta.dirname, '.gitignore'));

/** @type {import('eslint').Linter.Config[]} */
export default [
	gitignore,
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	...svelte.configs['flat/recommended'],
	...svelte.configs['flat/prettier'],
	{
		ignores: [
			'www/**',
			'.svelte-kit/**',
			'output/**',
			'.continue/**',
			'.github/**',
			'.vscode/**',
			'.claude/**',
			'.playwright-cli/**',
			'**/*.d.ts'
		]
	},
	prettier
];
