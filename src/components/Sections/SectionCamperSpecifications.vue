<script lang="ts" setup>
interface Props {
	title: string;
	year: string;
	gearbox: string;
	weight: string;
	fuelCapacity: string;
	placesToSit: string;
	placesToSleep: string;
	heating: string;
	fridgeCapacity: string;
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding mt-80 mb-160">
		<div class="container mx-auto">
			<h2 class="text-h2 mb-64">{{ title }}</h2>
			<div class="specification-grid">
				<CamperSpecification
					v-if="year"
					type="year"
					:value="year"
					large
				/>
				<CamperSpecification
					v-if="gearbox"
					type="gearbox"
					:value="gearbox"
					large
				/>
				<CamperSpecification
					v-if="weight"
					type="weight"
					:value="weight"
					large
				/>
				<CamperSpecification
					v-if="fuelCapacity"
					type="fuelCapacity"
					:value="fuelCapacity"
					large
				/>
				<CamperSpecification
					v-if="placesToSit"
					type="placesToSit"
					:value="placesToSit"
					large
				/>
				<CamperSpecification
					v-if="placesToSleep"
					type="placesToSleep"
					:value="placesToSleep"
					large
				/>
				<CamperSpecification
					v-if="heating"
					type="heating"
					:value="heating"
					large
				/>
				<CamperSpecification
					v-if="fridgeCapacity"
					type="fridgeCapacity"
					:value="heating"
					large
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.specification-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 302px));
	grid-column-gap: 24px;
	grid-row-gap: 64px;
}
</style>
