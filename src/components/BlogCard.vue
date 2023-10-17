<script lang="ts" setup>
import dayjs from 'dayjs';
import 'dayjs/locale/lt';

dayjs.locale('lt');

interface Props {
	author: string;
	createdAt: string;
	title: string;
	previewSubtitle: string;
	thumbnail: {};
	slug: string;
}

const props = defineProps<Props>();

const date = dayjs(props.createdAt).format('MMMM D, YYYY');

const to = `/naujienos/${props.slug}`;

</script>

<template>
	<NuxtLink
		class="max-w-[40rem] cursor-pointer"
		:to="to"
	>
		<NuxtImg
			class="hero-image"
			width="400"
			:src="thumbnail.data.attributes.url"
			:alt="thumbnail.data.attributes.alternateText"
			:quality="85"
			format="webp"
		/>
		<img class="mb-16 md:mb-32"/>
		<div class="mb-12 text-label flex gap-4 items-center">
			<label class=" text-primary-blue">{{ author }}</label>
			<label class="text-gray">•</label>
			<label class="text-gray capitalize">{{ date }}</label>
		</div>
		<h4 class="text-h4 mb-12 text-primary-black">{{ title }}</h4>
		<p class="text-primary-black text-body-2">{{ previewSubtitle }}</p>
	</NuxtLink>
</template>
