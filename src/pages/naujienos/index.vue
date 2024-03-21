<script setup lang="ts">
import {
	IProperty, PaginationByPage, Strapi4ResponseMany,
} from '~/types';

const DEFAULT_PAGINATION = {
	page: 1,
	pageSize: 9,
};

const {
	find,
	findOne,
} = useStrapi();

const { data } = await useAsyncData(
	'news-page',
	() => findOne('news-page', {
		populate: ['deep'],
	}),
);

const pageData = computed((): any => data.value?.data.attributes);

useHead({
	title: pageData.value?.seo?.metaTitle,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: pageData.value?.seo?.metaDescription,
		},
	],
});

const propertySearch = ref('');
const propertySort = ref('asc');
const totalProperties = ref(0);

const { data: blogs } = await useAsyncData(
	'blogs',
	() => find<IProperty>('blogs', {
		populate: 'deep',
		pagination: {
			page: DEFAULT_PAGINATION.page,
			pageSize: DEFAULT_PAGINATION.pageSize,
		},
	}),
);

const {
	currentPage,
	currentPageSize,
	next: nextPage,
	prev: prevPage,
} = useOffsetPagination({
	page: 1,
	pageSize: 9,
	total: totalProperties,
});

const fetchProperties = async () => {
	const {
		data,
		meta,
	} = await find<IProperty>('blogs', {
		populate: 'deep',
		filters: {
			address: {
				$contains: propertySearch.value,
			},
		},
		sort: [
			// @ts-ignore
			{
				price: propertySort.value,
			},
		],
		pagination: {
			page: currentPage.value,
			pageSize: currentPageSize.value,
		},
	});

	totalProperties.value = (meta?.pagination as PaginationByPage)?.total ?? 1;

	blogs.value = {
		...blogs.value,
		data,
	} as Strapi4ResponseMany<IProperty>;
};

totalProperties.value = (blogs.value?.meta?.pagination as PaginationByPage)?.total ?? 1;

watch(propertySearch, () => {
	currentPage.value = 1;

	fetchProperties();
});

watch(propertySort, () => {
	fetchProperties();
});

watch(currentPage, () => {
	fetchProperties();
});
</script>

<template>
	<SectionHeroSubpage :title="pageData.title" />
	<section class="section-padding">
		<div class="container mx-auto">
			<div class="place-items-center items-baseline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-40 py-20 md:my-64">
				<BlogCard
					v-for="{
						attributes: {
							title, thumbnail, previewSubtitle, author, createdAt, slug
						}
					} in blogs?.data"
					:key="title"
					:title="title"
					:preview-subtitle="previewSubtitle"
					:author="author"
					:created-at="createdAt"
					:thumbnail="thumbnail"
					:slug="slug"
				/>
			</div>
		</div>
	</section>

	<SectionSEO
		v-if="pageData.seoSection"
		:text="pageData.seoSection"
	/>

	<GotQuestionsSection/>
</template>
