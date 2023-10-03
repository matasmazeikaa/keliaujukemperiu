<script lang="ts" setup>
import { IconFridgeCapacity, IconGearbox, IconHeating, IconPlacesToSit, IconPlacesToSleep, IconTankCapacity, IconWeight, IconYear } from '~~/.nuxt/components';

interface Props {
	type: 'year' | 'gearbox' | 'placesToSit' | 'placesToSleep' | 'weight' | 'fuelCapacity | 'heating' | 'fridgeCapacity';
	value: string;
}

const props = defineProps<Props>();

const getSpecification = computed(() => {
	switch (props.type) {
		case 'year':
			return {text: 'Pagaminimo metai', icon: 'IconYear'};
		case 'gearbox':
			return {text: 'Pavarų dėžė', icon: 'IconGearbox'};
		case 'placesToSit':
			return {text: 'Bendroji masė', icon: 'IconPlacesToSit'};
		case 'placesToSleep':
			return {text: 'Kuro bako talpa', icon: 'IconPlacesToSleep'};
		case 'weight':
			return {text: 'Sėdimos vietos', icon: 'IconWeight'};
		case 'fuelCapacity':
			return {text: 'Miegamos vietos', icon: 'IconTankCapacity'};
		case 'heating':
			return {text: 'Šildymas', icon: 'IconHeating'};
		case 'fridgeCapacity':
			return {text:'Šaldytuvas', icon: 'IconFridgeCapacity'};
	}
})
</script>

<template>
	<div>
		<Component :is="getSpecification?.icon" class="mb-20"/>
		<p class="text-h4 text-primary-black mb-8">{{ value }}</p>
		<p class="button-style-1 text-primary-black">{{ getSpecification?.text }}</p>
	</div>
</template>
