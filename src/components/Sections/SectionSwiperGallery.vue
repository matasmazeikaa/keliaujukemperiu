<script lang="ts" setup>
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.es5';
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.es5';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import Lightgallery from 'lightgallery/vue';

interface Props {
	images: {}[]
}

const props = defineProps<Props>();

const hasMoreItems = computed(() => props.images.length > 6);

const config = useRuntimeConfig();
</script>

<template>
	<section class="section-padding bg-white my-20 md:my-40">
		<div class="container mx-auto">
			<div class="flex items-center justify-center">
				<Lightgallery
					:settings="{
						speed: 500,
						plugins: [lgThumbnail, lgZoom]
					}"
					class="gallery max-w-[72rem]"
				>
					<a
						v-for="(image, index) in images"
						:key="image.attributes.url"
						:href="`${config.public.strapi.url}${image.attributes.url}`"
						class="gallery-image relative"
						:class="[`gallery-image-${index}`]"
					>
						<div
							v-if="index === 0"
							class="p-8 bg-gray w-fit rounded absolute right-0 zoom-in-0"
						>
							<ZoomIn />
						</div>

						<div
							v-else
							class="p-8 bg-gray w-fit rounded absolute right-0 left-0 top-0 hidden"
							:class="[`zoom-in-${index}`]"
						>
							<ZoomIn />
						</div>

						<img
							:src="`${config.public.strapi.url}${image.attributes.url}`"
							:alt="image.attributes.alternateText || ''"
							width="720"
							height="520"
						/>

						<div
							v-if="index === 5 && hasMoreItems"
							class="more-foto-overlay"
						>
							<p class="text-body-3 md:text-h5">+{{ images.length }} Foto</p>
						</div>
					</a>
				</Lightgallery>
			</div>
		</div>
	</section>
</template>

<style>

.gallery-image-0:hover .zoom-in-0 {
	background: black !important;
}

.gallery-image-1:hover .zoom-in-1 {
	display: block;
}
.gallery-image-2:hover .zoom-in-2 {
	display: block;
}
.gallery-image-3:hover .zoom-in-3 {
	display: block;
}
.gallery-image-4:hover .zoom-in-4 {
	display: block;
}

.more-foto-overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
}

.more-foto-overlay:hover {
	background: rgba(0,0,0,0.8);
}

.gallery {
	display: grid;
	gap: 8px;
}

.gallery-image {
	display: none;
}

.gallery-image:nth-child(1) {
	grid-column: 1 / 6;
	grid-row: 1 / 1;
	display: block;
}

.gallery-image:nth-child(2) {
	grid-column: 1 / 1;
	grid-row: 2 / 2;
	display: block;
}

.gallery-image:nth-child(3) {
	grid-column: 2 / 3;
	grid-row: 2 / 2;
	display: block;
}

.gallery-image:nth-child(4) {
	grid-column: 3 / 4;
	grid-row: 2 / 2;
	display: block;

}

.gallery-image:nth-child(5) {
	grid-column: 4 / 5;
	grid-row: 2 / 2;
	display: block;
}

.gallery-image:nth-child(6) {
	grid-column: 5 / 6;
	grid-row: 2 / 2;
	display: block;
}

.gallery-image:nth-child(2) img {
	height: 100px;
	object-fit: cover;
	width: auto;
}

.gallery-image:nth-child(3) img {
	height: 100px;
	object-fit: cover;
	width: auto;
}

.gallery-image:nth-child(4) img {
	height: 100px;
	object-fit: cover;
	width: auto;

}

.gallery-image:nth-child(5) img {
	height: 100px;
	object-fit: cover;
	width: auto;
}

.gallery-image:nth-child(6) img {
	height: 100px;
	object-fit: cover;
	width: auto;
}

@media only screen and (max-width: 500px) {
	.gallery-image:nth-child(2) img {
		height: auto !important;
	}

	.gallery-image:nth-child(3) img {
		height: auto;
	}

	.gallery-image:nth-child(4) img {
		height: auto;
	}

	.gallery-image:nth-child(5) img {
		height: auto;
	}

	.gallery-image:nth-child(6) img {
		height: auto;
	}
}

.arrow-container-mobile-left {
	padding: 12px;
	position: absolute;
    top: 50%;
	left: 0;
    transform: translate(0,-50%);

	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	z-index: 100;
}

@screen md {
	.mySwiper2 {
		width: 100%;
		max-width: 720px;
		height: 520px;
		margin: 0 48px;
	}
}
</style>
