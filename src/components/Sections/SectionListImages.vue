<script lang="ts" setup>
interface Props {
	title: string;
	imageTop: any;
	imageBottom: any;
	listItem: {
		title: string
	}[];
	ctaButton: {
		text: string;
		to: string;
	}
	listReversed: boolean;
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding mt-20 mb-64 md:my-120">
		<div class="container mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-80">
			<div
				class="self-center justify-self-center md:justify-self-end mb-20 md:mb-0"
				:class="{ 'h-full': !imageBottom?.data?.attributes, }"
			>
				<NuxtImg
					:src="imageTop.data.attributes.url"
					:alt="imageTop.data.attributes.alternateText || ''"
					width="480"
					height="320"
					:quality="85"
					format="webp"
					class="object-cover"
					:class="{
						'mb-24': imageBottom?.data?.attributes,
						'h-full':  !imageBottom?.data?.attributes,
					}"
				/>
				<NuxtImg
					v-if="imageBottom?.data?.attributes"
					:src="imageBottom.data.attributes.url"
					:alt="imageBottom.data.attributes.alternateText || ''"
					width="480"
					height="240"
					:quality="85"
					format="webp"
					class="object-cover"
				/>
			</div>

			<div
				:class="{ 'grid-row-order-1': listReversed }"
				class="self-center"
			>
				<h2 class="text-h4 md:text-h2 text-primary-black mb-16 md:mb-24">{{ title }}</h2>
				<div class="flex flex-col gap-20 mb-24">
					<ListItem
						v-for="item in listItem"
						:key="item.title"
						:text="item.title"
						class="text-primary-black"
						is-blue
					/>
				</div>
				<Button
					class="w-full md:w-auto"
					:to="ctaButton.to"
				>
					{{ ctaButton.text }}
				</Button>
			</div>
		</div>
	</section>
</template>

<style>
.grid-row-order-1 {
	grid-row: 1;
}
</style>
