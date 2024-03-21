<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'camper-equipment-page',
	() => findOne('camper-equipment-page', {
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

	<SectionImagesLeftTextRight v-bind="pageData.aboutCamperEquipmentSection" />

	<SectionPartnerCategory
		:page-category="pageData.choosePartnerEquipmentSection.pageCategory"
		button-cta="Gamintojo svetainė"
		is-targe-blank
	/>

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<GotQuestionsSection/>
</template>
