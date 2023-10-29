<script lang="ts" setup>

interface Props {
	prices: {
		title: string;
		subtitle: string;
	}[];
	infos: string[]
}

const props = defineProps<Props>();

const title = props.prices.length > 1 ? 'Kainos' : 'Kaina';
</script>

<template>
	<section class="section-padding my-64 md:my-120">
		<div class="container mx-auto">
			<h2 class="text-h4 md:text-h2 mb-20 md:mb-64">{{ title }}</h2>
			<div class="mb-16 md:mb-40 flex justify-between gap-40 flex-wrap">
				<div
					v-for="price in prices"
					:key="price.title"
				>
					<h3 class="text-h4 md:text-h3 mb-8">{{ price.title }}</h3>
					<p class="button-style-1 text-primary-black">{{ price.subtitle }}</p>
				</div>
			</div>
			<div>
				<p
					v-for="info in infos"
					:key="info"
					class="text-body-2"
				>
					*{{ info }}
				</p>
			</div>
			<Button
				class="mt-24"
				to="/kontaktai"
			>
				Susisiekti
			</Button>
		</div>
	</section>
</template>
