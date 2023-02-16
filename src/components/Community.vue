<template>
	<interaction-area :categoryId="'community'">
		<responsive-section>
			<SectionCategory
				:title="'커뮤니티'"
				:iconSrc="require('../assets/icon/Users.png')"
			/>
			<div
				:class="this.$vuetify.breakpoint.mdAndDown ? 'text-center mb-10' : ''"
			>
				<p class="sectionTitle">동네 반려인들과의 소통, 정보 공유</p>
				<p class="sectionSubTitle">
					펫런 커뮤니티에서 이웃들과 활발하게 소통해보세요!
				</p>
			</div>
		</responsive-section>
		<div
			v-if="!this.$vuetify.breakpoint.mdAndDown"
			style="width: 100%; position: relative"
		>
			<CharacterSlider
				style="width: 50%; bottom: 20px; left: 0; position: absolute"
				v-if="imageLoaded"
			/>
			<div
				v-if="imageLoaded"
				style="
					width: 45%;
					height: 230px;
					background-color: #f5f6f8;
					top: 15%;
					right: 0;
					position: absolute;
				"
			></div>
			<v-img
				width="960"
				class="mx-auto"
				contain
				src="@/assets/community/Community_Back.png"
				@load="imageLoaded = true"
			></v-img>
		</div>
		<!-- 모바일, 태블릿 -->
		<div v-else class="px-6" style="width: 100%; position: relative">
			<div
				v-if="imageLoaded"
				style="
					width: 100%;
					height: 200px;
					background-color: #f5f6f8;
					bottom: 15%;
					left: 0;
					position: absolute;
				"
			></div>
			<CharacterSlider
				v-if="imageLoaded"
				style="position: absolute; top: 15%; left: 0"
			/>
			<v-img
				width="100%"
				height="100%"
				contain
				src="@/assets/community/M_Community_Back.png"
				@load="imageLoaded = true"
			></v-img>
		</div>
	</interaction-area>
</template>

<script>
import SectionCategory from '@/components/SectionCategory.vue';
import InteractionArea from './InteractionArea.vue';
import CharacterSlider from './slider/CharacterSlider.vue';
import ResponsiveSection from './ResponsiveSection.vue';
export default {
	components: {
		SectionCategory,
		InteractionArea,
		CharacterSlider,
		ResponsiveSection,
	},
	data() {
		return {
			imageLoaded: false,
		};
	},
};
</script>
