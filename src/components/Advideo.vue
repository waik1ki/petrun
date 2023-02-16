<template>
	<div class="mt-16 py-16 pa-5" style="position: relative">
		<v-img
			src="@/assets/video/광고영상_캐릭터.png"
			width="120"
			style="top: 0; left: 60%; position: absolute; z-index: 9999"
		></v-img>
		<v-card
			color="#7EA5D9"
			class="mx-auto pa-1 d-flex"
			style="z-index: 999; width: 830px"
		>
			<video
				src="@/assets/video/광고영상.mp4"
				autoplay
				playsinline
				loop
				muted
				width="100%"
				height="100%"
			></video>
		</v-card>
		<div
			v-if="!this.$vuetify.breakpoint.mdAndDown"
			style="
				width: 100%;
				height: 280px;
				background-color: #f4f6f8;
				bottom: -5%;
				left: 0;
				position: absolute;
			"
		></div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
