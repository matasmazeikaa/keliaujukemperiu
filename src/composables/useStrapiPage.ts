import {
	IHero, ISection, ISeo,
} from '~/types';

export const useStrapiPage = async (page: string) => {
	const { findOne } = useStrapi();

	const { data } = await useAsyncData(
		`${page}-page`,
		() => findOne<{hero: IHero, sections: ISection[], seo: ISeo}>(`${page}-page`, {
			populate: ['deep, 10'],
		}),
	);

	console.log('nice');

	const pageData = computed(() => data.value?.data.attributes);

	const { sectionsWithComponents } = useStrapiSection(pageData.value?.sections || []);

	const seo = computed(() => pageData.value?.seo);

	useHead({
		title: seo.value?.metaTitle,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: seo.value?.metaDescription,
			},
		],
	});

	return {
		hero: computed(() => pageData.value?.hero),
		pageData,
		sections: computed(() => sectionsWithComponents as any),
	};
};
