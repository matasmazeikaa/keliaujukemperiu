<script lang="ts" setup>
const {
	hero,
	sections,
	pageData,
} = await useStrapiPage('home');

definePageMeta({
	layout: 'dark-header',
});
</script>

<template>
	<SectionHeroMain
		v-bind="hero"
		id="hero-section"
	/>

	<Component
		:is="section.component"
		v-for="section in sections"
		:key="section.id"
		:page-category="sections[0].pageCategory"
		v-bind="section"
	>
		{{ section.pageCategory }}
	</Component>

	<TestimonialsSection />
	<GotQuestionsSection/>
</template>
