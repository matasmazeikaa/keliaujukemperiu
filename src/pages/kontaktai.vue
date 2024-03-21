<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'contact-us-page',
	() => findOne('contact-us-page', {
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

	<ContactUsSection />

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<SectionFindUs />
</template>
