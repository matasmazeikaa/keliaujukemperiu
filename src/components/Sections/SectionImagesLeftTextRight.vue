<script lang="ts" setup>
interface Props {
	title: string;
	topImage: any;
	bottomImage: any;
	text: string;
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding py-160">
		<div class="container mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-80">
			<div class="self-center justify-self-center md:justify-self-end">
				<NuxtImg
					:src="topImage.data.attributes.url"
					width="480"
					height="320"
					:quality="85"
					class="object-cover mb-24"
				/>
				<NuxtImg
					:src="bottomImage.data.attributes.url"
					width="480"
					height="240"
					:quality="85"
					class="object-cover"
				/>

				<!-- <NuxtImg />
				<NuxtImg /> -->
			</div>

			<div class="order-0">
				<h2 class="text-h2 text-primary-black mb-24">{{ title }}</h2>
				<p
					class="text-body-1 text-primary-black whitespace-break-spaces"
					v-html="text"
				/>
			</div>
		</div>
	</section>
</template>
