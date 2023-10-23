<script lang="ts" setup>
const {
	findOne,
	find,
} = useStrapi();

const { data } = await useAsyncData(
	'camber-buy-page',
	() => findOne('camber-buy-page', {
		populate: ['deep'],
	}),
);

const { data: partnersData } = await useAsyncData(
	'all-partners',
	() => find('partners', {
		populate: 'deep',
	}),
);

const partners = computed(() => partnersData?.value?.data || []);

const pageData = computed((): any => data.value?.data.attributes);

const mapPartnersData = computed(() => partners.value.map(({ attributes }) => ({
	title: attributes.title,
	subtitle: attributes.thumbnailAbout,
	icon: attributes.Hero.icon,
	image: attributes.Hero.image,
	to: `/susikomplektuokite/${attributes.slug}`,
})));

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
	<SectionHeroSubpage
		:title="pageData.title"
		:subtitle="pageData.subtitle"
	/>

	<SectionListImages
		v-bind="pageData.aboutSellCamperSection"
		to="/prekyba/kemperiai"
	/>

	<SectionListImages
		v-bind="pageData.aboutSellCaravanSection"
		list-reversed
	/>

	<SectionPartners />

	<SectionPartnerCategory :page-category="mapPartnersData" />

	<SectionFinance
		v-bind="pageData.aboutFinanceSection"
	/>

	<GotQuestionsSection />
</template>
