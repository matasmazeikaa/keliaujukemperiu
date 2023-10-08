<script lang="ts" setup>
interface Props {
	itemList: {
		title: string;
	}[];
}

defineProps<Props>();

</script>

<template>
	<section class="section-padding my-160">
		<div class="container mx-auto">
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
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-column-gap: 80px;
	grid-row-gap: 20px;
}
</style>
