<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'contactPageHeroSection',
	() => findOne<{section: ISection[], title: string, email: string, phoneNumber: string, address: string, work: { hours: string, days: string }}>('contact-page', {
		populate: ['work.*'],
	}),
);

const { sections } = await useStrapiPage('contact');
const contactUsPage = computed(() => data.value?.data.attributes);

console.log(contactUsPage.value, 'contactUsPage');
</script>

<template>
	<SectionHeroSubpage title="Susisiekite su mumis" />

	<ContactUsSection />

	<SectionFindUs />
</template>
