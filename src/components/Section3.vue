<script>
import gsap from "gsap";
export default {
	name: "Section3",

	mounted() {
		const cards = gsap.utils.toArray("#project-card");
		cards.forEach((el) => {
			gsap.fromTo(
				el,
				{
					opacity: 0,
					x: -200,
				},
				{
					opacity: 1,
					x: 0,
					scrollTrigger: {
						trigger: el,
						toggleActions: "restart play restart play",
					},
				},
			);
		});
	},
};
</script>

<template>
	<div class="section-3">
		<b>Our projects</b>
		<p>
			are very different in terms of priority, scale and complexity of
			implementation
		</p>
		<div>
			<div class="card card-1" id="project-card">
				<div class="card-container">
					<b>Emergency Aid. WAR 2022.</b>
					<p>
						providing food and medicine to the shelters and animals which lost
						their homes and families due to the war
					</p>
				</div>
			</div>
			<div class="card card-2" id="project-card">
				<div class="card-container">
					<b>Non-commercial feed line.</b>
					<p>
						construction of industrial production base where food for shelters
						will be produced on a free basis
					</p>
				</div>
			</div>
			<div class="card card-3" id="project-card">
				<div class="card-container">
					<b>Education and Control</b>
					<p>
						lectures on communication, organisation and coordination of
						processes, control over the use of aid
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.section-3 {
	background-color: #3e88ff;
	padding: 10%;
	letter-spacing: 2px;
	line-height: 3.1em;
	color: white;
	p {
		margin-top: 0.5em;
		font-size: 2.5vw;
		margin-bottom: 1em;
	}
	b {
		font-size: 4vw;
	}
	div {
		b {
			font-size: 3vw;
		}

		.card-1 {
			background-color: black;
		}
		.card-2 {
			background-color: green;
		}
		.card-3 {
			background-color: #ff97d0;
		}
		.card {
			margin-bottom: 2rem;
			.card-container {
				padding: 2em;
				width: 100%;
				border: 5px solid white;
				transition: transform 0.12s ease-out;
			}

			.card-container:hover {
				transform: translate(20px, -20px);
			}
		}
	}
}
</style>
