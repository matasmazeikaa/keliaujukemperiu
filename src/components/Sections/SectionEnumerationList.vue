<script lang="ts" setup>
interface Props {
	title: string;
	listItem: {
		title: string;
		subtitle: string;
	}[];
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding my-64 md:my-120">
		<div class="container mx-auto">
			<h2 class="text-h4 md:text-h2 text-primary-black mb-24 md:mb-64">{{ title }}</h2>

			<div class="flex gap-24 md:gap-48 flex-wrap justify-between">
				<div
					v-for="item, index in listItem"
					:key="item.title"
					class="max-w-[28rem]"
				>
					<p class="list-item-number mb-20">0{{ index + 1 }}</p>
					<h4 class="text-h4 text-primary-black mb-8">{{ item.title }}</h4>
					<p class="text-body-2 text-primary-black opacity-65">{{ item.subtitle }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.list-item-number {
	color: var(--primary-blue);
	font-family: Bricolage Grotesque;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 40px;
}
</style>
