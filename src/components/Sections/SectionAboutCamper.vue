<script lang="ts" setup>
interface Props {
	text: string
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding">
		<div class="container mx-auto">
			<div
				class="text-body-1 whitespace-break-spaces"
				v-html="text"
			/>
		</div>
	</div>
</template>
