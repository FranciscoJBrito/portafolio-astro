/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'node_modules/preline/dist/*.js', 
	],
	theme: {
		fontFamily: {
			sans:['alfabet','sans-serif']
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
	plugins: [
		preline,
	],
}
