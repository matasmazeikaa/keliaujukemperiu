<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
}

defineProps<Props>();
</script>

<template>
	<section class="relative section-padding mt-[7.2rem] lg:mt-96 bg-primary-black py-20 md:py-100 text-center">
		<img
			class="top-0 left-0 absolute w-full h-full object-cover"
			src="@/assets/image/herosubpageBackground.jpg"
			alt=""
		/>
		<div class="container mx-auto relative z-10">
			<h1 class="text-h4 md:text-h1 text-white">{{ title }}</h1>
			<p
				v-if="subtitle"
				class="text-body-2 mt-16 text-white"
			>
				{{ subtitle }}
			</p>
		</div>
	</section>
</template>

<style scoped>
.image-overlay {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background: var(--primary-black)
}
</style>
