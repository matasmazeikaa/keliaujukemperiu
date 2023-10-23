<script lang="ts" setup>
const {
	findOne,
	find,
} = useStrapi();

const { data } = await useAsyncData(
	'camper-buy-page-list',
	() => findOne('camper-buy-page-list', {
		populate: ['deep'],
	}),
);

const { data: campers } = await useAsyncData(
	'campers',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForSale: true,
			isCaravan: false,
		},
	}),
);

const pageData = computed((): any => data.value?.data.attributes);

useHead({
	title: pageData.value.seo?.metaTitle,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: pageData.value.seo?.metaDescription,
		},
	],
});
</script>

<template>
	<SectionHeroSubpage	:title="pageData.title"/>

	<section class="section-padding py-80">
		<div class="container mx-auto">
			<Camper
				v-for="{ attributes: camper } in campers?.data"
				:key="camper.title"
				class="mb-80"
				:gearbox="camper.gearbox"
				:year="camper.year"
				:title="camper.title"
				:price="camper.price"
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
