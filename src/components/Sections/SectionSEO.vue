<script lang="ts" setup>
interface Props {
	text: string;
}

defineProps<Props>();
</script>

<template>
	<section class="section-padding my-40 md:my-120">
		<div class="container mx-auto text-center">
			<div
				class="blog-content"
				v-html="text"
			/>
		</div>
	</section>
</template>

<style>
.blog-content {
	text-align: left;
	white-space: break-spaces;
}

@screen md {
	.blog-content p {
		font-size: 18px;
	}

	.blog-content h3 {
		font-size: 48px;
	}

	.blog-content h4 {
		font-size: 24px;
	}
}

.blog-content p {
	font-family: Montserrat;
	font-size: 16px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0em;
	text-align: left;
}

.blog-content a {
	color: rgb(115 137 235 / 1);
	cursor: pointer;
}

.blog-content a:hover {
	cursor: pointer;
	text-decoration: underline;
}

.blog-content h3 {
	font-family: Bricolage Grotesque;
	font-size: 24px;
	font-weight: 600;
	line-height: 56px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 1.6rem;
}

.blog-content h4 {
	font-family: Bricolage Grotesque;
	font-size: 16px;
	font-weight: 500;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 1.6rem;
}
</style>
