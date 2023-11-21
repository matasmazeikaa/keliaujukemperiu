<script lang="ts" setup>
const {	find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: campers } = await useAsyncData(
	`campers-caravan-sale-${slug}`,
	() => find('campers', {
		populate: 'deep',
		filters: {
			slug,
		},
	}),
);

const camper = computed(() => campers?.value?.data[0].attributes || {
	images: {
		data: [],
	},
	promotedBlogs: {
		data: [],
	},
});

useHead({
	title: camper.value.seo?.metaTitle,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: camper.value.seo?.metaDescription,
		},
	],
});
</script>

<template>
	<SectionHeroSubpage :title="camper.title" />

	<SectionSwiperGallery
		v-if="camper.innerPageImages.data.length"
		:images="camper.innerPageImages.data"
	/>

	<SectionAboutCamper :text="camper.about" />

	<SectionCamperSpecifications
		v-bind="camper"
	/>

	<SectionCamperComplectation
		:item-list="camper.complectation"
		:is-for-rent="camper.isForRent"
		:complectation-for-rent="camper.complectationForRent"
	/>

	<SectionCamperPrice
		:prices="camper.priceFull"
		:infos="camper.camperPriceInfo.map(({ title }) => title)"
	/>

	<GotQuestionsSection/>
</template>
