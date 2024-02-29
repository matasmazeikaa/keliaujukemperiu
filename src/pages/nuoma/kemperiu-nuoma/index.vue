<script lang="ts" setup>
const {
	findOne,
	find,
} = useStrapi();

const { data } = await useAsyncData(
	'camper-rent-page-list',
	() => findOne('camper-rent-page-list', {
		populate: ['deep'],
	}),
);

const { data: campers } = await useAsyncData(
	'camper-rent-page-list-real',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForRent: true,
			isCaravan: false,
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
	<SectionHeroSubpage :title="pageData.title"	/>

	<section class="section-padding py-80">
		<div class="container mx-auto">
			<Camper
				v-for="{ attributes: camper } in campers?.data"
				:key="camper.title"
				class="mb-80"
				v-bind="camper"
			/>
		</div>
	</section>

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<GotQuestionsSection/>
</template>
