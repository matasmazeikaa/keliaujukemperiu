<template>
	<div class="flex gap-64 slider-partner" >
		<div class="slide-track">
			<div class="slide w-160 h-80 flex items-center justify-center">
				<EribaIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<HymerIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<CaradoIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<BurstnerIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<DometicIcon />
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<TrumaIcon />>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<EribaIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<HymerIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<CaradoIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<BurstnerIcon/>
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<DometicIcon />
			</div>
			<div class="slide w-160 h-80 flex items-center justify-center">
				<TrumaIcon />>
			</div>
		</div>
	</div>
</template>

<style scoped>

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}

.slider-partner {
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
}

.slider-partner::after {
	right: 0;
	top: 0;
	transform: rotateZ(180deg);
}

.slider-partner::before {
	left: 0;
	top: 0;
}

.slider-partner::after, .slider-partner::before {
	content: "";
	height: 100px;
	position: absolute;
	width: 200px;
	z-index: 2;
}

.slide-track {
	animation: scroll 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
}

.slide {
	height: 100px;
	width: 250px;
}

svg {
	width: 100%;
}
</style>
