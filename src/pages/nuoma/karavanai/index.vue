<script lang="ts" setup>
const {
	findOne,
	find,
} = useStrapi();

const { data } = await useAsyncData(
	'caravan-rent-page',
	() => findOne('caravan-rent-page', {
		populate: ['deep'],
	}),
);

const { data: campers } = await useAsyncData(
	'campers',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForSale: true,
			isCaravan: true,
		},
	}),
);

const pageData = computed((): any => data.value?.data.attributes);

useHead({
		title: pageData.value?.seo?.metaTitle,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: pageData.value?.seo?.metaDescription,
			},
	],
});
</script>

<template>
	<SectionHeroSubpage
		:title="pageData.title"
		:subtitle="pageData.subtitle"
	/>

	<section class="section-padding py-80">
		<div class="container mx-auto">
			<Camper
				v-for="{ attributes: camper } in campers?.data"
				:key="camper.title"
				class="mb-80"
				:gearbox="camper.gearbox"
				:year="camper.year"
				:title="camper.title"
				:price-per-day="camper.pricePerDay"
				:places-to-sit="camper.placesToSit"
				:places-to-sleep="camper.placesToSleep"
				:preview-description="camper.previewDescription"
				:slug="camper.slug"
				:thumbnail="camper.thumbnail"
			/>
		</div>
	</section>

	<GotQuestionsSection/>
</template>
