<script lang="ts" setup>
interface Props {
	title?: string;
	email?: string;
	phoneNumber?: string;
	address?: string;
	work?: {
		hours: string;
		days: string;
	};
}

defineProps<Props>();

const {
	submitForm,
	isLoading,
	hasSubmited,
} = useSubscriber();
</script>

<template>
	<div class="section-padding ">
		<div class="mx-auto max-w-screen-xl mb-120 md:mb-160 xl:mb-200 pt-48 md:pt-80 grid grid-cols-1 lg:grid-cols-2 gap-40 lg:gap-80">
			<div
				data-aos="fade-left"
				data-aos-delay="300"
			>
				<h2 class="mb-40 text-h3 md:text-h2 text-black">{{ hasSubmited ?  "Thank you for your message, we will contact you shortly." : "Išsiųskite žinutę mums"}}</h2>
				<FormKit
					v-if="!hasSubmited"
					type="form"
					:classes="{ form: 'flex flex-col items-baseline gap-24' }"
					:submit-attrs="{
						inputClass: 'hidden',
						outer: '!w-full',
						ignore: false
					}"
					help=""
					@submit="submitForm"
				>
					<div class="hidden">
						<FormKitMessages/> <!-- 👀 form messages will appear here -->
					</div>
					<FormKit
						outer-class="!w-full"
						type="text"
						name="name"
						label="Vardas"
						placeholder="Įveskite savo vardą"
						validation="required"
					/>
					<FormKit
						outer-class="!w-full"
						type="text"
						name="email"
						label="El. paštas"
						placeholder="Įveskite savo el. paštą"
						validation="required|email"
					/>
					<FormKit
						outer-class="!w-full"
						type="text"
						name="phone"
						label="Žinutė"
						placeholder="Kokia informacija domina Jus?"
						validation="length:3,1024"
					/>
					<Button
						:is-loading="isLoading"
					>
						Siųsti žinutę
					</Button>
				</FormKit>
			</div>

			<div class="bg-primary-black p-40 flex flex-col h-fit">
				<h1
					class="text-h3 text-white mb-24 md:mb-40"
					data-aos="fade-right"

					data-aos-delay="100"
				>
					Mūsų kontaktai
				</h1>
				<div class="grid grid-cols-1 gap-y-48 lg:grid-cols-2 md:gap-x-80 md:gap-y-40">
					<div
						data-aos="fade-up"

						data-aos-delay="200"
					>
						<IconEmail class="mb-16"/>
						<p
							class="mb-8 text-button button-style-1"
						>
							El. paštas
						</p>
						<a
							:href="`mailto:${email}`"
							class="text-body-2 text-white opacity-75"
						>
							{{ email || 'info@keliaujukemperiu.lt' }}
						</a>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<IconPhone class="mb-16"/>
						<p class="mb-8 text-button button-style-1">Telefono numeris</p>
						<p class="text-body-2 text-white opacity-75">{{ phoneNumber || '+370 618 09966' }}</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<IconAddress class="mb-16"/>
						<p class="mb-8 text-button button-style-1">Adresas</p>
						<p class="text-body-2 text-white opacity-75">{{ address || 'Žiežmarių 30, LT-56174, Kaišiadorys, Lietuva' }}</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="500"
					>
						<IconCompany class="mb-16"/>
						<p class="mb-8 text-button button-style-1">Įmonės informacija</p>
						<p class="text-body-2 text-white opacity-75">
							UAB „Soteras“
							Reg.Nr.: 300656388
							VAT: LT100002999818
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.formkit-actions {
	display: none;
}
</style>
