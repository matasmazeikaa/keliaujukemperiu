<script lang="ts" setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'contactPageHeroSection',
	() => findOne<{section: ISection[], title: string, email: string, phoneNumber: string, address: string, work: { hours: string, days: string }}>('contact-page', {
		populate: ['work.*'],
	}),
);
</script>

<template>
	<SectionHeroSubpage title="Susisiekite su mumis" />

	<ContactUsSection />

	<SectionFindUs />
</template>
