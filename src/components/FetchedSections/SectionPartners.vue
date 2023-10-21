<script setup lang="ts">
const { findOne } = useStrapi();

const pageResponse = await useAsyncData(
	'partners-section',
	() => findOne<{testimonials: {fullName: string, text: string}[], title: string}>('partners-section', {
		populate: 'deep',
	}),
);

const data = computed(() => pageResponse?.data?.value?.data?.attributes ?? {});
</script>

<template>
	<section class="section-padding my-64 md:py-80 bg-secondary-anti-flash-white">
		<div class="container mx-auto text-center">
			<h2 class="text-h4 md:text-h2 text-primary-black mb-16 md:mb-40">{{ data.title }}</h2>
			<div class="flex justify-center items-center flex-wrap gap-64">
				<div
					v-for="partner in data.partnersLogos.data"
					:key="partner.attributes.name"
				>
					<NuxtImg
						class="hero-image"
						:src="partner.attributes.url"
						:alt="partner.attributes.alternativeText"
						:quality="100"
						width="120"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
