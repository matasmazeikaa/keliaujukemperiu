<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding mt-56 lg:mt-96 bg-primary-black py-100 text-center">
		<div class="container mx-auto">
			<h1 class="text-h1 text-white">{{ title }}</h1>
			<p
				v-if="subtitle"
				class="text-body-2 mt-16 text-white"
			>
				{{ subtitle }}
			</p>
		</div>
	</section>
</template>
