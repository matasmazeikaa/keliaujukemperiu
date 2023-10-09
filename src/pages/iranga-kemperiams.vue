<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'camper-equipment-page',
	() => findOne('camper-equipment-page', {
		populate: ['deep'],
	}),
);

const pageData = computed((): any => data.value?.data.attributes);

console.log(pageData, 'page data');
</script>

<template>
	<SectionHeroSubpage :title="pageData.title" />

	<SectionImagesLeftTextRight v-bind="pageData.aboutCamperEquipmentSection" />

	<SectionPartners />

	<SectionPartnerCategory
		:page-category="pageData.choosePartnerEquipmentSection.pageCategory"
		is-targe-blank
	/>

	<GotQuestionsSection/>
</template>
