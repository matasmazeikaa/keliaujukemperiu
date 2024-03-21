<script lang="ts" setup>
const {	find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: campers } = await useAsyncData(
	`campers-campers-sale-${slug}`,
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
		:prices="camper.priceFull"
		:infos="camper.camperPriceInfo.map(({ title }) => title)"
	/>

	<!-- <section
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
	</section> -->

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<GotQuestionsSection/>
</template>
