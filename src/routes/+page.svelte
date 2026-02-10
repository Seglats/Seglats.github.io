<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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

	// Quality levels in order from lowest to highest
	const qualityLevels = [480, 720, 1080, 2000, 3840];

	/** @type {Record<string, number>} - tracks the highest loaded quality index for each image */
	let loadedQuality = {};

	/** Get the target quality level based on screen width */
	function getTargetQualityIndex() {
		if (!browser) return 4; // default to highest
		const w = window.innerWidth;
		if (w <= 600) return 1;  // 720
		if (w <= 1000) return 2; // 1080
		if (w <= 1400) return 3; // 2000
		return 4; // 3840
	}

	// Reactive statements to ensure Svelte tracks loadedQuality changes
	$: imageSources = images.reduce((/** @type {Record<string, string>} */ acc, img) => {
		const qualityIndex = loadedQuality[img.name] ?? 0;
		acc[img.name] = `/img/${img.name}-${qualityLevels[qualityIndex]}.avif`;
		return acc;
	}, {});

	$: fullyLoaded = images.reduce((/** @type {Record<string, boolean>} */ acc, img) => {
		acc[img.name] = (loadedQuality[img.name] ?? 0) >= getTargetQualityIndex();
		return acc;
	}, {});

	/**
	 * Progressively load image through quality levels
	 * @param {string} name
	 */
	function loadImageProgressively(name) {
		if (!browser) return;

		const targetIndex = getTargetQualityIndex();
		const currentIndex = loadedQuality[name] ?? 0;

		// If we've reached target quality, stop
		if (currentIndex >= targetIndex) return;

		const nextIndex = currentIndex + 1;
		const nextSrc = `/img/${name}-${qualityLevels[nextIndex]}.avif`;

		const img = new Image();
		img.onload = () => {
			loadedQuality = { ...loadedQuality, [name]: nextIndex };
			// Continue loading next quality level
			loadImageProgressively(name);
		};
		img.onerror = (e) => {
			console.error('Failed to load:', name, nextSrc, e);
		};
		img.src = nextSrc;
	}

	onMount(() => {
		loadImageProgressively(images[0].name);
		// lazy load gallery images with IntersectionObserver
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const name = /** @type {HTMLElement} */ (entry.target).dataset.name;
						if (name) loadImageProgressively(name);
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '200px' }
		);

		document.querySelectorAll('.gallery-item').forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<div>
	<div class="section first-section">
		<div class="section-1">
			<img
				src={imageSources[images[0].name]}
				alt={images[0].alt}
				class="image"
				class:blurred={!fullyLoaded[images[0].name]}
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
			<div class="gallery-item" data-name={image.name}>
				<img
					src={imageSources[image.name]}
					alt={image.alt}
					class="gallery-image"
					class:blurred={!fullyLoaded[image.name]}
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
		transition: filter 0.4s ease;
	}

	.gallery-image {
		width: 100%;
		height: auto;
		min-height: 60vh;
		object-fit: cover;
		border-radius: 2rem;
		transition: filter 0.4s ease;
	}

	.blurred {
		filter: blur(20px);
		transform: scale(1.02);
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

		.todo-message {
			padding: 0.75rem 1.5rem;
			max-width: 90%;
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
