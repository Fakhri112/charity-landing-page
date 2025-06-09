<script>
import gsap from "gsap";

export default {
	name: "Section2",
	mounted() {
		gsap.fromTo(
			".youtube-video",
			{
				opacity: 0,
				x: -200,
			},
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: ".youtube-video",
					toggleActions: "restart play restart play",
				},
			},
		);
	},
};
</script>
<template>
	<div class="section-2">
		<div>
			<b>We Are</b>
			<p>
				team of like-minded people, socially active companies, media
				personalities, volunteers who help low-income shelters and foster carers
				to support homeless animals.
			</p>
		</div>
		<div>
			<b>Our Primary Goal</b>
			<p>
				is to provide animals with the most necessary things - food, medicine,
				and urgent needs for the livelihood of shelters. We believe in our power
				and the power of conscious citizens who care about the environment and
				their health, who understand the importance of helping each other,
				especially our little friends. Growth begins with your care for your
				loved ones. Animals are one of the closest creatures to humans who
				remain with us throughout our lives. We all know the healing power of
				warmth, grace, and big loving eyes.
			</p>
			<blockquote class="blockquote">
				"Animals need to have friends. Just like humans."
				<br />
				- James Herriot, All Creatures Great and Small
				<br />
			</blockquote>
			<p>
				Who else if not we should support our younger brothers, especially in
				difficult times? Let's be friends!
			</p>
			<div class="youtube-video">
				<div>
					<iframe
						id="player"
						frameborder="0"
						allowfullscreen=""
						referrerpolicy="strict-origin-when-cross-origin"
						title="Help the animals of Ukraine/ Допоможи тваринам України"
						width="640"
						height="360"
						src="https://www.youtube.com/embed/5Wk1rp99B7o?wmode=opaque&amp;"></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.section-2 {
	padding: 10%;
	letter-spacing: 2px;
	line-height: 3.5vw;

	b {
		font-size: 4vw;
	}

	p {
		margin-top: 0.5em;
		font-size: 2.5vw;
		margin-bottom: 1em;
	}
}

.blockquote {
	box-sizing: border-box;
	border-left: 5px solid #e2e2e2;
	margin: 0 0 10px;
	color: black;

	font-size: 2.5vw;
	line-height: 1.5em;

	border-left-width: 0.5rem;
	border-left-color: #ff97d0;
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 4rem;
	padding: 1rem;
	font-style: italic;
}

.youtube-video {
	height: 40vw;

	padding: 0;
	display: flex;
	justify-content: center;
	div {
		width: 90%;
		height: 100%;
		iframe {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
