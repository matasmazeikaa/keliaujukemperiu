<script lang="ts" setup>
interface Props {
	title: string;
	previewDescription: string;
	pricePerDay: string;
	year: string;
	gearbox: string;
	placesToSit: string;
	placesToSleep: string;
	thumbnail: {};
	slug: string;
	price: string;
	isForPurchase: boolean;
}

const props = defineProps<Props>();

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const camperRoute = props.pricePerDay ? `/nuoma/kemperiai/${props.slug}` : `/prekyba/kemperiai/${props.slug}`;
</script>

<template>
	<div class="flex items-center flex-wrap md:flex-nowrap gap-16 md:gap-40">
		<NuxtImg
			class="hero-image max-w-[60rem] w-full"
			:src="thumbnail.data.attributes.url"
			:alt="thumbnail.data.attributes.alternativeText"
			:quality="85"
			width="600"
			height="450"
			format="webp"
		/>
		<div>
			<h3 class="text-h4 md:text-h3 mb-8">{{ title }}</h3>
			<p class="text-body-2 text-primary-black mb-12 md:mb-16">{{ previewDescription }}</p>
			<div
				v-if="pricePerDay"
				class="flex gap-8 mb-24 h-[5.4rem]"
			>
				<p class="button-style-1 md:text-h4 text-primary-black mb-8">Nuo</p>
				<p class="text-h4 md:text-h3 text-primary-black mb-16">{{ pricePerDay }}€ / d.</p>
			</div>
			<div v-if="price">
				<p class="text-h4 md:text-h3 text-primary-black mb-16">{{ numberWithCommas(price) }} €</p>
			</div>
			<div class="grid grid-cols-2 gap-16 md:flex md:gap-40 mb-24">
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
			<Button
				class="w-full"
				:to="camperRoute"
			>
				Sužinoti daugiau
			</Button>
		</div>
	</div>
</template>
