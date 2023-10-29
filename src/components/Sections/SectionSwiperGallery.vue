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
			<Swiper
				v-if="images.length"
				:space-between="10"
				:navigation="true"
				:modules="modules"
				loop
				class="mySwiper2 mb-24"
				@swiper="setControlledSwiper"
			>
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
			</Swiper>

			<div class="flex items-center">
				<div class="p-16 hidden md:block">
					<IconArrowRightGallery
						class="cursor-pointer"
						role="button"
						alt="previous testimonial"
						aria-label="previous testimonial"
						@click="controlledSwiper.slidePrev()"
					/>
				</div>

				<Swiper
					v-if="images.length"
					:space-between="24"
					:slides-per-view="4"
					loop
					:watch-slides-progress="true"
					:modules="modules"
					class="mySwiper"
				>
					<SwiperSlide
						v-for="(image, index) in images"
						:key="image.attributes.url"
						class="!h-full"
						@click="controlledSwiper?.slideTo(index)"
					>
						<NuxtImg
							class="w-[11.2rem] h-[8.4rem] md:w-[25.8rem] md:h-[16.8rem] object-cover"
							:src="image.attributes.url"
							:alt="image.attributes.alternateText || ''"
							quality="85"
							width="256"
							height="168"
							@click="controlledSwiper?.slideTo(index)"
						/>
					</SwiperSlide>
				</Swiper>

				<div class="p-16 hidden md:block" >
					<IconArrowRightGallery
						class="cursor-pointer rotate-180"
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
.swiper-button-prev {
	display: none;
}

.swiper-button-next {
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
  height: 240px;
}

@screen md {
	.mySwiper2 {
		width: 100%;
		max-width: 720px;
		height: 520px;
	}
}
</style>
