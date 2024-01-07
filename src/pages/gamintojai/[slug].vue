<script lang="ts" setup>
const { find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: partners } = await useAsyncData(
	`partners-${slug}`,
	() => find('partners', {
		populate: 'deep',
		filters: {
			slug,
		},
	}),
);

const partner = computed(() => partners?.value?.data[0].attributes || {
	images: {
		data: [],
	},
	promotedBlogs: {
		data: [],
	},
});

definePageMeta({
	layout: 'dark-header',
});

useHead({
	title: partner.value.seo?.metaTitle,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: partner.value.seo?.metaDescription,
		},
	],
});
</script>

<template>
	<SectionHeroMain
		v-bind="partner.Hero"
	/>

	<SectionAboutCamper class="my-80" :text="partner.about" />

	<section
		v-if="partner.campers.data.length"
		class="section-padding my-80"
	>
		<div class="container mx-auto">
			<h2 class="mb-24 md:mb-64 text-h1-mobile md:text-h2">Vietoje turime šiuos modelius</h2>
			<Camper
				v-for="{ attributes: camper } in partner.campers.data"
				:key="camper.title"
				class="last:mb-0 mb-80"
				v-bind="camper"
			/>
		</div>
	</section>

	<GotQuestionsSection/>
</template>

<style scoped>
.gallery {
	display: flex;
	flex-wrap: wrap;
	gap: 2.4rem;
}

.gallery > div:not(.s) {
	width: 100%;
}

@screen xl {
	.gallery > div:nth-child(1) {
		width: 56.333333%;
	}

	.gallery > div:nth-child(2) {
		width: 41.6666666667%;
	}
	.gallery > div:nth-child(3) {
		width: 41.6666666667%;
	}

	.gallery > div:nth-child(4) {
		width: 56.333333%;
	}
}

@screen md {
	.gallery > div:nth-child(1) {
		width: 55.333333%;
	}

	.gallery > div:nth-child(2) {
		width: 41.6666666667%;
	}
	.gallery > div:nth-child(3) {
		width: 41.6666666667%;
	}

	.gallery > div:nth-child(4) {
		width: 55.333333%;
	}
}

.gallery {
	object-fit: cover;
	height: 100%;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
