<script lang="ts" setup>
interface Props {
	text: string
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding">
		<div class="container mx-auto">
			<p class="text-body-1 md:columns-2">{{ text }}</p>
		</div>
	</div>
</template>

<style scoped>
.columns-2 {
	column-count: 2;
	column-gap: 80px;
	white-space: break-spaces;
}
</style>
