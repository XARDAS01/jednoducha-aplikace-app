import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./assets/**/*.css',
	],
	theme: {
		extend: {
			colors: {
				bgColor: '#222131',
				brandColor: '#39394b',
				secondBrandColor: '#bf4390',
				white: '#ffffff',
				black: '#000000',
				grey: '#949494',
				lightGrey: '#f2f2f2',
				darkPurpleTransparent: 'rgba(52, 48, 61, 0.5)',
			},
			fontSize: {
				xxxs: '.5rem',
				xxs: '.675rem',
			},
			fontFamily: {
				sans: [ 'iqos_font, Noto Sans, Ubuntu, Helvetica, Arial, sans-serif' ],
			},
			screens: {
				verySmallMobile: '320px',
				mobileSmall: '426px',
				mobileMedium: '480px',
				mobile: '760px',
				bigMobile: '600px',
				tablet: '768px',
				notebook: '1024px',
				desktop: '1300px',
				bigDesktop: '1600px',
				fullHdDesktop: '1920px',

				start: '0px',
				msm: '320px',
				sm: '640px',
				lg: '1024px',
				xl: '1280px',
			},
			zIndex: {
				1: '1',
				5: '5',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
				1000: '1000',
				1500: '1500',
			},
		},
	},
	plugins: [],
};
