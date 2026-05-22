// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://atlaseo.ma',
	output: 'static',
	trailingSlash: 'never',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			filter: (page) =>
				!page.includes('/mentions-legales') &&
				!page.includes('/confidentialite'),
		}),
	],
});
