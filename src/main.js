import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import AOS from 'aos';
import smoothscroll from 'smoothscroll-polyfill';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
smoothscroll.polyfill();

new Vue({
	created() {
		AOS.init();
	},
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
