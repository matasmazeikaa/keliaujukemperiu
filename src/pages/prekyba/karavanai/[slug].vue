<script lang="ts" setup>
const {	find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: campers } = await useAsyncData(
	'campers-caravan-sale',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForSale: true,
			isCaravan: true,
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
		:year="camper.year"
		:gearbox="camper.gearbox"
		:weight="camper.weight"
		:fuel-capacity="camper.fuelCapacity"
		:places-to-sit="camper.placesToSit"
		:places-to-sleep="camper.placesToSleep"
		:heating="camper.heating"
		:fridge-capacity="camper.fridgeCapacity"
	/>

	<SectionCamperComplectation :item-list="camper.complectation" />

	<SectionCamperPrice
		:prices="camper.priceFull"
		:infos="camper.camperPriceInfo.map(({ title }) => title)"
	/>

	<GotQuestionsSection/>
</template>
