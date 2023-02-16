<template>
	<div class="slider my-5">
		<div class="slide-track">
			<div class="slide" v-for="i in icons" :key="i.index">
				<img :src="i" height="45" width="45" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				require('@/assets/slider/weather/Cloud.png'),
				require('@/assets/slider/weather/CloudSun.png'),
				require('@/assets/slider/weather/Night.png'),
				require('@/assets/slider/weather/Rain.png'),
				require('@/assets/slider/weather/Snowflake.png'),
				require('@/assets/slider/weather/Sun.png'),
				require('@/assets/slider/weather/Wind.png'),
				require('@/assets/slider/weather/Cloud.png'),
				require('@/assets/slider/weather/CloudSun.png'),
				require('@/assets/slider/weather/Night.png'),
				require('@/assets/slider/weather/Rain.png'),
				require('@/assets/slider/weather/Snowflake.png'),
				require('@/assets/slider/weather/Sun.png'),
				require('@/assets/slider/weather/Wind.png'),
				require('@/assets/slider/weather/Cloud.png'),
				require('@/assets/slider/weather/CloudSun.png'),
				require('@/assets/slider/weather/Night.png'),
				require('@/assets/slider/weather/Rain.png'),
				require('@/assets/slider/weather/Snowflake.png'),
				require('@/assets/slider/weather/Sun.png'),
				require('@/assets/slider/weather/Wind.png'),
			],
		};
	},
};
</script>

<style lang="scss" scoped>
$animationSpeed: 30s;
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
		transform: translateX(calc(-70px * 7));
	}
}

// Styling
.slider {
	height: 45px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 100%;

	&::before,
	&::after {
		content: '';
		height: 100px;
		position: absolute;
		width: 100px;
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
		width: calc(70px * 21);
	}

	.slide {
		height: 45px;
		width: 70px;
	}
}
</style>
