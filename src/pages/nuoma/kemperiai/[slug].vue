<script lang="ts" setup>
const {	find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: campers } = await useAsyncData(
	'campers',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForRent: true,
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
