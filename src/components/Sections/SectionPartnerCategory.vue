<script lang="ts" setup>
interface Props {
	pageCategory: {
		title: string;
		subtitle: string;
		image: string;
		icon: string;
		page: {
			text: string;
			to: string;
		}
	}[]
	isTargeBlank: boolean;
	buttonCta?: string;
	title: string;
}

const props = defineProps<Props>();
</script>

<template>
	<div class="section-padding my-64 md:my-120">
		<div class="container mx-auto">
			<h2 class="text-h4 md:text-h2 mb-20 md:mb-64">{{ title || 'Išsirinkite įrangą'}}</h2>
			<div class="flex flex-wrap justify-center gap-32">
				<div
					v-for="category in pageCategory"
					:key="category.title"
					class="p-20 md:p-40 md:pt-156 relative justify-end w-full max-w-[62.4rem] max-h-[40rem] flex flex-col"
				>
					<NuxtLink
						:target="isTargeBlank ? '_blank' : '_self'"
						:to="category.to"
					>
						<NuxtImg
							:width="category.icon.data.attributes.width"
							:height="category.icon.data.attributes.height"

							class="mb-120 md:mb-16 relative z-10 mt-auto"
							format="svg"
							:src="category.icon.data.attributes.url"
							:alt="category.icon.data.attributes.alternateText || ''"
						/>
						<NuxtImg
							width="624"
							height="400"
							class="image"
							format="webp"
							:src="category.image.data.attributes.url"
							:alt="category.image.data.attributes.alternateText || ''"
						/>
						<div class="image-overlay" />
						<NuxtLink
							:target="isTargeBlank ? '_blank' : '_self'"
							:to="category.to"
						>
							<div class="mt-auto relative z-10">
								<div>
									<h3
										v-if="category.title"
										class="text-h4 md:text-h3 text-white title mb-8"
									>
										{{ category.title }}
									</h3>
									<p class="text-body-2 md:block text-white mb-16">{{ category.subtitle }}</p>
									<LinkButton
										:target="isTargeBlank ? '_blank' : '_self'"
										:to="category.to"
									>
										{{ buttonCta || 'Sužinoti daugiau'}}
									</LinkButton>
								</div>
							</div>
						</NuxtLink>
					</NuxtLink>
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
