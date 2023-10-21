import {
	IHero, ISection, ISeo,
} from '~/types';

export const useStrapiPage = async (page: string) => {
	const { findOne } = useStrapi();

	const { data } = await useAsyncData(
		'page',
		() => findOne<{hero: IHero, sections: ISection[], seo: ISeo}>(`${page}-page`, {
			populate: ['deep,100'],
		}),
	);

	const pageData = computed(() => data.value?.data.attributes);

	const { sectionsWithComponents } = useStrapiSection(pageData.value?.sections || []);

	const seo = computed(() => pageData.value?.seo);

	useHead({
		title: seo?.metaTitle,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: seo?.metaDescription,
			},
		],
	});

	return {
		hero: computed(() => pageData.value?.hero),
		pageData,
		sections: computed(() => sectionsWithComponents as any),
	};
};
