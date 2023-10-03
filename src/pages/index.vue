<script lang="ts" setup>
const {
	hero,
	sections,
	pageData,
} = await useStrapiPage('home');
</script>

<template>
	<SectionHeroMain
		v-bind="hero"
	/>

	<Component
		:is="section.component"
		v-for="section in sections"
		:key="section.id"
		:page-category="sections[0].pageCategory"
	>
		{{ section.pageCategory }}
	</Component>

	<TestimonialsSection />
	<GotQuestionsSection/>
</template>
