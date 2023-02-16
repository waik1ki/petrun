<template>
	<v-row no-gutters class="pa-7 footerBackground">
		<div style="width: 1100px" class="mx-auto my-auto">
			<v-col cols="12" class="pa-0">
				<div class="d-flex justify-space-between">
					<div style="height: 30px; width: 55px" class="mb-4">
						<v-img
							width="100%"
							height="100%"
							contain
							src="@/assets/petrun/title.png"
						></v-img>
					</div>
					<div
						v-if="this.$vuetify.breakpoint.mdAndDown"
						class="d-flex justify-space-between"
						style="width: 160px"
					>
						<SocialMediaButton
							v-for="i in socialMedia"
							:key="i.index"
							:iconSrc="i.src"
							:link="i.link"
						/>
					</div>
				</div>
			</v-col>
			<v-col cols="12" class="pa-0">
				<div class="d-flex align-end justify-space-between">
					<div style="color: white; font-size: 15px">
						<p class="mb-2">
							<span style="font-weight: bold" class="mr-3">문의</span>
							cs@petrun.kr
						</p>
						<p class="mb-2">
							<span style="font-weight: bold" class="mr-3">(주)펫런</span>
							<br v-if="this.$vuetify.breakpoint.mdAndDown" />서울특별시 성북구
							개운사길 75-6 스타트업하우징 307, 308, 407호
						</p>
						<p class="mb-2">
							<span style="font-weight: bold">사업자 등록번호</span>
							699-81-02414
						</p>
						<div>
							<a
								href="https://petrun.kr/policy/privacy.html"
								target="_blank"
								class="mr-2 policy"
								>개인정보 처리방침</a
							>
							<a
								href="https://petrun.kr/policy/terms.html"
								target="_blank"
								class="policy"
								>서비스 이용약관</a
							>
						</div>
					</div>
					<div
						v-if="!this.$vuetify.breakpoint.mdAndDown"
						class="d-flex justify-space-between"
						style="width: 160px"
					>
						<SocialMediaButton
							v-for="i in socialMedia"
							:key="i.index"
							:iconSrc="i.src"
							:link="i.link"
						/>
					</div>
				</div>
			</v-col>
		</div>
	</v-row>
</template>

<script>
import SocialMediaButton from '../SocialMediaButton.vue';
export default {
	components: { SocialMediaButton },
	data() {
		return {
			socialMedia: [
				{
					src: require('@/assets/icon/Instagram.png'),
					link: 'https://instagram.com/petrun_official',
				},
				{
					src: require('@/assets/icon/TikTok.png'),
					link: 'https://tiktok.com/@petrun_',
				},
				{
					src: require('@/assets/icon/YouTube.png'),
					link: 'https://youtube.com/',
				},
				{
					src: require('@/assets/icon/Notion.png'),
					link: 'https://notion.com/',
				},
			],
		};
	},
	methods: {
		openToLink(link) {
			window.open(link);
		},
	},
};
</script>
