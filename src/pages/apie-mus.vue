<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'about-us-page',
	() => findOne('about-us-page', {
		populate: ['deep'],
	}),
);

const aboutUsData = computed((): any => data.value?.data.attributes);
</script>

<template>
	<SectionHeroSubpage :title="aboutUsData.title" />

	<SectionImagesLeftTextRight v-bind="aboutUsData.aboutUsSection" />

	<SectionPartners />

	<SectionEnumerationList
		v-bind="aboutUsData.whyPickUsSection"
	/>

	<GotQuestionsSection/>
</template>
