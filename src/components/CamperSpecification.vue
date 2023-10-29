<script lang="ts" setup>
interface Props {
	type: 'year' | 'gearbox' | 'placesToSit' | 'placesToSleep' | 'weight'| 'fuelCapacity' | 'heating' | 'fridgeCapacity' | 'width'
	value: string;
	large?: boolean;
}

const props = defineProps<Props>();

const getSpecification = computed(() => {
	switch (props.type) {
	case 'year':
		return {
			text: 'Pagaminimo metai',
			icon: resolveComponent('IconYear'),
		};
	case 'gearbox':
		return {
			text: 'Pavarų dėžė',
			icon: resolveComponent('IconGearbox'),
		};
	case 'placesToSit':
		return {
			text: 'Sėdimos vietos',
			icon: resolveComponent('IconPlacesToSit'),
		};
	case 'placesToSleep':
		return {
			text: 'Miegamos vietos ',
			icon: resolveComponent('IconPlacesToSleep'),
		};
	case 'weight':
		return {
			text: 'Bendroji masė ',
			icon: resolveComponent('IconWeight'),
		};
	case 'fuelCapacity':
		return {
			text: 'Kuro bako talpa',
			icon: resolveComponent('IconTankCapacity'),
		};
	case 'heating':
		return {
			text: 'Šildymas',
			icon: resolveComponent('IconHeating'),
		};
	case 'fridgeCapacity':
		return {
			text: 'Šaldytuvas',
			icon: resolveComponent('IconFridgeCapacity'),
		};
	case 'width':
		return {
			text: 'Plotis',
			icon: resolveComponent('IconWidth'),
		};
	default:
		return {
			text: '',
			icon: '',
		};
	}
});
</script>

<template>
	<div>
		<Component
			:is="getSpecification?.icon"
			:class="{
				'mb-8 w-24 h-24 md:w-40 md:h-40 md:mb-20': large,
				'mb-8 w-24 h-24': !large
			}"
		/>
		<p
			class="text-primary-black mb-4"
			:class="{
				'button-style-1': !large,
				'button-style-1 md:text-h4': large,
			}"
		>
			{{ value }}
		</p>
		<p
			class="!text-primary-black"
			:class="{
				'text-small md:button-style-1': large,
				'text-small': !large,
			}"
		>
			{{ getSpecification?.text }}
		</p>
	</div>
</template>
