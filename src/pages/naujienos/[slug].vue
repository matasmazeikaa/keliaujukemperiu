<script lang="ts" setup>
import dayjs from 'dayjs';
import MarkdownIt from 'markdown-it';
import 'dayjs/locale/lt';

dayjs.locale('lt');

const { find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: blogs } = await useAsyncData(
	'blogPage',
	() => find<IProperty>('blogs', {
		populate: ['deep'],
		filters: {
			slug,
		},
	}),
);

const blog = computed(() => blogs?.value?.data[0].attributes as IProperty || {
	images: {
		data: [],
	},
	promotedBlogs: {
		data: [],
	},
});

const date = dayjs(blog.value.createdAt).format('MMMM D, YYYY');

const promotedBlogs = computed(() => blog?.value?.promotedBlogs?.data ?? []);

const markdown = new MarkdownIt();
</script>

<template>
	<div class="h-[6.2rem] lg:h-96"/>
	<section class="section-padding">
		<div class="container mx-auto text-center max-w-[72rem]">
			<div class="mx-auto mb-12 text-label flex gap-4 justify-center text-center">
				<label class=" text-primary-blue">{{ blog.author }}</label>
				<label class="text-gray">•</label>
				<label class="text-gray capitalize">{{ date }}</label>
			</div>
			<h1 class="text-h1 mb-40">{{ blog.title }}</h1>

			<div
				class="blog-content"
				v-html="markdown.render(blog.blog)"
			/>
		</div>
	</section>

	<div class="h-[0.5px] bg-[#494B5A] my-80" />

	<section
		v-if="promotedBlogs.length"
		class="section-padding"
	>
		<div class="container mx-auto">
			<h2 class="text-h2 text-primary-black text-center">Daugiau straipsniu</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-40 py-64">
				<BlogCard
					v-for="{
						attributes: {
							title, thumbnail, previewSubtitle, author, createdAt, slug
						}
					} in promotedBlogs"
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

	<GotQuestionsSection />
</template>

<style>
.blog-content {
	text-align: left;
	white-space: break-spaces;
}

.blog-content p {
	font-family: Montserrat;
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0em;
	text-align: left;
}

.blog-content h3 {
	font-family: Bricolage Grotesque;
	font-size: 48px;
	font-weight: 600;
	line-height: 56px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 1.6rem;
}

.blog-content h4 {
	font-family: Bricolage Grotesque;
	font-size: 24px;
	font-weight: 500;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 1.6rem;

}
</style>
