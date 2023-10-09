<script setup lang="ts">
interface Props {
	title: string;
	subtitle: string;
	ctaButton: {
		text: string;
		type: 'primary' | 'white';
		to: string;
	};
}

defineProps<Props>();
</script>

<template>
	<section class="bg-primary-black section-padding">
		<div class="py-64 md:py-80 container mx-auto text-center max-w-[80rem] text-white relative z-10">
			<h2 class="text-h4 md:text-h2 mb-8 md:mb-16">{{ title }}</h2>
			<p class="text-body-2 mb-24 md:mb-32">{{ subtitle }}</p>
			<Button
				to="/finansavimas"
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
