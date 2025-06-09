<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
	name: "Section6",
	data() {
		return {
			citizens: [
				{
					name: "Oleksiy Tritenko",
					title: "theater and film actor",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/OleksiyTritenko.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Stanislav Boklan",
					title: "People's Artist of Ukraine",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/StanislavBoklan.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Alexander Rudinsky",
					title: "theater and film actor",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/AlexanderRudinsky.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Oksana Zhdanova",
					title: "theater and film actress",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/OksanaZhdanova.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Natalka Denisenko",
					title: "theater and film actress",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/NatalkaDenisenko.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Maksym Samchyk",
					title: "theater and film actor",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/MaksymSamchyk.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Kateryna Vyshneva",
					title: "theater and film actress",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/KaterynaVyshneva.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Irma Vitovska",
					title: "Honored Actress of Ukraine",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/IrmaVitovska.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Igor Portyanko",
					title: "actor of theater and cinema",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/IgorPortyanko.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Dmytro Surzhikov",
					title: "Honored Artist of Ukraine",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/DmytroSurzhikov.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Daria Barihashvili",
					title: "theater and film actress",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/DariaBarihashvili.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Vera Kobzar",
					title: "theater and film actress",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/VeraKobzar.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Andriy Fedynchyk",
					title: "theater and film actor",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/AndriyFedynchyk.jpg",
						{
							import: "default",
							eager: true,
						},
					),
				},
				{
					name: "Anastasia Nesterenko",
					title: "theater and film actress",
					filename: import.meta.glob(
						"../assets/images/ActiveCitizens/AnastasiaNesterenko.jpg",
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
		const cards = gsap.utils.toArray("#citizen-card");
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
	<div class="section-6">
		<b> Socially active citizens</b>
		<p>support us</p>
		<div class="citizens">
			<div
				class="container"
				v-for="citizen in citizens"
				:key="citizen.name"
				id="citizen-card">
				<img :src="citizen.filename[Object.keys(citizen.filename)[0]]" alt="" />
				<p class="name">{{ citizen.name }}</p>
				<p class="title">{{ citizen.title }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.section-6 {
	background-color: #ff97d0;
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

	.citizens {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 40px;

		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

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
	}
}
</style>
