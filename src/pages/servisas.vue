<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'service-page',
	() => findOne('service-page', {
		populate: ['deep'],
	}),
);

const pageData = computed((): any => data.value?.data.attributes);
</script>

<template>
	<SectionHeroSubpage :title="pageData.title" />

	<SectionImagesLeftTextRight v-bind="pageData.aboutServiceSection" />

	<SectionPartners />

	<SectionEnumerationList
		v-bind="pageData.providedServicesSection"
	/>

	<GotQuestionsSection/>
</template>
