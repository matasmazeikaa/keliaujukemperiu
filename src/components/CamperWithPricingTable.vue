<script lang="ts" setup>
interface Props {
	title: string;
	previewDescription: string;
	pricePerDay: string;
	year: string;
	gearbox: string;
	weight: string;
	width: string;
	placesToSit: string;
	placesToSleep: string;
	thumbnail: {};
	slug: string;
	price: string;
	isForPurchase: boolean;
	fridgeCapacity: string;
	isCaravan: boolean;
	isPricingTable: boolean;
	visibleAttribute: {
		id: number;
		visibleAttribute: string
	}[];
	pricingTable: {
		prices: {
			period: string;
			seasonS: string;
			seasonM: string;
			seasonL: string;
		}[];
	},
	selectedSeason: 'seasonS' | 'seasonM' | 'seasonL';
}

const props = defineProps<Props>();
const route = useRoute();

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const isSalePage = computed(() => route.path.includes('/prekyba'));
const isRentPage = computed(() => route.path.includes('/nuoma'));

const camperRoute = computed(() => {
	if (isSalePage.value && props.isCaravan) {
		return `/prekyba/parduodami-karavanai/${props.slug}`;
	}

	if (isSalePage.value && !props.isCaravan) {
		return `/prekyba/kemperiu-pardavimas/${props.slug}`;
	}

	if (isRentPage.value && props.isCaravan) {
		return `/nuoma/karavanu-nuoma/${props.slug}`;
	}

	if (isRentPage.value && !props.isCaravan) {
		return `/nuoma/kemperiu-nuoma/${props.slug}`;
	}

	return '';
});

const shouldShowNuo = computed(() => !props.pricePerDay.includes('-'));

console.log(props.pricingTable);
</script>

<template>
	<div class="flex items-top flex-wrap lg:flex-nowrap gap-16 md:gap-40">
		<div class="w-full">
			<NuxtImg
				v-if="thumbnail.data?.attributes.url"
				class="mb-24 hero-image h-auto lg:h-[25rem] w-full object-cover"
				:src="thumbnail.data?.attributes.url || ''"
				:alt="thumbnail.data?.attributes.alternativeText || title || ''"
				:quality="85"
				width="600"
				height="250"
				format="webp"
			/>

			<h3 class="text-h4 md:text-h4 mb-8">{{ title }}</h3>
			<p class="text-body-2 text-primary-black mb-12 md:mb-16">{{ previewDescription }}</p>
			<div
				v-if="isRentPage && pricePerDay"
				class="grid grid-cols-2 gap-16 md:flex mb-16"
			>
				<p
					v-for="periodEntry in pricingTable?.prices"
					:key="periodEntry.period"
					class="text-label text-primary-black"
				>
					{{ periodEntry.period }} {{ periodEntry[selectedSeason] }} / d.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-16 md:flex mb-16">
				<CamperSpecification
					v-for="attribute in visibleAttribute"
					:key="attribute.id"
					:type="attribute.visibleAttribute"
					:value="props[attribute.visibleAttribute]"
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
