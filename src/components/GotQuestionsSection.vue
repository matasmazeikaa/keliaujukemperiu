<script setup lang="ts">
const { findOne } = useStrapi();

const { data: gotQuestionsSection } = await useAsyncData(
	'got-question-section',
	() => findOne<{title: string, subtitle: string, ctaButton: { text: string, to: string }}>('got-question-section', {
		populate: 'deep',
	}),
);

console.log(gotQuestionsSection.value);
console.log(gotQuestionsSection.value);

const title = computed(() => gotQuestionsSection.value?.data.attributes.title ?? '');
const subtitle = computed(() => gotQuestionsSection.value?.data.attributes.subtitle ?? '');
const ctaButton = computed(() => gotQuestionsSection.value?.data.attributes.ctaButton ?? {
	text: '',
	to: '',
});
</script>

<template>
	<section class="bg-black section-padding py-160">
		<div />
		<div class="container mx-auto text-center text-white">
			<h2 class="text-h2 mb-16">{{ title }}</h2>
			<p class="text-body-2 mb-32">{{ subtitle }}</p>
			<Button :to="ctaButton.to">{{ ctaButton.text }}</Button>
		</div>
	</section>
</template>

<style scoped>
.blue-overlay {

}
</style>
