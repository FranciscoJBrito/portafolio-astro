/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans:['Raleway','sans-serif']
		},
		colors: {
			white: {
				light: '#ffffff',
				DEFAULT: '#FFFFFF',
				dark: '#ffffff',
			},
			'gray-border': '#f8fafc0f',
			'slate-900': '#0f172a',
			'blue': '#0e8eff',
			'deep-blue': '#202539',
			'gray-bg': '#f9faff',
			'border-deep-green': '#1c1c1c',
			'bg-deep-green': '#171717',
			'primary-green': '#b1fa93',
			'auxiliary-green': '#263023',
			'bg-black': '#0a0a0a'
		},
		extend: {
		}
	},
	plugins: [],
}
