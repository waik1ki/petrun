<template>
	<interaction-area :categoryId="'petmall'">
		<responsive-section>
			<SectionCategory
				:title="'펫몰'"
				:iconSrc="require('../assets/icon/Bag.png')"
			/>
			<div
				:class="this.$vuetify.breakpoint.mdAndDown ? 'text-center mb-10' : ''"
			>
				<p class="sectionTitle">다양한 경품 구매 및 응모</p>
				<p class="sectionSubTitle">
					산책 중 획득한 댕굴캐시로
					<br v-if="this.$vuetify.breakpoint.mdAndDown" />
					다양한 경품 구매 및 응모
				</p>
			</div>
		</responsive-section>
		<div
			v-if="!this.$vuetify.breakpoint.mdAndDown"
			style="width: 100%; position: relative"
		>
			<div
				v-if="imageLoaded"
				style="
					width: 100%;
					height: 300px;
					background-color: #f5f6f8;
					top: 40%;
					right: 0;
					position: absolute;
				"
			></div>
			<v-img
				width="995"
				class="mx-auto"
				contain
				src="@/assets/petmall/Petmall_Back.png"
				@load="imageLoaded = true"
			></v-img>
		</div>
		<!-- 모바일, 태블릿 -->
		<div v-else style="width: 100%">
			<v-img
				width="100%"
				height="100%"
				contain
				src="@/assets/petmall/M_Petmall_Back.png"
			></v-img>
		</div>
	</interaction-area>
</template>

<script>
import SectionCategory from '@/components/SectionCategory.vue';
import InteractionArea from './InteractionArea.vue';
import ResponsiveSection from './ResponsiveSection.vue';
export default {
	components: { SectionCategory, InteractionArea, ResponsiveSection },
	data() {
		return {
			imageLoaded: false,
		};
	},
};
</script>
