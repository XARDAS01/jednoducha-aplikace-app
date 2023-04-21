// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'@pinia/nuxt',
	],

	ssr: false,

	css: [ '~/assets/css/main.css' ],

	app: {
		head: {
			meta: [
				{
					name: 'robots',
					content: process.env.ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
				},
			],
		},
	},

	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.API_BASE_URL || '',
			baseUrl: process.env.BASE_URL || '',
		},
	},
});
