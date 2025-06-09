<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
	name: "Section5",
	data() {
		return {
			imgUrls: {},
			teams: [
				{
					name: "Daryna Deriy",
					title: "Chairman of the Board",
					filename: import.meta.glob("../assets/images/Teams/DarynaDeriy.png", {
						import: "default",
						eager: true,
					}),
				},
				{
					name: "Polina Snisarenko-Kulchytska",
					title: "Curator of the Foundation",
					filename: import.meta.glob(
						"../assets/images/Teams/PolinaSnisarenkoKulchytska.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Bohdan Kulchytsky",
					title: "Executive Manager",
					filename: import.meta.glob(
						"../assets/images/Teams/BohdanKulchytsky.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Mykhaylo Deriy",
					title: "Operation Manager",
					filename: import.meta.glob(
						"../assets/images/Teams/MykhayloDeriy.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Ksenia Nikishina",
					title: "Office manager",
					filename: import.meta.glob(
						"../assets/images/Teams/KseniaNikishina.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Anna Andriychuk",
					title: "SMM-manager",
					filename: import.meta.glob(
						"../assets/images/Teams/AnnaAndriychuk.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Anastasia Kovalchuk",
					title: "Director",
					filename: import.meta.glob(
						"../assets/images/Teams/AnastasiaKovalchuk.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Basil Gloo",
					title: "Web Developer",
					filename: import.meta.glob("../assets/images/Teams/BasilGloo.png", {
						import: "default",
						eager: true,
					}),
				},
				{
					name: "Lina Yakobchuk",
					title: "Designer",
					filename: import.meta.glob(
						"../assets/images/Teams/LinaYakobchuk.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Anastasia Yevchenko",
					title: "Translator",
					filename: import.meta.glob(
						"../assets/images/Teams/AnastasiaYevchenko.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Office Manager", // Assuming an image exists for this specific title
					title: "open vacancy",
					filename: import.meta.glob(
						"../assets/images/Teams/OfficeManager.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "SEO specialist", // Assuming an image exists for this specific title
					title: "open vacancy",
					filename: import.meta.glob(
						"../assets/images/Teams/SEOSpecialist.png",
						{
							import: "default",
							eager: true,
						},
					),
				},
			],
		};
	},

	mounted() {
		const cards = gsap.utils.toArray("#team-card");
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
	<div class="section-5">
		<b>Our team</b>
		<p>
			consists of completely different people who are united by a common desire
			- to help
		</p>
		<div class="teams">
			<div class="team" v-for="team in teams" :key="team.name" id="team-card">
				<div class="container">
					<img alt="" :src="team.filename[Object.keys(team.filename)[0]]" />
					<p class="name">{{ team.name }}</p>
					<p class="title">{{ team.title }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.section-5 {
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

	.teams {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 40px;
		.team {
			background-color: #fcf944;
			align-self: stretch;

			.container {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				border: 3px solid black;
				text-align: center;
				padding: 2em;
				transition: transform 0.12s ease-out;

				img {
					width: 100%;
					filter: grayscale(100%);
				}
				.name {
					letter-spacing: 0em;
					line-height: 1.6em;

					font-size: 1.5vw;
				}

				.title {
					letter-spacing: 0em;
					line-height: 1.6em;

					font-size: 1.2vw;
				}
			}

			.container:hover {
				transform: scale(0.9);
			}
		}
	}
}
</style>
