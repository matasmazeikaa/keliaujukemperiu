const APP_META = {
	favicon: '/favicon.ico',
	url: 'https://keliaujukemperiu.lt',
	language: 'lt',
};

export default defineNuxtConfig({
	runtimeConfig: {
		STRAPI_URL: process.env.STRAPI_URL,
	},

	routeRules: {
		'/prekyba/kemperiai': {
			redirect: {
				to: '/prekyba/kemperiu-pardavimas',
				statusCode: 301,
			},
		},
		'/prekyba/kemperiai/:id': {
			redirect: {
				to: '/prekyba/kemperiu-pardavimas',
				statusCode: 301,
			},
		},
		'/prekyba/karavanai': {
			redirect: {
				to: '/prekyba/parduodami-karavanai',
				statusCode: 301,
			},
		},
		'/prekyba/karavanai/:id': {
			redirect: {
				to: '/prekyba/parduodami-karavanai',
				statusCode: 301,
			},
		},
		'/nuoma/kemperiai': {
			redirect: {
				to: '/nuoma/kemperiu-nuoma',
				statusCode: 301,
			},
		},
		'/nuoma/kemperiai/:id': {
			redirect: {
				to: '/nuoma/kemperiu-nuoma',
				statusCode: 301,
			},
		},
		'/nuoma/karavanai': {
			redirect: {
				to: '/nuoma/karavanu-nuoma',
				statusCode: 301,
			},
		},
		'/nuoma/karavanai/:id': {
			redirect: {
				to: '/nuoma/karavanu-nuoma',
				statusCode: 301,
			},
		},
		'/servisas': {
			redirect: {
				to: '/karavanu-ir-kemperiu-servisas',
				statusCode: 301,
			},
		},
	},

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

	gtm: {
		id: [
			'GTM-5FZTKCQ',
			'GTM-W3FS23ZR',
		],
		defer: true,
		compatibility: false,
		nonce: '2726c7f26c',
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
		'@zadigetvoltaire/nuxt-gtm',
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
