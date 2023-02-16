<template>
	<interaction-area :categoryId="'challenge'">
		<responsive-section>
			<SectionCategory
				:title="'챌린지'"
				:iconSrc="require('../assets/icon/MapTrifold.png')"
			/>
			<div :class="this.$vuetify.breakpoint.mdAndDown ? 'text-center' : ''">
				<p class="sectionTitle">언제나 즐거운 산책</p>
				<p class="sectionSubTitle">
					데일리 미션 수행, 펫런박스 찾기,
					<br v-if="this.$vuetify.breakpoint.mdAndDown" />
					산책 중인 주변 친구 찾기 등
					<br v-if="this.$vuetify.breakpoint.mdAndDown" />
					산책 중 다양한 컨텐츠를 즐겨보세요.
				</p>
			</div>
		</responsive-section>
		<div
			v-if="!this.$vuetify.breakpoint.mdAndDown"
			style="width: 100%; position: relative"
			class="mt-16"
		>
			<WeatherSlider
				v-if="imageLoaded"
				style="width: 27%; top: 3%; left: 0; position: absolute"
			/>
			<v-img
				width="1150"
				class="mx-auto"
				contain
				src="@/assets/challenge/Challenge_Back.png"
				@load="imageLoaded = true"
			></v-img>
		</div>
		<!-- 모바일, 태블릿 -->
		<div v-else style="width: 100%">
			<WeatherSlider class="mb-16" />
			<div style="width: 100%; position: relative" class="px-6">
				<div
					v-if="imageLoaded"
					style="
						width: 100%;
						height: 200px;
						background-color: #f5f6f8;
						top: 15%;
						left: 0;
						position: absolute;
					"
				></div>
				<v-img
					width="100%"
					height="100%"
					contain
					src="@/assets/challenge/M_Challenge_Back1.png"
					@load="imageLoaded = true"
				></v-img>
			</div>
			<div class="text-center my-10">
				<p class="sectionTitle">산책 기록 캘린더</p>
				<p class="sectionSubTitle">
					산책 거리, 시간, 동선, 산책 추억이 담긴 사진 등<br />
					산책 관련 정보를 기간 별로 한눈에 파악해보세요.
				</p>
			</div>
			<div style="width: 100%; position: relative">
				<div
					v-if="imageLoaded"
					style="
						width: 100%;
						height: 350px;
						background-color: #f5f6f8;
						top: 15%;
						left: 0;
						position: absolute;
					"
				></div>
				<v-img
					width="100%"
					height="100%"
					contain
					src="@/assets/challenge/M_Challenge_Back2.png"
					@load="imageLoaded = true"
				></v-img>
			</div>
		</div>
	</interaction-area>
</template>

<script>
import SectionCategory from '@/components/SectionCategory.vue';
import InteractionArea from './InteractionArea.vue';
import WeatherSlider from './slider/WeatherSlider.vue';
import ResponsiveSection from './ResponsiveSection.vue';
export default {
	components: {
		SectionCategory,
		InteractionArea,
		WeatherSlider,
		ResponsiveSection,
	},
	data() {
		return {
			imageLoaded: false,
		};
	},
};
</script>
