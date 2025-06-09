<script>
import AboutMe from "./pages/about-me.vue";

export default {
	name: "App",
	components: {
		AboutMe,
	},
};
</script>

<template>
	<div id="scroll-container">
		<AboutMe />
	</div>
</template>

<style lang="scss">
@import "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap";

* {
	font-family: "DM Sans", sans-serif;
	margin: 0;
	box-sizing: border-box;
}
</style>
