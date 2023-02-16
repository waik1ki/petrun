<template>
	<div>
		<div :id="categoryId" style="height: 60px"></div>
		<div :class="responsiveClass" data-aos="fade-up" data-aos-duration="800">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ['categoryId'],
	computed: {
		responsiveClass() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 'd-flex flex-column align-center py-10';
				case 'sm':
					return 'd-flex flex-column align-center py-10';
				case 'md':
					return 'd-flex flex-column align-center py-10';
				case 'lg':
					return 'mx-auto py-13';
				case 'xl':
					return 'mx-auto py-13';
				default:
					return 'mx-auto py-13';
			}
		},
	},
};
</script>
