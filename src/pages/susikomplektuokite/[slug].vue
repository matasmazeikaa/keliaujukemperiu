<script lang="ts" setup>
const { find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: partners } = await useAsyncData(
	'partners',
	() => find('partners', {
		populate: 'deep',
		filters: {
			slug,
		},
	}),
);

const partner = computed(() => partners?.value?.data[0].attributes || {
	images: {
		data: [],
	},
	promotedBlogs: {
		data: [],
	},
});

console.log(partner, 'partner');
</script>

<template>
	<SectionHeroMain
		v-bind="partner.Hero"
	/>

	<section class="section-padding">
		<div class="container mx-auto">
			<div class="gallery">
				<div
					v-for="image, index in partner.gallery.data"
					:key="image.id"
					:class="`box-${index}`"
				>
					<NuxtImg
						:src="image.attributes.url"
						:quality="85"
					/>
				</div>
			</div>
		</div>
	</section>

	<GotQuestionsSection/>
</template>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 48rem 48rem;
    grid-gap: 0px;
    grid-row-gap: 24px;
}

.gallery {
	object-fit: cover;
	height: 100%;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.box-0 {
    grid-column: 1 / 10;
    grid-row: 1;
	width: 720px;
}

.box-1 {
    grid-column: 8 / 13;
    grid-row: 1;
	width: 536px;
}

.box-2 {
	grid-column: 1 / 7;
	grid-row: 2;
	width: 536px;
}

.box-3 {
	grid-column: 7 / 13;
	grid-row: 2;
	width: 720px;
}
</style>
