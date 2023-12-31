<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	values?: string[];
	image?: string;
	icon?: {
		data: {
			attributes: {
				url: string;
			}
		}
	};
	ctaButton?: {
		text: string;
		type: 'primary' | 'white';
		to: string;
	}[]
}

const props = defineProps<Props>();

const hasValues = computed(() => props.values && props.values.length > 0);

const image = computed(() => props.image);
</script>

<template>
	<section
		id="hero-section"
		class="hero-section section-padding"
	>
		<div class="h-[7.2rem] lg:h-96" />
		<div class="container mx-auto mt-[7.2rem] lg:mt-96">
			<NuxtImg
				class="hero-image"
				sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
				:src="image.data.attributes.url"
				:alt="image.data.attributes.alternativeText || ''"
				width="1980"
				height="1080"
				:quality="85"
				format="webp"
				preload
			/>
			<div class="background-drop"/>
			<div class="content container mx-auto">
				<div class="max-w-[40rem] md:max-w-[64rem] mx-auto md:mx-0 w-full text-white">
					<NuxtImg
						v-if="icon?.data?.attributes"
						:src="icon.data.attributes.url"
						:alt="icon.data.attributes.alternateText || ''"
						:quality="85"
						:width="icon.data.attributes.width"
						:height="icon.data.attributes.height"
						class="mb-16 md:mb-40 mx-auto md:ml-0 md:mr-0"
					/>
					<h1 class="text-h1-mobile md:text-h1 mb-8 md:mb-16 text-center md:text-left">{{ title }}</h1>
					<p class="text-body-2 md:text-body-1 text-center md:text-left mb-16 md:mb-32">{{ subtitle }}</p>
					<div
						v-if="hasValues"
						class="flex flex-col gap-20 mb-40"
					>
						<ListItem
							v-for="item in props.values"
							:key="item"
							:text="item.text"
							is-orange
						/>
					</div>
					<div class="justify-center md:justify-normal flex flex-wrap gap-16">
						<Button
							v-for="button in ctaButton"
							:key="button.text"
							v-bind="{ [button.type]: true, }"
							:to="button.to"
							class="min-w-[14.4rem]"
						>
							{{ button.text }}
						</Button>
					</div>
				</div>
			</div>
			<PartnersList class="!mt-24 partners-list" />
		</div>
	</section>
</template>

<style scoped>
.hero-section {
	display: flex;
	align-items: center;
	justify-self: center;
	position: relative;
	min-height: 800px;
	height: 100dvh;
}

.partners-list {
	position: relative;
	z-index: 10;
}

.background-drop {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
	opacity: 0.6;
	background: black;
}

.content {
	position: relative;
	z-index: 10;
}

.hero-image {
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
	z-index: 8;
}
</style>
