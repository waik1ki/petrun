<template>
	<v-app-bar
		height="90"
		fixed
		color="white"
		elevate-on-scroll
		style="z-index: 99999"
	>
		<responsive-section>
			<div class="d-flex justify-space-between align-center">
				<div
					:style="
						!this.$vuetify.breakpoint.mdAndDown
							? 'height: 45px; width: 130px; cursor: pointer'
							: 'height: 45px; width: 100px; cursor: pointer'
					"
					@click="goToTop"
				>
					<v-img
						width="100%"
						height="100%"
						contain
						src="@/assets/petrun/logo_title.png"
					></v-img>
				</div>
				<div class="d-flex justify-space-between">
					<div class="text-center mr-5">
						<v-menu
							v-if="!this.$vuetify.breakpoint.mdAndDown"
							open-on-hover
							offset-y
							rounded="lg"
						>
							<template v-slot:activator="{ on, attrs }">
								<span
									style="font-family: 'NanumSquareRoundB', serif"
									class="petrunColor"
									v-bind="attrs"
									v-on="on"
								>
									서비스 소개
								</span>
							</template>
							<v-list>
								<v-list-item
									style="min-height: 40px"
									v-for="(item, index) in menu"
									:key="index"
									class="menuItem"
									:href="item.href"
								>
									<a>{{ item.name }}</a>
								</v-list-item>
							</v-list>
						</v-menu>
						<v-menu v-else offset-y rounded="lg">
							<template v-slot:activator="{ on, attrs }">
								<span class="petrunColor headerTitle" v-bind="attrs" v-on="on">
									서비스 소개
								</span>
							</template>
							<v-list>
								<v-list-item
									style="min-height: 40px"
									v-for="(item, index) in menu"
									:key="index"
									class="menuItem"
									:href="item.href"
								>
									<a>{{ item.name }}</a>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
					<div class="text-center">
						<a class="mr-5 headerTitle" href="#contact" style="color: grey"
							>문의하기</a
						>
					</div>
					<div class="text-center">
						<a
							href="https://www.notion.so/Team-PetRun-e58b8ad1b20e451c950c99678a275aa7"
							target="_blank"
							class="headerTitle"
							style="color: grey"
							>팀소개</a
						>
					</div>
				</div>
			</div>
		</responsive-section>
	</v-app-bar>
</template>

<script>
import ResponsiveSection from '@/components/ResponsiveSection.vue';
export default {
	components: { ResponsiveSection },
	data() {
		return {
			menu: [
				{ name: '챌린지', href: '#challenge' },
				{ name: '커뮤니티', href: '#community' },
				{ name: '펫몰', href: '#petmall' },
			],
		};
	},
	methods: {
		goToTop() {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			history.pushState(null, null, '/');
		},
	},
};
</script>

<style scoped>
a {
	text-decoration: none;
	color: grey !important;
}
.header-style {
	width: 100%;
	position: fixed;
	z-index: 99999;
	background-color: white;
}
.menuItem:hover {
	background-color: #f5f6f8;
}
.menuItem:hover a {
	color: #85a5d5 !important;
}

@import '../../css/vuetify.css';
</style>
