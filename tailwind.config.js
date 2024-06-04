/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat Alternates', 'sans-serif'],
			},
			colors: {
				primary: {
					50: '#f3f2ff',
					100: '#e8e8ff',
					200: '#d5d4ff',
					300: '#b6b2ff',
					400: '#9387ff',
					500: '#6e55fd',
					600: '#5c32f5',
					700: '#4e20e1',
					800: '#411abd',
					900: '#37189a',
					950: '#1f0c69',
				},
				white: '#E7F6FF',
				black: '#151019',
			},
		},
	},
	plugins: [],
};
