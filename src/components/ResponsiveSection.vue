<template>
	<div
		:style="{ width: responsiveWidth }"
		:class="
			!this.$vuetify.breakpoint.mdAndDown
				? `mx-auto ${propsClass}`
				: `mx-auto ${propsClass}`
		"
	>
		<slot></slot>
	</div>
</template>

<script>
import ResponsiveWidth from '@/mixins/ResponsiveWitdh';
export default {
	mixins: [ResponsiveWidth],
	props: ['propsClass'],
};
</script>

<style></style>
