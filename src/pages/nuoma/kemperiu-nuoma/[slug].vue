<script lang="ts" setup>
const {	find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: campers } = await useAsyncData(
	`campers-campers-rent-${slug}`,
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
		:year="camper.year"
		:gearbox="camper.gearbox"
		:weight="camper.weight"
		:fuel-capacity="camper.fuelCapacity"
		:places-to-sit="camper.placesToSit"
		:places-to-sleep="camper.placesToSleep"
		:heating="camper.heating"
		:fridge-capacity="camper.fridgeCapacity"
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

	<section
		v-if="camper.additionalCampers.data.length"
		class="section-padding my-80"
	>
		<div class="container mx-auto">
			<h2 class="mb-24 md:mb-64 text-h1-mobile md:text-h2">Kiti modeliai</h2>
			<Camper
				v-for="{ attributes } in camper.additionalCampers.data"
				:key="attributes.title"
				class="last:mb-0 mb-80"
				v-bind="attributes"
			/>
		</div>
	</section>

	<GotQuestionsSection/>
</template>
