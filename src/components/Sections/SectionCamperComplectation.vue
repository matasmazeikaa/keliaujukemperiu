<script lang="ts" setup>
interface Props {
	itemList: {
		title: string;
	}[];
	complectationForRent: string;
	isForRent: boolean;
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding my-64 md:my-120">
		<div class="container mx-auto">
			<h2 class="text-h4 md:text-h2 mb-20 md:mb-24">Komplektacija</h2>

			<div >
				<div
					class="mt-24 text-body-2 md:text-body-1 whitespace-break-spaces"
					v-html="complectationForRent"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.item-list {
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 16px;
}

@screen md {
	.item-list {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		grid-column-gap: 80px;
		grid-row-gap: 20px;
	}
}
</style>
