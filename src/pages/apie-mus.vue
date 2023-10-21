<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'about-us-page',
	() => findOne('about-us-page', {
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

	<SectionImagesLeftTextRight v-bind="pageData.aboutUsSection" />

	<SectionEnumerationList
		v-bind="pageData.whyPickUsSection"
	/>

	<GotQuestionsSection/>
</template>
