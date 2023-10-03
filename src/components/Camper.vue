<script lang="ts" setup>
interface Props {
	title: string;
	previewSubtitle: string;
	pricePerDay: string;
	year: string;
	gearbox: string;
	placesToSit: string;
	placesToSleep: string;
}

defineProps<Props>();
</script>

<template>
	<div>
		<NuxtImg />
		<h3 class="text-h3 mb-8">{{ title }}</h3>
		<p class="text-body-2 text-primary-black mb-16">{{ previewSubtitle }}</p>
		<div
			v-if="pricePerDay"
			class="flex gap-8 mb-24"
		>
			<p class="text-h4 text-primary-black mb-8">Nuo</p>
			<p class="text-h3 text-primary-black mb-16">{{ pricePerDay }}€ / d.</p>
		</div>
		<div>
			<CamperSpecification
				type="year"
				:value="year"
			/>
			<CamperSpecification
				type="gearbox"
				:value="gearbox"
			/>
			<CamperSpecification
				type="placesToSit"
				:value="placesToSit"
			/>
			<CamperSpecification
				type="placesToSleep"
				:value="placesToSleep"
			/>
		</div>
	</div>
</template>
