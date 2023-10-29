<script setup lang="ts">
const { findOne } = useStrapi();

const { data: testimonialSection } = await useAsyncData(
	'testimonials-section',
	() => findOne<{testimonials: {fullName: string, text: string}[], title: string}>('testimonials-section', {
		populate: 'deep',
	}),
);

const title = computed(() => testimonialSection.value?.data.attributes.title ?? '');
const testimonials = computed(() => testimonialSection.value?.data.attributes.testimonials ?? []);

const swiperInstance = useSwiper();

const controlledSwiper = ref<typeof swiperInstance>({} as typeof swiperInstance);
const setControlledSwiper = (swiper: any) => {
	controlledSwiper.value = swiper;
};
</script>

<template>
	<div class="relative section-padding my-120">
		<div class="container mx-auto text-center text-white relative z-100">
			<h2 class="text-h4 md:text-h2 text-black mb-24 md:mb-64">{{ title }}</h2>
			<QuotesIcon class="mx-auto mb-16 md:mb-32" />
			<div
				class="relative text-center"
			>
				<IconArrowRightGallery
					class="hidden md:block cursor-pointer z-10 hover:opacity-75 transition-opacity absolute left-0 top-1/2 transform -translate-y-1/2"
					role="button"
					alt="previous testimonial"
					aria-label="previous testimonial"
					@click="controlledSwiper.slidePrev()"
				/>
				<Swiper
					:slides-per-view="1"
					loop
					:effect="'creative'"
					:creative-effect="{
						prev: {
							shadow: false,
							translate: [
								'-20%', 0, -1
							],
						},
						next: {
							translate: [
								'100%', 0, 0
							],
						},
					}"
					@swiper="setControlledSwiper"
				>
					<SwiperSlide
						v-for="testimonial in testimonials"
						:key="testimonial.fullName"
					>
						<div class="max-w-[72rem] mx-auto">
							<h4 class="text-body-2 md:text-h4 text-black mb-16 md:mb-32">{{ testimonial.text }}</h4>
							<p class="text-body-2 md:button-style-1 mb-32 md:mb-54 !text-black">{{ testimonial.fullName }}</p>
						</div>
					</SwiperSlide>
				</Swiper>

				<IconArrowRightGallery
					class="hidden md:block z-10 cursor-pointer hover:opacity-75 transition-opacity  rotate-180 absolute right-0 top-1/2 transform -translate-y-1/2"
					role="button"
					alt="next testimonial"
					aria-label="next testimonial"
					@click="controlledSwiper.slideNext()"
				/>

				<div class="flex items-center">
					<IconArrowRightGallery
						class="md:hidden block cursor-pointer z-10 hover:opacity-75 transition-opacity"
						role="button"
						alt="previous testimonial"
						aria-label="previous testimonial"
						@click="controlledSwiper.slidePrev()"
					/>

					<div class="flex items-center justify-center gap-24 w-full mx-20">
						<Indicators
							:active-indicator-index="controlledSwiper.realIndex"
							:length="testimonials.length"
							@on-click="controlledSwiper?.slideTo($event)"
						/>
					</div>

					<IconArrowRightGallery
						class="md:hidden block z-10 cursor-pointer hover:opacity-75 transition-opacity  rotate-180"
						role="button"
						alt="next testimonial"
						aria-label="next testimonial"
						@click="controlledSwiper.slideNext()"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.testimonials-background {
	object-fit: cover;
	object-position: 81%;
}

.image-cover-yellow-dark {
	background: linear-gradient(102.08deg, #E5CE68 0%, rgba(229, 206, 104, 0) 69.19%);
	mix-blend-mode: screen;
opacity: 0.44;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
</style>
