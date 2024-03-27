<script lang="ts" setup>
const FOOTER = {
	aboutSubtitle: 'Kelionė su kemperiu ar karavanu skirta žmonėms, kurie nori pažinti pasaulį nepriklausomai.',
	servicesLinks: [
		{
			title: 'Kemperiai',
			link: '/prekyba/kemperiu-pardavimas',
		},
		{
			title: 'Karavanai',
			link: '/prekyba/parduodami-karavanai',
		},
		{
			title: 'Gamintojai',
			link: '/prekyba#gamintojai',
		},
		{
			title: 'Finansavimas',
			link: '/finansavimas',
		},
	],
	companyLinks: [
		{
			title: 'Kainoraštis',
			link: '/nuoma/kainorastis',
		},
		{
			title: 'Kemperiai',
			link: '/nuoma/kemperiu-nuoma',
		},
		{
			title: 'Karavanai',
			link: '/nuoma/karavanu-nuoma',
		},
	],
	otherLinks: [
		{
			title: 'Įranga',
			link: '/iranga',
		},
		{
			title: 'Servisas',
			link: '/karavanu-ir-kemperiu-servisas',
		},
		{
			title: 'Apie mus',
			link: '/apie-mus',
		},
		{
			title: 'Naujienos',
			link: '/naujienos',
		},
		{
			title: 'Kontaktai',
			link: '/kontaktai',
		},
		{
			title: 'DUK',
			link: '/duk',
		},
	],
};
</script>

<template>
	<footer class="section-padding  bg-primary-black ">
		<div class="container mx-auto py-40 md:py-120">
			<div class="footer-top-part">
				<div class="md:max-w-[26rem]">
					<LogoWhite class="mb-24"/>
					<p class="text-body-2 text-white">Komfortą vertinantiems keliautojams</p>
					<div class="flex gap-24 items-center mt-40 md:hidden">
						<a
							href="https://www.facebook.com/groups/keliaujukemperiu"
							target="_blank"
							aria-label="Facebook"
						>
							<IconFacebook />
						</a>
						<a
							href="https://www.facebook.com/groups/keliaujukemperiu"
							target="_blank"
							aria-label="Instagram"
						>
							<IconInstagram />
						</a>
					</div>
				</div>

				<div class="flex flex-col gap-16 order-4 md:order-none">
					<p class="button-style-1 mb-24 text-primary-yellow">Pardavimas</p>
					<NuxtLink
						v-for="service in FOOTER.servicesLinks"
						:key="service.title"
						class="text-body-2 mb-16 text-white"
						:to="service.link"
					>
						{{service.title}}
					</NuxtLink>
				</div>

				<div class="flex flex-col gap-16 order-3 md:order-none">
					<p class="button-style-1 mb-24 text-primary-yellow">Nuoma</p>
					<NuxtLink
						v-for="company in FOOTER.companyLinks"
						:key="company.title"
						class="text-body-2 mb-16 text-white"
						:to="company.link"
					>
						{{company.title}}
					</NuxtLink>
				</div>

				<div class="flex flex-col gap-16 order-2 md:order-none">
					<p class="button-style-1 mb-24 text-primary-yellow">Kita</p>
					<NuxtLink
						v-for="company in FOOTER.otherLinks"
						:key="company.title"
						class="text-body-2 mb-16 text-white"
						:to="company.link"
					>
						{{company.title}}
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="container mx-auto text-center">
			<div class="h-[0.5px] bg-[#494B5A]" />

			<p class="text-body-2 py-32 opacity-70 text-white">keliaujukemperiu.lt {{ new Date().getFullYear() }}</p>
		</div>
	</footer>
</template>

<style scoped>
.footer-top-part {
	display: flex;
	flex-direction: column-reverse;
	grid-gap: 4rem;
}

@screen md {
	.footer-top-part {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}
</style>
