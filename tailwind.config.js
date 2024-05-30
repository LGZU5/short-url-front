/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f3f4fa',
					100: '#e9e9f6',
					200: '#d7d7ee',
					300: '#bebee3',
					400: '#aaa4d5',
					500: '#968cc8',
					600: '#8574b7',
					700: '#73639f',
					800: '#5d5281',
					900: '#4e4669',
					950: '#2c273a',
				},
				white: '#E7F6FF',
				black: '#101720',
			},
		},
	},
	plugins: [],
};
