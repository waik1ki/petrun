<template>
	<div style="height: 25px; width: 25px">
		<v-img
			style="cursor: pointer"
			width="100%"
			height="100%"
			contain
			:src="iconSrc"
			@click="openToLink(link)"
		></v-img>
	</div>
</template>

<script>
export default {
	props: ['iconSrc', 'link'],
	methods: {
		openToLink(link) {
			window.open(link);
		},
	},
};
</script>

<style></style>
