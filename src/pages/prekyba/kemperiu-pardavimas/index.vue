<script lang="ts" setup>
const {
	findOne,
	find,
} = useStrapi();

const { data } = await useAsyncData(
	'camper-buy-page-list',
	() => findOne('camper-buy-page-list', {
		populate: ['deep'],
	}),
);

const { data: campers } = await useAsyncData(
	'campers-buy-page-list-real',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForSale: true,
			isCaravan: false,
		},
	}),
);

const { data: partnersData } = await useAsyncData(
	'all-partners',
	() => find('partners', {
		populate: 'deep',
	}),
);

const partners = computed(() => partnersData?.value?.data || []);

const mapPartnersData = computed(() => partners.value.map(({ attributes }) => ({
	title: attributes.title,
	subtitle: attributes.thumbnailAbout,
	icon: attributes.Hero.icon,
	image: attributes.Hero.image,
	to: `/gamintojai/${attributes.slug}`,
})));

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
	<SectionHeroSubpage	:title="pageData.title"/>

	<SectionPartnerCategory
		:title="pageData.partnerCategoryTitle"
		:page-category="mapPartnersData"
	/>

	<section class="section-padding my-80">
		<div class="container mx-auto">
			<h2 class="text-h4 md:text-h2 mb-20 md:mb-64">Kemperiai vietoje</h2>
			<Camper
				v-for="{ attributes: camper } in campers?.data"
				:key="camper.title"
				class="mb-80"
				v-bind="camper"
			/>
		</div>
	</section>

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<GotQuestionsSection/>
</template>
