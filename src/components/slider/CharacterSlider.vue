<template>
	<div class="slider my-5">
		<div class="slide-track">
			<div class="slide" v-for="i in icons" :key="i.index">
				<img :src="i" height="120" width="120" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				require('@/assets/slider/character/Pet_1.png'),
				require('@/assets/slider/character/Pet_2.png'),
				require('@/assets/slider/character/Pet_3.png'),
				require('@/assets/slider/character/Pet_4.png'),
				require('@/assets/slider/character/Pet_5.png'),
				require('@/assets/slider/character/Pet_6.png'),
				require('@/assets/slider/character/Pet_7.png'),
				require('@/assets/slider/character/Pet_8.png'),
				require('@/assets/slider/character/Pet_9.png'),
				require('@/assets/slider/character/Pet_10.png'),
				require('@/assets/slider/character/Pet_1.png'),
				require('@/assets/slider/character/Pet_2.png'),
				require('@/assets/slider/character/Pet_3.png'),
				require('@/assets/slider/character/Pet_4.png'),
				require('@/assets/slider/character/Pet_5.png'),
				require('@/assets/slider/character/Pet_6.png'),
				require('@/assets/slider/character/Pet_7.png'),
				require('@/assets/slider/character/Pet_8.png'),
				require('@/assets/slider/character/Pet_9.png'),
				require('@/assets/slider/character/Pet_10.png'),
			],
		};
	},
};
</script>

<style lang="scss" scoped>
$animationSpeed: 70s;
@mixin white-gradient {
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
}
// Animation
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-130px * 10));
	}
}

// Styling
.slider {
	height: 160px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 100%;

	&::before,
	&::after {
		content: '';
		height: 150px;
		position: absolute;
		width: 150px;
		z-index: 2;
	}

	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(130px * 30);
	}

	.slide {
		height: 45px;
		width: 130px;
	}
}
</style>
