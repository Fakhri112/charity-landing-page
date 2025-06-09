<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
	name: "Section4",
	mounted() {
		const cards = gsap.utils.toArray("#shelter-card");
		setTimeout(() => {
			cards.forEach((el) => {
				ScrollTrigger.create({
					trigger: el,
					start: "top bottom",

					onLeaveBack: () =>
						gsap.to(el, {
							opacity: 0,
							y: -200,
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
			gsap.set(".apply-button", {
				opacity: 0,
				x: -200,
			});
			ScrollTrigger.create({
				trigger: ".apply-button",
				start: "top bottom",

				onLeaveBack: () =>
					gsap.to(".apply-button", {
						opacity: 0,
						x: -200,
					}),
				onEnterBack: () =>
					gsap.to(".apply-button", {
						opacity: 1,
						x: 0,
					}),
				onLeave: () =>
					gsap.to(".apply-button", {
						opacity: 0,
						x: -200,
					}),
				onEnter: () =>
					gsap.to(".apply-button", {
						opacity: 1,
						x: 0,
					}),
			});
		}, 400);
	},
	data() {
		return {
			volunteers: [
				"Shelter of Victoria Bulbyna",
				"City of faithful hearts",
				"Shelter of Natalia Tymoshenko",
				"Shelter of Jeanne Sass",
				"Shelter of Victoria Bondarenko",
				"Sterilization center",
				"Zoo chance",
				"Save lives",
				"City Center for the Treatment of Animals",
				"Society for the Protection of Animals in Sumy",
				"The right to life",
				"4 paws",
				"The kingdom of cats",
				"Zvir",
				"Mercy",
				"Happy dog",
				"Give me a paw, friend",
				"Friend",
				"Hope",
				"We are for the right to life",
				"Planeta",
				"Second Life",
				"Happy shore",
				"Retrieverteam",
				"Shelter of Irina Dobrolyubova",
				"Matilda",
				"Life",
				"Second chance",
				"SOS",
				"Best friends",
			],
		};
	},
};
</script>

<template>
	<div class="section-4">
		<b>We want to help</b>
		<p>
			homeless packs, volunteers, guardians, overstayers, shelters and other
			organisations
		</p>
		<div class="cards">
			<a
				href=""
				class="card"
				v-for="volunteer in volunteers"
				:key="volunteer"
				id="shelter-card">
				<div class="container">
					<p>{{ volunteer }}</p>
				</div>
			</a>
		</div>
		<a class="apply-button" href=""
			><p>apply for help</p>
			<img src="../assets/images/arrow.png" alt=""
		/></a>
	</div>
</template>

<style lang="scss">
.section-4 {
	background-color: #fcf944;
	padding: 10%;
	letter-spacing: 2px;
	line-height: 3.1em;
	p {
		margin-top: 0.5em;
		font-size: 2.5vw;
		margin-bottom: 1em;
	}
	b {
		font-size: 4vw;
	}
	.cards {
		gap: 2.5vw;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		.card {
			background-color: white;
			text-decoration: none;
			height: 18vh;
			.container {
				width: 100%;
				height: 100%;
				padding: 0px 2rem;
				display: grid;
				text-align: center;
				transition: transform 0.12s ease-out;
				border: 3px solid black;
				color: black;

				p {
					letter-spacing: 0em;
					line-height: 1.6em;

					font-size: 1.5vw;
				}
			}

			.container:hover {
				transform: translate(20px, -10px);
			}
		}
	}
	.apply-button {
		width: 23vw;
		margin-top: 5em;

		margin-bottom: 1em;
		display: flex;
		background-color: #ff97d0;
		text-decoration: none;
		align-items: center;
		gap: 20px;
		border: 3px solid black;
		transition: gap 0.12s ease-out;

		img {
			transform: rotate(180deg);
			width: 15%;
		}
		p {
			font-size: 2vw;
			margin-top: 0em;
			margin-bottom: 0em;
			font-weight: 700;
			color: black;
			padding: 0.2em;
			padding-left: 0.5em;
		}
	}

	.apply-button:hover {
		gap: 30px;
	}
}
</style>
