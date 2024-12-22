import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$hooks: 'src/lib/hooks',
			$utils: 'src/lib/utils',
		},
	},
};
export default config;
