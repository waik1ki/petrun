export default {
	computed: {
		responsiveWidth() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return '100%';
				case 'sm':
					return '100%';
				case 'md':
					return '100%';
				case 'lg':
					return '1100px';
				case 'xl':
					return '1100px';
				default:
					return '1100px';
			}
		},
	},
};
