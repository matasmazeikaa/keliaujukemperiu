<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'rent-page',
	() => findOne('rent-page', {
		populate: ['deep'],
	}),
);

const pageData = computed((): any => data.value?.data.attributes);

useHead({
		title: pageData.value?.seo.metaTitle,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: pageData.value?.seo.metaDescription,
			},
	],
});
</script>

<template>
	<SectionHeroSubpage
		:title="pageData.title"
		:subtitle="pageData.subtitle"
	/>

	<SectionListImages
		v-bind="pageData.chooseCamperSection"
		to="/nuoma/kemperiai"
	/>

	<SectionListImages
		v-bind="pageData.chooseCaravanSection"
		list-reversed
	/>

	<GotQuestionsSection />
</template>
