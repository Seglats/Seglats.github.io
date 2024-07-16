<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import pkg from 'shifty';
	const { tween } = pkg;

	// onMount(() => {
	// 	init().then((shifty) => {
	// 		const Tweenable = shifty.Tweenable;
	// 		const tweeneble = new Tweenable();

	// 		const windowHeight = window.innerHeight;
	// 		const duration = 0.5;
	// 		/**
	// 		 * @param {WheelEvent} event
	// 		 */

	// 		function handleScroll(event) {
	// 			if (event.deltaY > 0) {
	// 				console.log("scrolling down");

	// 			} else {
	// 				console.log('scrolling up');
	// 			}
	// 		}
	// 		document.addEventListener('wheel', handleScroll);
	// 		return () => {
	// 			document.removeEventListener('wheel', handleScroll);
	// 		};
	// 	});
	// });
</script>

<div>
	<div class="section">
		<img src="/img/red_forrest.png" alt="redForrest" class="image" />
		<div class="text-overlay">
			<header class="montserrat-classic title">Rasmus Tengstedt</header>
			<h2 style="margin-top:.05rem;" class="montserrat-classic subtitle">22 year old dev</h2>
		</div>
	</div>

	<div style="margin:0 12vw;">
		<div style="border-top: 8px solid #c02335; border-radius: 5px; "></div>
		<div style="margin:4rem 3rem 0 3rem;">
			<h1 class="montserrat-classic" style="color:#cdcdcd;  font-size:4rem; ">About Me!</h1>
			<p class="montserrat-classic" style="font-size:1.3rem; color:#cdcdcd; width:37rem;">
				I am a 21-year-old student at LTU, studying Applied Artificial Intelligence. In my free
				time, I am currently learning JavaScript and web development, as well as tackling problems
				on LeetCode and Project Euler.
			</p>
		</div>
		<img
			src="/img/profilepic.png"
			alt="profile"
			style="width:20rem; border-radius:50%; float:right; margin:-13rem 2rem; 0 0;"
		/>
	</div>

	<div style="margin:11.3rem 12vw;">
		<div style="border-top: 8px solid #c02335; border-radius: 5px; "></div>
		<div style="margin:2rem 3rem 0 3rem;">
			<h1 class="montserrat-classic" style="color:#cdcdcd;  font-size:4rem; ">Education</h1>
			<img
				src="/img/ltu-img.jpg"
				alt="school_image"
				style="width:96%; border-radius:2rem; margin-left:2%;"
			/>
			<div style="margin-top:1rem;">
				<p class="montserrat-classic" style="font-size:1.3rem; color:#cdcdcd; margin:0 0.3rem;">
					I graduated from high school in 2020 and commenced my studies at LTU the same year.
					Currently, I am starting my forth year and am projected to graduate in 2025. My education
					has predominantly centered around mathematics and various programming theories. Recently,
					there has been an increasing emphasis on artificial intelligence. For instance, this past
					spring, we undertook projects focused on hate speech detection and cancer detection.
				</p>
			</div>
		</div>
	</div>
</div>

<div style="margin:-8.5rem 12vw;">
	<div style="border-top: 8px solid #c02335; border-radius: 5px; "></div>
	<div style="margin:2rem 3rem 0 3rem;">
		<h1 class="montserrat-classic" style="color:#cdcdcd;  font-size:4rem; ">
			Currently doing on the side
		</h1>

		<div style="margin-top:1rem;">
			<p class="montserrat-classic" style="font-size:1.3rem; color:#cdcdcd; margin:0 0.3rem;">
				I am currently learning web development with a focus on JavaScript to broaden my knowledge
				and enhance my opportunities for future projects and work. As part of this learning process,
				I am developing a variety of applications, including a pastebin with encryption and a call
				center app designed to handle larger database architectures, as well as authentication and
				authorization. To improve my JavaScript skills, I am also working on LeetCode and Project
				Euler problems to enhance my speed in creating different algorithms and data structures.
			</p>
		</div>
	</div>
</div>

<div style="margin:11rem 12vw;">
	<div style="border-top: 8px solid #c02335; border-radius: 5px; "></div>
	<div style="margin:2rem 3rem 0 3rem;">
		<h1 class="montserrat-classic" style="color:#cdcdcd;  font-size:4rem; ">
			Worked on in the Past!
		</h1>

		<div style="margin-top:1rem;">
			<p class="montserrat-classic" style="font-size:1.3rem; color:#cdcdcd; margin:0 0.3rem;">
				I've had was at a hockey store, where I maintained their online stock and kept their website
				up to date. I worked part-time for the company between 2019 and 2022. Additionally, I
				continued to help the owner with recommendations for improving the website, which is <a
					style="color:aqua;"
					href="https://www.greatskate.se/">Greatskate.se</a
				> In 2018, I worked with children aged 6-9 to promote reading and assist them in improving their
				reading skills. I also worked as a part-time shepherd during the summers from 2016 to 2023.
			</p>
		</div>
	</div>
</div>
<div style="margin:-8rem 12vw;">
	<div style="border-top: 8px solid #c02335; border-radius: 5px; "></div>
		<div class="montserrat-classic" style="text-align: center; font-size:1.3rem; color:#cdcdcd; margin-top:2rem;">&copy; Rasmus@luftig.se</div>
	<div style="height: 5rem"></div>
</div>


<style>
	.section {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.image {
		width: 75%;
		height: 80%;
		border-radius: 2rem;
	}
	.text-overlay {
		position: absolute;
		left: 43%;
		top: 10%;
	}
	.title {
		font-size: 5.5rem;
		color: black;
	}
	.subtitle {
		font-size: 2rem;
		color: black;
		margin-top: -0.4rem;
		margin-right: 1.5rem;
		float: right;
	}
</style>
