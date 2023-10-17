<script lang="ts" setup>
interface Props {
	text: string;
	isOrange: boolean;
	isBlue: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="flex items-center gap-8">
		<IconCheckmark
			class="min-w-[1.6rem] min-h-16"
			:class="{
				'text-primary-blue': isBlue,
				'text-primary-yellow': isOrange
			}"
		/>
		<p class="button-style-1 text-inherit">{{ text }}</p>
	</div>
</template>
