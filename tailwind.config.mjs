/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				surface: {
					DEFAULT: '#f7f9fb',
					'container-lowest': '#ffffff',
					'container-low': '#f2f4f6',
					container: '#eceef0',
					'container-high': '#e6e8ea',
					'container-highest': '#e0e3e5',
					tint: '#525f71',
				},
				primary: {
					DEFAULT: '#000000',
					container: '#0f1c2c',
					fixed: '#d6e4f9',
				},
				secondary: {
					DEFAULT: '#006d37',
					container: '#6bfe9c',
					'on-container': '#00743a',
				},
				'on-surface': '#191c1e',
				'on-surface-variant': '#44474c',
				'on-primary': '#ffffff',
				'on-secondary': '#ffffff',
				outline: {
					DEFAULT: '#74777d',
					variant: '#c4c6cc',
				},
				error: '#ba1a1a',
			},
			fontFamily: {
				display: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
			fontSize: {
				'display-xl': [
					'72px',
					{ lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' },
				],
				'headline-lg': [
					'48px',
					{ lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' },
				],
				'headline-lg-mobile': [
					'32px',
					{ lineHeight: '1.2', fontWeight: '600' },
				],
				'headline-md': [
					'32px',
					{ lineHeight: '1.3', fontWeight: '600' },
				],
				'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
				'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
				'label-caps': [
					'12px',
					{ lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' },
				],
			},
			spacing: {
				xs: '4px',
				sm: '12px',
				md: '24px',
				lg: '48px',
				xl: '80px',
				gutter: '24px',
			},
			maxWidth: {
				container: '1280px',
			},
			boxShadow: {
				cloud: '0 20px 40px rgba(13, 27, 42, 0.05)',
			},
			borderRadius: {
				DEFAULT: '4px',
			},
		},
	},
};
