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
			class="hero-image w-[40rem] h-[24rem] object-cover mb-16 md:mb-32"
			width="400"
			height="240"
			:src="thumbnail.data.attributes.url"
			:alt="thumbnail.data.attributes.alternateText || title"
			:quality="85"
			format="webp"
		/>
		<div>
			<div class="mb-12 text-label flex gap-4 items-center">
				<label class="text-gray capitalize">{{ date }}</label>
			</div>
			<h4 class="text-h4 mb-12 text-primary-black">{{ title }}</h4>
			<p class="text-primary-black text-body-2">{{ previewSubtitle }}</p>
		</div>
	</NuxtLink>
</template>
