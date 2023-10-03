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
	<section class="section-padding py-160">
		<div class="container mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-80">
			<div class="self-center justify-self-center md:justify-self-end">
				<NuxtImg
					:src="imageTop.data.attributes.url"
					width="480"
					height="320"
					:quality="85"
					class="object-cover mb-24"
				/>
				<NuxtImg
					:src="imageBottom.data.attributes.url"
					width="480"
					height="240"
					:quality="85"
					class="object-cover"
				/>
			</div>

			<div
				:class="{ 'grid-row-1': listReversed }"
				class="self-center"
			>
				<h2 class="text-h2 text-primary-black mb-24">{{ title }}</h2>
				<div class="flex flex-col gap-20 mb-24">
					<ListItem
						v-for="item in listItem"
						:key="item.title"
						:text="item.title"
						class="text-primary-black"
						is-blue
					/>
				</div>
				<Button :to="ctaButton.to">{{ ctaButton.text }}</Button>
			</div>
		</div>
	</section>
</template>
