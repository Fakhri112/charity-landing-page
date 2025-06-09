<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
	name: "Section7",
	data() {
		return {
			partners: [
				import.meta.glob("../assets/images/Partners/1.png", {
					import: "default",
					eager: true,
				}),
				import.meta.glob("../assets/images/Partners/2.png", {
					import: "default",
					eager: true,
				}),
				import.meta.glob("../assets/images/Partners/3.png", {
					import: "default",
					eager: true,
				}),
				import.meta.glob("../assets/images/Partners/4.png", {
					import: "default",
					eager: true,
				}),
				import.meta.glob("../assets/images/Partners/5.png", {
					import: "default",
					eager: true,
				}),
				import.meta.glob("../assets/images/Partners/6.png", {
					import: "default",
					eager: true,
				}),
			],
		};
	},

	mounted() {
		const cards = gsap.utils.toArray("#partner");
		cards.forEach((el) => {
			gsap.set(el, {
				opacity: 0,
			}),
				ScrollTrigger.create({
					start: "top bottom",

					trigger: el,
					onLeaveBack: () =>
						gsap.to(el, {
							opacity: 0,
							y: 200,
						}),
					onEnterBack: () =>
						gsap.to(el, {
							opacity: 1,
							y: 0,
						}),
					onLeave: () =>
						gsap.to(el, {
							opacity: 0,
							y: -200,
						}),
					onEnter: () => {
						gsap.from(el, {
							opacity: 0,
							y: -200,
						}),
							gsap.to(el, {
								opacity: 1,
								y: 0,
							});
					},
				});
		});
	},
};
</script>

<template>
	<div class="section-7">
		<b>Our partners</b>
		<p>are take care of our fund and help us with many questions</p>
		<div class="partners">
			<div
				v-for="(partner, key) in partners"
				:key="key"
				class="container"
				id="partner">
				<img :src="partner[Object.keys(partner)[0]]" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.section-7 {
	padding: 10%;
	letter-spacing: 2px;
	line-height: 3.9em;

	p {
		margin-top: 0.5em;
		font-size: 2.5vw;
		margin-bottom: 1em;
	}
	b {
		font-size: 4vw;
	}

	.partners {
		display: flex;
		flex-flow: wrap;
		gap: 20px;
		.container {
			align-items: center;
			padding: 1.1em;
			width: 23%;
			display: grid;
			place-items: center;
			img {
				width: 100%;

				filter: grayscale(100%);
			}
		}
	}
}
</style>
