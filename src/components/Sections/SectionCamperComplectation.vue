<script lang="ts" setup>
interface Props {
	itemList: {
		title: string;
	}[];
}

defineProps<Props>();

</script>

<template>
	<section class="section-padding my-64 md:my-160">
		<div class="container mx-auto">
			<h2 class="text-h4 md:text-h2 mb-20 md:mb-24">Komplektacija</h2>
			<p class="mb-24 md:mb-64 text-body-2 md:text-body-1">Padėsime susikomplektuoti savo kemperį pagal poreikius ir pritaikyti suplanuotoms kelionėms.</p>
			<div class="item-list">
				<ListItem
					v-for="item in itemList"
					:key="item.title"
					:text="item.title"
					class="title-primary-black"
					is-blue
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
