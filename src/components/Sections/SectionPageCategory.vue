<script lang="ts" setup>
interface Props {
	pageCategory: {
		title: string;
		subtitle: string;
		image: string;
		page: {
			text: string;
			to: string;
		}
	}[]
}

const props = defineProps<Props>();
</script>

<template>
	<div class="section-padding my-40 md:my-160">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
				<div
					v-for="category in pageCategory"
					:key="category.title"
					class="p-20 md:p-40 pt-44 md:pt-192 relative max-w-[62.4rem] max-h-[40rem]"
				>
					<NuxtImg
						width="624"
						height="400"
						class="image"
						format="webp"
						:src="category.image.data.attributes.url"
						:alt="category.image.data.attributes.alternateText"
					/>
					<div class="image-overlay" />
					<div class="relative z-10">
						<h3 class="text-h4 md:title text-white md:title mb-8">{{ category.title }}</h3>
						<p class="text-body-2 text-white mb-16">{{ category.subtitle }}</p>
						<LinkButton
							class="hover:opacity-75 transition-opacity"
							:to="category.to"
						>
							Daugiau
						</LinkButton>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.image {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(65deg, #272830 0%, rgba(39, 40, 48, 0.80) 19.5%, rgba(39, 40, 48, 0.00) 100%);
}

.title {
	font-size: 3.2rem;
	line-height: 4.8rem;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-gap: 3.2rem;
}
</style>
