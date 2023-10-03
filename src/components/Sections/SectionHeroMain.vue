<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	values?: string[];
	image?: string;
	ctaButton?: {
		text: string;
		type: 'primary' | 'white';
		url: string;
	}[]
}

const props = defineProps<Props>();

const hasValues = computed(() => props.values && props.values.length > 0);

const image = computed(() => props.image);

console.log(props.values);

console.log(props.image);
</script>

<template>
	<section class="hero-section">
		<NuxtImg
			class="hero-image"
			sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
			:src="image.data.attributes.url"
			:quality="85"
		/>
		<div class="background-drop"/>
		<div class="content container section-padding mx-auto">
			<div class="max-w-[64rem] text-white">
				<h1 class="text-h1 mb-16 ">{{ title }}</h1>
				<p class="text-body-1 mb-32">{{ subtitle }}</p>
				<div
					v-if="hasValues"
					class="flex flex-col gap-20 mb-40"
				>
					<ListItem
						v-for="item in props.values"
						:key="item"
						:text="item.text"
					/>
				</div>
				<div class="flex gap-16">
					<Button
						v-for="button in ctaButton"
						:key="button.text"
						v-bind="{ [button.type]: true, }"
						class="min-w-[14.4rem]"
					>
						{{ button.text }}
					</Button>
				</div>
			</div>
		</div>
		<PartnersList class="partners-list container mx-auto" />
	</section>
</template>

<style scoped>
.hero-section {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-self: center;
	position: relative;
}

.partners-list {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
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
