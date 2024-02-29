<script lang="ts" setup>
const {	find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: campers } = await useAsyncData(
	`campers-caravan-rent-${slug}`,
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
	<SectionHeroSubpage
		:title="camper.title"
		mobile
	/>

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
		:prices="[
			{
				title: `${camper.pricePerDay} EUR su PVM`,
				subtitle: 'Dienos kaina'
			}
		]"
		:infos="['Civilinis ir KASKO draudimai su nuomos paslauga! Frančizė tik 300-800 eur.']"
	/>

	<GotQuestionsSection/>
</template>
