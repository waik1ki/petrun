<template>
	<v-img
		src="@/assets/petrun/banner_back.png"
		height="435"
		width="100%"
		style="margin-top: 90px"
	>
		<responsive-section
			:propsClass="
				!this.$vuetify.breakpoint.mdAndDown
					? 'd-flex flex-column align-space-between justify-space-between mx-auto py-16'
					: 'd-flex flex-column align-center justify-space-between text-center mx-auto py-10'
			"
			style="height: 100%"
		>
			<div>
				<p class="mb-2 bannerTitle petrunColor">매일매일 즐거운 동네 산책</p>
				<p>반려인을 위한 소셜 엔터 플랫폼, 펫런</p>
			</div>
			<div class="d-flex justify-end">
				<div :style="responsiveClass" class="mr-3">
					<v-img
						width="100%"
						height="100%"
						contain
						src="../assets/googleplay.png"
						@click="
							openToLink(
								'https://play.google.com/store/apps/details?id=com.petrun.petrun_challenge_login_mvp',
							)
						"
					></v-img>
				</div>
				<div :style="responsiveClass">
					<v-img
						width="100%"
						height="100%"
						contain
						src="../assets/appstore.png"
						@click="
							openToLink(
								'https://apps.apple.com/kr/app/%ED%8E%AB%EB%9F%B0/id1631255921',
							)
						"
					></v-img>
				</div>
			</div>
		</responsive-section>
	</v-img>
</template>

<script>
import ResponsiveSection from '@/components/ResponsiveSection.vue';
export default {
	components: { ResponsiveSection },
	methods: {
		openToLink(link) {
			window.open(link);
		},
	},
	computed: {
		responsiveClass() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 'height: 50px; width: 160px; cursor: pointer';
				case 'sm':
					return 'height: 50px; width: 160px; cursor: pointer';
				case 'md':
					return 'height: 50px; width: 160px; cursor: pointer';
				case 'lg':
					return 'height: 50px; width: 130px; cursor: pointer';
				case 'xl':
					return 'height: 50px; width: 130px; cursor: pointer';
				default:
					return 'height: 50px; width: 130px; cursor: pointer';
			}
		},
	},
};
</script>
