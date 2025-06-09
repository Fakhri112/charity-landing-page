<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
	name: "Footer",
	mounted() {
		gsap.set(".animals", {
			opacity: 0,
			y: -200,
		});
		ScrollTrigger.create({
			trigger: ".animals",
			start: "center bottom",

			onLeaveBack: () =>
				gsap.to(".animals", {
					opacity: 0,
					y: -200,
				}),
			onEnterBack: () =>
				gsap.to(".animals", {
					opacity: 1,
					y: 0,
				}),
			onLeave: () =>
				gsap.to(".animals", {
					opacity: 0,
					y: -200,
				}),
			onEnter: () =>
				gsap.to(".animals", {
					opacity: 1,
					y: 0,
				}),
		});
	},
};
</script>

<template>
	<div class="section-8">
		<div class="contact">
			<b>Contact Us</b>
			<p>Kyiv, Ukraine</p>
			<a class="mail" href="mailto:mail@isa.co.ua "
				><p>mailto:mail@isa.co.ua</p></a
			>
			<div class="social-media">
				<a href=""
					><img src="../assets/images/SocialMedia/youtube.svg" alt=""
				/></a>

				<a href=""><img src="../assets/images/SocialMedia/instagram.svg" /></a>
				<a href=""><img src="../assets/images/SocialMedia/fb.svg" /></a>
				<a href=""><img src="../assets/images/SocialMedia/patreon.svg" /></a>
				<a href=""><img src="../assets/images/SocialMedia/telegram.svg" /></a>
			</div>
		</div>
		<img
			class="animals"
			src="../assets/images/Animals/animal-group.svg"
			alt="" />
	</div>
</template>

<style lang="scss">
.section-8 {
	background-color: #31be32;
	padding: 10%;
	letter-spacing: 2px;
	line-height: 3.9em;
	display: flex;
	justify-content: space-between;

	p {
		color: black;
		font-size: 2.5vw;
	}
	b {
		font-size: 4vw;
	}

	.mail {
		text-decoration: none;
		transition: transform 0.12s ease-out;
	}
	.mail p {
		transition: transform 0.12s ease-out;
	}
	.mail p:hover {
		transform: scale(0.9);
	}

	.social-media {
		font-size: 2.5vw;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 1em;
		a {
			transition: transform 0.12s ease-out;
			text-decoration: none;

			img {
				width: 1.4em;
			}
		}
		a:hover {
			transform: scale(0.8);
		}
	}

	.animals {
		width: 40vw;
	}
}
</style>
