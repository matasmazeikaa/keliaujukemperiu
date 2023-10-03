<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'rent-page',
	() => findOne('rent-page', {
		populate: ['deep'],
	}),
);

const pageData = computed((): any => data.value?.data.attributes);
</script>

<template>
	<SectionHeroSubpage
		:title="pageData.title"
		:subtitle="pageData.subtitle"
	/>

	<SectionListImages v-bind="pageData.chooseCamperSection" />

	<SectionPartners />

	<SectionListImages
		v-bind="pageData.chooseCaravanSection"
		list-reversed
	/>

	<GotQuestionsSection/>
</template>
