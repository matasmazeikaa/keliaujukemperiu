<script lang="ts" setup>
interface Props {
	to: string;
}

defineProps<Props>();
</script>

<template>
	<NuxtLink
		class="button-style-1 text-primary-yellow flex items-center gap-8 cursor-pointer"
		:to="to"
	>
		<slot />
		<ArrowRight />
	</NuxtLink>
</template>
