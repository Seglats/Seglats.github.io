<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import pkg from 'shifty';
	const { tween } = pkg;

	const images = [
		{ name: 'natt', alt: 'Night photo' },
		{ name: 'brygga', alt: 'Dock photo' },
		{ name: 'soluppgong', alt: 'Sunrise photo' },
		{ name: 'dag', alt: 'Day photo' },
		{ name: 'wakeboard', alt: 'Wakeboard photo' },
		{ name: 'katt', alt: 'Cat photo' },
		{ name: 'vackerMorgon', alt: 'Beautiful morning photo' },
		{ name: 'landskap', alt: 'Landscape photo' },
		{ name: 'fogel', alt: 'Bird photo' }
	];
</script>

<div>
	<div class="section first-section">
		<div class="section-1">
			<img
				srcset="/img/{images[0].name}-480.avif 480w, /img/{images[0]
					.name}-720.avif 720w, /img/{images[0].name}-1080.avif 1080w, /img/{images[0]
					.name}-2000.avif 2000w, /img/{images[0].name}-3840.avif 3840w"
				sizes="(max-width: 600px) 480px, (max-width: 1000px) 720px, (max-width: 1400px) 1080px, (max-width: 2500px) 2000px, 3840px"
				src="/img/{images[0].name}-2000.avif"
				alt={images[0].alt}
				class="image"
			/>
			<div class="text-overlay">
				<header class="montserrat-classic title">Rasmus Tengstedt</header>
				<h2 class="montserrat-classic subtitle">23 year old dev</h2>
			</div>
		</div>
		<div class="todo-message">
			<p class="montserrat-classic">
				TODO: Fix this website. In the meantime, enjoy these photos I took!
			</p>
		</div>
	</div>

	<div class="gallery-container">
		{#each images.slice(1) as image}
			<div class="gallery-item">
				<img
					srcset="/img/{image.name}-480.avif 480w, /img/{image.name}-720.avif 720w, /img/{image.name}-1080.avif 1080w, /img/{image.name}-2000.avif 2000w, /img/{image.name}-3840.avif 3840w"
					sizes="(max-width: 600px) 480px, (max-width: 1000px) 720px, (max-width: 3840px) 1080px, (max-width: 2500px) 2000px, 3840px"
					src="/img/{image.name}-2000.avif"
					alt={image.alt}
					class="gallery-image"
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.section {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.first-section {
		padding-bottom: 2rem;
	}

	.section-1 {
		width: 90%;
		max-width: 3840px;
		height: 75vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.image {
		border-radius: 2rem;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.text-overlay {
		position: absolute;
		right: 5%;
		top: 10%;
		text-align: right;
	}

	.title {
		font-size: clamp(2rem, 8vw, 5.5rem);
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
		white-space: nowrap;
	}

	.subtitle {
		font-size: clamp(1rem, 3.5vw, 2rem);
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
		margin-top: 0.05rem;
	}

	.todo-message {
		margin-top: 2rem;
		background: rgba(0, 0, 0, 0.7);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		backdrop-filter: blur(10px);
		max-width: 90%;
	}

	.todo-message p {
		color: white;
		font-size: clamp(0.9rem, 2vw, 1.2rem);
		margin: 0;
		text-align: center;
	}

	.gallery-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		padding: 2rem 0 4rem 0;
	}

	.gallery-item {
		width: 90%;
		max-width: 3840px;
	}

	.gallery-image {
		width: 100%;
		height: auto;
		min-height: 60vh;
		object-fit: cover;
		border-radius: 2rem;
	}

	@media (max-width: 768px) {
		.text-overlay {
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			width: 90%;
		}

		.subtitle {
			float: none;
			margin-right: 0;
			margin-top: 0.5rem;
		}

		.section-1 {
			width: 90%;
			max-width: 3840px;
			height: 75vh;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
		}

		.todo-message {
			padding: 0.75rem 1.5rem;
			max-width: 90%;
		}

		.gallery-item {
			width: 90%;
			max-width: 3840px;
		}

		.gallery-image {
			min-height: 50vh;
		}
	}

	@media (max-width: 480px) {
		.text-overlay {
			top: 30%;
		}
	}
</style>
