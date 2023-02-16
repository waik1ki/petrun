<template>
	<div
		:class="
			this.$vuetify.breakpoint.mdAndDown
				? 'd-flex align-center justify-center'
				: 'd-flex align-center'
		"
	>
		<div class="mr-2" style="height: 35px; width: 35px">
			<v-img width="100%" height="100%" contain :src="iconSrc"></v-img>
		</div>
		<p class="sectionCategoryTitle">{{ title }}</p>
	</div>
</template>

<script>
export default {
	props: ['title', 'iconSrc'],
};
</script>
