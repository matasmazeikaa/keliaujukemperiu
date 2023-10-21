<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'service-page',
	() => findOne('service-page', {
		populate: ['deep'],
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
	<SectionHeroSubpage :title="pageData.title" />

	<SectionImagesLeftTextRight v-bind="pageData.aboutServiceSection" />

	<SectionEnumerationList
		v-bind="pageData.providedServicesSection"
	/>

	<GotQuestionsSection/>
</template>
