<template>
	<div>
		<Banner />
		<Advideo />
		<Challenge />
		<Community />
		<PetMall />
		<Contact />
	</div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Advideo from '@/components/Advideo.vue';
import Challenge from '@/components/Challenge.vue';
import Community from '@/components/Community.vue';
import PetMall from '@/components/PetMall.vue';
import Contact from '@/components/Contact.vue';

export default {
	components: { Banner, Advideo, Challenge, Community, PetMall, Contact },
};
</script>
