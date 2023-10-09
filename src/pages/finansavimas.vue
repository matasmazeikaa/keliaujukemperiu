<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'finance-page',
	() => findOne('finance-page', {
		populate: ['deep'],
	}),
);

const pageData = computed((): any => data.value?.data.attributes);
</script>

<template>
	<SectionHeroSubpage :title="pageData.title" />

	<SectionImagesLeftTextRight v-bind="pageData.aboutFinancingSection" />

	<GotQuestionsSection/>
</template>
