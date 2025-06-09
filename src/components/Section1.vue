<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
	name: "Section1",
	mounted() {
		gsap.fromTo(
			".logo",
			{
				opacity: 0,
				x: -100,
			},
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: ".logo",
					toggleActions: "restart play restart play",
				},
			},
		);
		gsap.fromTo(
			".headline",
			{
				opacity: 0,
				x: 100,
			},
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: ".headline",
					toggleActions: "restart play restart play",
				},
			},
		);
		gsap.fromTo(
			".wrapper-social-media",
			{
				opacity: 0,
				y: -100,
			},
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: ".wrapper-social-media",
					toggleActions: "restart play restart play",
				},
			},
		);
	},
};
</script>
<template>
	<a href="" class="donate">
		<div class="container">Donate</div>
	</a>
	<div class="section-1">
		<div class="container">
			<div class="wrapper-logo">
				<div class="logo">
					<img src="../assets/images/Animals/cat.svg" alt="" class="logo" />
				</div>
				<p class="headline">Innovative Solutions for Animals</p>
			</div>
			<div class="wrapper-social-media">
				<p>charity organization</p>
				<div>
					<a href=""
						><img src="../assets/images/SocialMedia/youtube.svg" alt=""
					/></a>

					<a href=""
						><img src="../assets/images/SocialMedia/instagram.svg"
					/></a>
					<a href=""><img src="../assets/images/SocialMedia/fb.svg" /></a>
					<a href=""><img src="../assets/images/SocialMedia/patreon.svg" /></a>
					<a href=""><img src="../assets/images/SocialMedia/telegram.svg" /></a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.section-1 {
	margin: 0;
	width: 100%;
	height: 100vh;
	background-color: #fcf944;
	display: flex;
	justify-content: center;
	align-items: center;
}

.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0;
	align-items: center;
}

.wrapper-logo {
	//
	display: flex;
	align-items: center;
	gap: 70px;
}

.wrapper-logo p {
	max-width: 20vw;
	font-size: 4vw;
	font-weight: 700;
	line-height: 1em;
	letter-spacing: 2px;
}

.wrapper-social-media {
	margin-top: 25px;
	text-align: center;
	font-size: 2.5vw;

	div {
		width: 100%;
		display: flex;
		justify-content: space-between;

		margin-top: 20px;
		a {
			transition: transform 0.12s ease-out;
			img {
				height: 3rem;
			}
		}
		a:hover {
			transform: scale(0.8);
		}
	}
}

.logo {
	width: 25vh;
}

.donate {
	position: fixed;
	top: 4%;
	z-index: 22;
	right: 3%;
	background-color: white;
	text-decoration: none;
	div {
		transition: transform 0.12s ease-out;
		border: 3px solid black;
		padding: 0.2vw 0.7vw;
		font-size: 2vw;
		color: black;
	}

	div:hover {
		transform: translate(20px, -9px);
	}
}
</style>
