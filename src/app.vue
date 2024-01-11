<template>
	<Html
		lang="lt"
		class="h-full"
	>
		<Body class="h-full">
			<noscript>
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FZTKCQ"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>
			</noscript>

			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3FS23ZR" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
			<NuxtLayout class="h-full">
				<SeoKit />
				<NuxtPage class="h-full"/>
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
const { find } = useStrapi();
const context = useNuxtApp();

function loadGtag() {
	// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID
	const GA_MEASUREMENT_ID = 'G-R5110Y4W22';

	// Create a script element
	const script = document.createElement('script');

	script.async = true;

	// Set the source of the script to the gtag.js URL with your Measurement ID
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

	// Append the script to the document's head
	document.head.appendChild(script);

	// Set up the gtag.js configuration after the script has loaded
	script.addEventListener('load', () => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', GA_MEASUREMENT_ID);
	});
}

// Function to load Facebook Pixel script
function loadFacebookPixel() {
	// Replace 'YOUR_PIXEL_ID' with your actual Facebook Pixel ID
	const YOUR_PIXEL_ID = '252158580555746';

	// Create a script element
	const script = document.createElement('script');

	script.async = true;

	// Set the source of the script to the Facebook Pixel base code
	script.src = 'https://connect.facebook.net/en_US/fbevents.js';

	// Append the script to the document's head
	document.head.appendChild(script);

	// Set up the Facebook Pixel configuration after the script has loaded
	script.addEventListener('load', () => {
		// Initialize the Facebook Pixel
		fbq('init', YOUR_PIXEL_ID);

		// Track a page view or any other events if needed
		fbq('track', 'PageView');
	});
}

// Set a timeout to call the loadFacebookPixel function after 10 seconds
setTimeout(loadFacebookPixel, 10000);

// Set a timeout to call the loadGtag function after 10 seconds
setTimeout(loadGtag, 10000);

const { data } = await useAsyncData(
	'meta',
	() => find('meta', {
		populate: ['deep'],
	}),
);

const ogImageThumbnail = computed(() => `${context.$config.strapi.url}${data?.value?.data?.attributes?.ogImage.data.attributes.formats.medium.url}`);

useHead({
	titleTemplate: '%s',
	link: [
		{
			rel: 'apple-touch-icon',
			type: 'image/png',
			href: '/favicon-16x16.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-16x16.png',
			sizes: '16x16x',

		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon-32x32.png',
			sizes: '32x32',
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest',
		},
		{
			rel: 'mask-icon',
			href: '/safari-pinned-tab.svg',
			color: '#000000',
		},
	],
	meta: [
		{
			name: 'google-site-verification',
			content: 'qoG1Lf5mtZ-tM05IXTleeahHkwzryrhwwEjB_NYxjjQ',
		},
		{
			name: 'msapplication-TileColor',
			content: '#da532c',
		},
		{
			name: 'theme-color',
			content: '#FFFFFF',
		},
		{
			hid: 'og:image',
			property: 'og:image',
			content: ogImageThumbnail.value,
		},
		{
			hid: 'twitter:image',
			property: 'twitter:image',
			content: ogImageThumbnail.value,
		},
	],
});
</script>
