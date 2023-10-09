<script lang="ts" setup>
import {
	disableBodyScroll, enableBodyScroll,
} from 'body-scroll-lock';

interface Props {
	items: {
		to: string;
		title: string;
	}[];
	white?: boolean;
}

const headerRef = ref<HTMLElement | null>(null);
const isWhiteLocal = ref(false);
const hoveredNavItem = ref<null|number>(null);
const currentScrollPosition = ref(0);
const isScrollingDown = ref(false);

const props = withDefaults(defineProps<Props>(), {
	items: () => [
		{
			to: '/pardavimas',
			title: 'Prekyba',
		},
		{
			to: '/nuoma',
			title: 'Nuoma',
		},
		{
			to: '/iranga-kemperiams',
			title: 'Įranga kemperiams',
		},
		{
			to: '/servisas',
			title: 'Servisas',
		},
		{
			to: '/apie-mus',
			title: 'Apie mus',
		},
		{
			to: '/naujienos',
			title: 'Naujienos',
		},
	],
});

const isMobileMenuOpen = ref(false);

const isWhite = computed(() => isWhiteLocal.value || props.white);

watch(isMobileMenuOpen, (value) => {
	if (value) {
		disableBodyScroll(document.body);
	} else {
		enableBodyScroll(document.body);
	}
});

const checkIfScrolledBelowHeroSection = () => {
	const heroSection = document.getElementsByClassName('hero-section')[0];

	if (!heroSection) {
		return;
	}

	const scrollPosition = window.scrollY;

	if (scrollPosition + (headerRef.value?.offsetHeight || 0) > heroSection.offsetHeight) {
		isWhiteLocal.value = true;
	} else {
		isWhiteLocal.value = false;
	}
};

const checkIfScrollingUpOrDown = () => {
	const scrollPosition = window.scrollY;
	const header = document.getElementsByClassName('header')[0];

	if (scrollPosition > currentScrollPosition.value) {
		isScrollingDown.value = true;
		// transition header top with transform
	} else {
		isScrollingDown.value = false;
	}

	currentScrollPosition.value = scrollPosition;
};

onMounted(() => {
	const heroSection = document.getElementsByClassName('hero-section');

	window.addEventListener('scroll', () => {
		checkIfScrolledBelowHeroSection();
		checkIfScrollingUpOrDown();
	});

	console.log(heroSection);
});
</script>

<template>
	<header
		ref="headerRef"
		class="header h-[7.2rem] lg:h-96"
		:class="{
			'bg-white': isWhite,
			'bg-transparent': !isWhite,
			'is-scrolling-down': isScrollingDown,
		}"
	>
		<nav class="py-20 md:py-16 section-padding">
			<div class="flex justify-between items-center mx-auto">
				<div class="flex justify-between items-center w-full ">
					<NuxtLink
						to="/"
						class="w-[9.1rem] h-[3.2rem] md:h-40 lg:w-[12.4rem] mr-24 z-10"
						aria-label="Home"
					>
						<HeaderLogoWhite
							v-if="!isWhite"
							class="w-full h-full"
						/>
						<HeaderLogoDark
							v-if="isWhite || isMobileMenuOpen"
							class="w-full h-full"
						/>
					</NuxtLink>

					<div class="flex items-center gap-32">
						<ul
							class="gap-32 hidden items-center lg:flex"
							@mouseleave="hoveredNavItem = null"
						>
							<li
								v-for="(item, index) in items"
								:key="item.title"
								class="cursor-pointer"
							>
								<NuxtLink
									:to="item.to"
									class="text-body-2 cursor-pointer"
									:class="{
										'text-white': !isWhite,
										'text-primary-black': isWhite,
										'is-blur-hovered': hoveredNavItem !== index && hoveredNavItem !== null,
									}"
									@mouseover="hoveredNavItem = index"
								>
									{{ item.title }}
								</NuxtLink>
							</li>
						</ul>
						<div class="hidden md:block">
							<p
								class="working-time mb-4"
								:class="{
									'text-secondary-white': !isWhite,
									'text-primary-black': isWhite,
								}"
							>
								I - V, 09:00 - 18:00
							</p>
							<a
								class="phone-number"
								href="tel:+37061809966"
								:class="{
									'text-secondary-white': !isWhite,
									'text-primary-blue': isWhite,
								}"
							>
								+37061809966
							</a>
						</div>
						<div class="hidden lg:block">
							<Button
								to="/kontaktai"
							>
								Susisiekti
							</Button>
						</div>
					</div>
				</div>
				<div
					id="hamburger-1"
					class="hamburger block lg:hidden ml-32 relative z-10"
					:class="{ 'is-active': isMobileMenuOpen }"
					@click="isMobileMenuOpen = !isMobileMenuOpen"
				>
					<span
						class="line"
						:class="{ 'line--dark': isWhite, }"
					></span>
					<span
						class="line"
						:class="{ 'line--dark': isWhite, }"
					></span>
					<span
						class="line"
						:class="{ 'line--dark': isWhite }"
					></span>
				</div>
			</div>
		</nav>

		<div
			class="popup"
			:class="{ 'popup--active': isMobileMenuOpen }"
		>
			<div class="h-full flex flex-col items-center justify-center p-96">
				<ul class="flex flex-col text-center mt-auto">
					<li
						v-for="item in items"
						:key="item.title"
					>
						<NuxtLink
							:to="item.to"
							class="text-body-1 hover:opacity-75 transition-opacity block text-black p-20"
							@click="isMobileMenuOpen = false"
						>
							{{ item.title }}
						</NuxtLink>
					</li>
				</ul>

				<div class="flex flex-col text-center mt-24 max-w-[32.8rem] w-full">
					<div class="mb-16">
						<p
							class="working-time text-primary-black mb-4"
						>
							I - V, 09:00 - 18:00
						</p>
						<a
							class="phone-number text-primary-blue"
							href="tel:+37061809966"
						>
							+37061809966
						</a>
					</div>
					<Button
						to="/kontaktai"
						@click="isMobileMenuOpen = false"
					>
						Susisiekti
					</Button>
				</div>
			</div>
		</div>
	</header>
</template>

<style>

.is-blur-hovered {
	transition: all 0.1s ease-in-out;
	filter: blur(2px);
}

.is-scrolling-down {
	transform: translateY(-100%);
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	transition: all 0.2s ease-in-out;
}

.working-time {
	font-family: Montserrat;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;
}

.phone-number {
	font-family: Montserrat;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 16px;
}

.col {
  display: block;
  float:left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

/* CLEARFIX */

.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}

/* ALL */

.row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line{
  width: 18px;
  height: 2px;
  background-color: var(--primary-white);
  display: block;
  margin: 4px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger .line--dark {
	background-color: var(--primary-black);
}

#hamburger-1.is-active .line {
	background-color: var(--primary-black);
}

#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(1px) rotate(45deg);
  -ms-transform: translateY(1px) rotate(45deg);
  -o-transform: translateY(1px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}

#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-1px) rotate(-45deg);
  -ms-transform: translateY(-1px) rotate(-45deg);
  -o-transform: translateY(-1px) rotate(-45deg);
  transform: translateY(-7px) rotate(-45deg);
}

.popup {
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  transform: translateX(100%);
}

.popup.popup--active {
  transform: translateX(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.popup .menu_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 5.33vw 12.8vw;
  text-transform: uppercase;
}

.popup .menu_box_column {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17.2vw;
}

.popup .menu_box_left {
  position: relative;
  margin-right: 4.53vw;
}

.popup .menu_box_right {
  position: relative;
}

.popup .menu_box_text {
  font-size: 10rem;
  color: #fff;
}

.popup .menu_box_text_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 50%, rgba(0, 0, 0, 0.9));
  background: -webkit-linear-gradient(0deg, transparent 50%, rgba(0, 0, 0, 0.9));
}

.popup .menu_box_number {
  font-size: 3.2vw;
  color: #b1b1b1;
}

</style>
