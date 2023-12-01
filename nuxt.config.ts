
const APP_META = {
	favicon: '/favicon.ico',
	url: 'https://keliaujukemperiu.lt',
	language: 'lt',
};

export default defineNuxtConfig({
	// app config
	extends: ['nuxt-seo-kit'],

	// server side rendering
	ssr: true,

	// source directory
	srcDir: 'src',

	// alias
	alias: {
		modules: '~/modules',
	},

	css: ['~/assets/css/tailwind.css'],

	// runtime config
	runtimeConfig: {
		public: {
			siteUrl: APP_META.url || 'https://example.com',
			language: APP_META.language,
		},
	},

	image: {
		providers: {
			localImageSharp: {
				provider: '~/providers/localImagesSharp',
				options: {
					baseURL: `${process.env.STRAPI_URL}/uploads/`,
				},
			},
		},
		provider: 'localImageSharp',
	},

	strapi: {
		url: process.env.STRAPI_URL || 'http://127.0.0.1:1338',
	},

	// typescript
	typescript: {
		typeCheck: false,
		tsConfig: {
			compilerOptions: {
				forceConsistentCasingInFileNames: true,
			},
		},
	},

	// components
	components: {
		dirs: [
			{
				path: '~/components',
				pathPrefix: false,
			},
		],
	},

	// imports
	imports: {
		dirs: [
			'stores',
			'composables',
		],
	},

	delayHydration: {
		mode: 'init',
	},

	// modules
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'@formkit/nuxt',
		'@unlighthouse/nuxt',
		'@vueuse/nuxt',
		'nuxt-headlessui',
		'nuxt-delay-hydration',
		'@nuxtjs/eslint-module',
		'@nuxtjs/strapi',
		'@nuxtjs/robots',
		'nuxt-swiper',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Montserrat: [
						400,
						600,
					],
					'Bricolage+Grotesque': [
						500,
						600,
					],
				},
			},
		],
	],

	eslint: {
		eslintPath: 'eslint',
	},

	// headlessui
	headlessui: {
		prefix: 'H',
	},

	// unlighthouse
	unlighthouse: {},
});
