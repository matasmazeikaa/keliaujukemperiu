<script lang="ts" setup>
interface Props {
	title: string;
	listItem: {
		title: string;
		to: string;
		icon: {
			data: {
				attributes: {
					url: string;
				}
			}
		}
	}[];
}

const props = defineProps<Props>();
</script>

<template>
	<section class="section-padding bg-primary-black py-64 md:py-160">
		<div class="container mx-auto flex flex-wrap gap-24 md:gap-80">
			<h2 class="text-h4 md:text-h2 text-white max-w-[56.8rem]">{{ title }}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40">
				<div
					v-for="item in listItem"
					:key="item.title"
					class="max-w-[29.6rem] w-full"
				>
					<NuxtImg
						:src="`${item.icon.data.attributes.hash}${item.icon.data.attributes.ext}`"
						:alt="item.icon.data.attributes.alternativeText"
						width="40"
						height="40"
						format="svg"
						class="mb-16"
					/>
					<p class="button-style-1 text-white mb-8">{{ item.title }}</p>
					<p class="text-body-2 opacity-75 text-white">{{ item.subtitle }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
