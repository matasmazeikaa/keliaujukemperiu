<script lang="ts" setup>
const {
	findOne,
	find,
} = useStrapi();

const { data } = await useAsyncData(
	'rentpricing',
	() => findOne('rentpricing', {
		populate: ['deep'],
	}),
);
// 01/06 - 04/30 ir 10/01 - 12/20
// 05/01 - 06/15 ir 09/01 - 09/30
// 06/16 - 08/31 ir 12/21 - 01/04
const getCurrentSeason = () => {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	if ((month === 1 && day >= 6) || (month === 2 && day <= 31) || (month === 3 && day <= 31) || (month === 4 && day <= 30) || (month === 10 && day <= 1) || (month === 11 && day <= 31) || (month === 12 && day <= 20)) {
		return 'seasonS';
	}

	if ((month === 5 && day >= 1) || (month === 6 && day <= 15) || (month === 9 && day <= 30)) {
		return 'seasonM';
	}

	if ((month === 6 && day >= 16) || (month === 7 && day <= 31) || (month === 8 && day <= 31) || (month === 12 && day >= 21) || (month === 1 && day <= 4)) {
		return 'seasonL';
	}

	return 'seasonS';
};

const selectedSeason = ref(getCurrentSeason());

const pageData = computed((): any => data.value?.data.attributes);

const { data: caravans } = await useAsyncData(
	'caravan-list-pricing-table',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForRent: true,
			isCaravan: true,
		},
		sort: 'title:asc',
	}),
);

const { data: campers } = await useAsyncData(
	'camper-list-pricing-table',
	() => find('campers', {
		populate: 'deep',
		filters: {
			isForRent: true,
			isCaravan: false,
		},
		sort: 'title:asc',
	}),
);

console.log(campers);

useHead({
	title: pageData.value?.seo.metaTitle,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: pageData.value?.seo.metaDescription,
		},
	],
});

console.log(pageData);
</script>

<template>
	<SectionHeroSubpage
		:title="pageData.title"
		:subtitle="pageData.subtitle"
	/>

	<section class="section-padding py-80">
		<div class="container mx-auto">
			<div class="mb-48">
				<h4 class="text-h3 mb-24">Sezono metas</h4>
				<h5 class="mb-16 text-h5">Sausio 6 d. – Balandžio 30 d. ir Spalio 1 d. – Gruodžio 20 d. <span class="text-gray">S (pigiausios kainos)</span></h5>
				<h5 class="mb-16 text-h5">Gegužės 1 d. – Birželio 15 d. ir Rugsėjo 1 d. – Rugsėjo 30 d. <span class="text-green">M (vidutinės kainos)</span></h5>
				<h5 class="mb-16 text-h5">Birželio 16 d. – Rugpjūčio 31 d. ir Gruodžio 21 d. – Sausio 4 d. <span class="text-red">L (didžiausios kainos)</span></h5>
			</div>
			<div class="sticky top-64 p-24 bg-white mb-64">
				<p class="mb-24 text-h4 text-bold text-center">Pasirinkite sezoną</p>
				<div class="flex justify-center w-full">
					<Button
						class="w-1/3"
						:dark-white="selectedSeason !== 'seasonS'"
						@click="selectedSeason = 'seasonS'"
					>
						<p>Sezonas S</p>
						<p class="hidden md:block">(01/06 - 04/30 ir 10/01 - 12/20)</p>
					</Button>
					<Button
						class="w-1/3"
						:dark-white="selectedSeason !== 'seasonM'"
						@click="selectedSeason = 'seasonM'"
					>
						<p>Sezonas M</p>
						<p class="hidden md:block">(05/01 - 06/15 ir 09/01 - 09/30)</p>
					</Button>
					<Button
						class="w-1/3"
						:dark-white="selectedSeason !== 'seasonL'"
						@click="selectedSeason = 'seasonL'"
					>
						<p>Sezonas L</p>
						<p class="hidden md:block">(06/16 - 08/31 ir 12/21 - 01/04)</p>
					</Button>
				</div>
			</div>

			<div class="mb-64">
				<h2 class="text-h4 md:text-h3 mb-48">{{ pageData.camperTitle }}</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-40">
					<CamperWithPricingTable
						v-for="{ attributes: camper } in campers?.data"
						:key="camper.title"
						v-bind="camper"
						:selected-season="selectedSeason"
						is-pricing-table
					/>
				</div>
			</div>

			<div>
				<h2 class="text-h4 md:text-h3 mb-48">{{ pageData.caravanTitle }}</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-40">
					<CamperWithPricingTable
						v-for="{ attributes: camper } in caravans?.data"
						:key="camper.title"
						v-bind="camper"
						:selected-season="selectedSeason"
						is-pricing-table
						is-caravan
					/>
				</div>
			</div>
		</div>
	</section>

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<GotQuestionsSection />
</template>
