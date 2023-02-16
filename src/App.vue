<template>
	<v-app>
		<AppHeader />
		<v-main>
			<router-view />
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import Footer from '@/components/common/Footer.vue';

export default {
	components: {
		AppHeader,
		Footer,
	},
};
</script>

<style>
@import './css/unify.css';

html {
	scroll-behavior: smooth;
}
</style>
