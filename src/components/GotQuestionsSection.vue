<script setup lang="ts">
const { findOne } = useStrapi();

const { data: gotQuestionsSection } = await useAsyncData(
	'got-question-section',
	() => findOne<{title: string, subtitle: string, ctaButton: { text: string, to: string }}>('got-question-section', {
		populate: 'deep',
	}),
);

const title = computed(() => gotQuestionsSection.value?.data.attributes.title ?? '');
const subtitle = computed(() => gotQuestionsSection.value?.data.attributes.subtitle ?? '');
const ctaButton = computed(() => gotQuestionsSection.value?.data.attributes.ctaButton ?? {
	text: '',
	to: '',
});
const image = computed(() => gotQuestionsSection.value?.data.attributes.image ?? '');
</script>

<template>
	<section class="bg-primary-blue relative">
		<NuxtImg
			class="top-0 left-0 absolute w-full h-full object-cover"
			:src="image.data.attributes.url"
			:alt="image.data.attributes.alternateText || ''"
			:quality="85"
			width="1280"
			height="432"
			format="webp"
			loading="lazy"
		/>
		<div class="py-64 md:py-120 section-padding container mx-auto text-center text-white relative z-10">
			<h2 class="text-h4 md:text-h2 mb-8 md:mb-16">{{ title }}</h2>
			<p class="text-body-2 mb-24 md:mb-32">{{ subtitle }}</p>
			<Button
				to="/kontaktai"
				orange
			>
				{{ ctaButton.text }}
			</Button>
		</div>
	</section>
</template>

<style scoped>
.blue-overlay {

}
</style>
