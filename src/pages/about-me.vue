<script>
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";
import Section3 from "../components/Section3.vue";
import Section4 from "../components/Section4.vue";
import Section5 from "../components/Section5.vue";
import Section6 from "../components/Section6.vue";
import Section7 from "../components/Section7.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "AboutMe",
	components: {
		Footer,
		Section7,
		Section6,
		Section5,
		Section4,
		Section3,
		Section2,
		Section1,
	},
};
</script>

<template>
	<div id="scroll-container">
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section5 />
		<Section6 />
		<Section7 />
		<Footer />
	</div>
</template>
