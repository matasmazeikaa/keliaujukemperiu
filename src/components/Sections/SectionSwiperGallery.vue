<script lang="ts" setup>
import {
	SwiperNavigation, SwiperFreeMode, SwiperThumbs,
} from '~~/.nuxt/imports';

interface Props {
	images: {}[]
}

defineProps<Props>();

const swiperInstance = useSwiper();

const controlledSwiper = ref<typeof swiperInstance>({} as typeof swiperInstance);
const setControlledSwiper = (swiper: any) => {
	controlledSwiper.value = swiper;
};

const modules = [
	SwiperNavigation,
	SwiperFreeMode,
	SwiperThumbs,
];

setTimeout(() => {
	controlledSwiper.value.slideTo(3);
}, 3000);
</script>

<template>
	<section class="section-padding bg-white my-20 md:my-80">
		<div class="container mx-auto">
			<div class="flex items-center justify-center">
				<div class="p-16 hidden md:block">
					<IconArrowRightGallery
						class="cursor-pointer w-80 h-auto"
						role="button"
						alt="previous testimonial"
						aria-label="previous testimonial"
						@click="controlledSwiper.slidePrev()"
					/>
				</div>

				<Swiper
					v-if="images.length"
					:space-between="10"
					:navigation="true"
					:modules="modules"
					loop
					class="mySwiper2 mb-24"
					@swiper="setControlledSwiper"
				>
					<div class="arrow-container-mobile-left md:hidden">
						<IconArrowRightGallery
							class="cursor-pointer "
							role="button"
							alt="previous testimonial"
							aria-label="previous testimonial"
							@click="controlledSwiper.slidePrev()"
						/>
					</div>
					<SwiperSlide
						v-for="(image, index) in images"
						:key="image.attributes.url"
					>
						<NuxtImg
							:src="image.attributes.url"
							:alt="image.attributes.alternateText || ''"
							class="md:w-[72rem] md:h-[52rem] object-cover"
							width="720"
							height="520"
							format="webp"
							quality="85"
						/>
					</SwiperSlide>

					<div class="image-count-container">
						<p class="text-label md:text-body-2 text-white">{{ (controlledSwiper.realIndex || 0) + 1 }} / {{ images.length }}</p>
					</div>

					<div class="arrow-container-mobile-right md:hidden" >
						<IconArrowRightGallery
							class="cursor-pointer rotate-180"
							role="button"
							alt="previous testimonial"
							aria-label="previous testimonial"
							@click="controlledSwiper.slideNext()"
						/>
					</div>
				</Swiper>
				<div class="p-16 hidden md:block" >
					<IconArrowRightGallery
						class="cursor-pointer rotate-180 w-80 h-auto"
						role="button"
						alt="previous testimonial"
						aria-label="previous testimonial"
						@click="controlledSwiper.slideNext()"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style>

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

.arrow-container-mobile-right {
	padding: 12px;
	position: absolute;
    top: 50%;
	right: 0;
    transform: translate(0,-50%);

	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	z-index: 100;
}

.image-count-container {
	padding: 18px;
	position: absolute;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	z-index: 100;
}

@screen md {
	.image-count-container {
		padding: 48px;
	}

	.arrow-container-mobile-left, .arrow-container-mobile-right {
		display: none;
	}
}

.swiper-button-prev:not(.s) {
	display: none;
}

.swiper-button-next:not(.s) {
	display: none;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  width: 100%;
  max-width: 720px;
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
