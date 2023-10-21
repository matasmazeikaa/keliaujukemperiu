<script lang="ts" setup>
import MarkdownIt from 'markdown-it';

interface Props {
	title: string;
	topImage: any;
	bottomImage: any;
	text: string;
}

defineProps<Props>();

const markdown = new MarkdownIt();
</script>

<template>
	<section class="section-padding mt-20 mb-40 md:my-160">
		<div class="container mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-80">
			<div class="mb-40 md:mb-0 self-center justify-self-center md:justify-self-end">
				<NuxtImg
					:src="topImage.data.attributes.url"
					:alt="topImage.data.attributes.alternateText"
					width="480"
					height="320"
					:quality="85"
					format="webp"
					class="object-cover mb-24"
				/>
				<NuxtImg
					v-if="bottomImage?.data?.attributes"
					:src="bottomImage.data.attributes.url"
					:alt="bottomImage.data.attributes.alternateText"
					width="480"
					height="240"
					:quality="85"
					format="webp"
					class="object-cover"
				/>
			</div>

			<div class="order-0">
				<h2 class="text-h4 md:text-h2 text-primary-black mb-16 md:mb-24">{{ title }}</h2>
				<div
					class="text-body-2 md:text-body-1 text-primary-black whitespace-break-spaces"
					v-html="markdown.render(text)"
				/>
			</div>
		</div>
	</section>
</template>
