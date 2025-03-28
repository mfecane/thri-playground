<template>
	<div class="container">
		<div class="header">
			<img src="/assets/images/me.jpg" alt="" class="me" />
			<h1>Mfecane's three.js playground</h1>
			<div>
				<p>
					Welcome to this ever-expanding yet inherently incomplete digital repository—a record of my ongoing experiments
					with Three.js, fragment and vertex shaders, real-time rendering, and other computationally demanding graphical
					manipulations that may or may not produce visually interesting results.
				</p>
				<p>
					Over an indeterminate span of time, I have spent countless hours—some productive, others frustratingly
					futile—constructing, deconstructing, and occasionally reconstructing 3D scenes, particle systems, and
					post-processing pipelines. These are all rendered in real time, provided your hardware meets the loosely
					defined and entirely arbitrary performance requirements necessary for a reasonable frame rate.
				</p>
				<p>
					Performance may fluctuate wildly. Some demos may crash frequently. The results may not always align with
					conventional notions of "good," "pleasing," or even "coherent." No promises are made regarding browser
					compatibility, mobile responsiveness, or the continued well-being of your GPU after prolonged exposure to
					unoptimized shader code.
				</p>
				<p>
					Proceed with caution, moderate expectations, and the understanding that, at its core, this is just a website
					where I make triangles do things.
				</p>
			</div>
		</div>

		<div v-for="group in keys" :key="group" class="group">
			<h2>{{ group }}</h2>
			<ul>
				<li v-for="r in renderersReposditory.getRenderersByGroups(group)" :key="group">
					<RouterLink :to="r.id">{{ r.id }}</RouterLink>
					<p v-if="r.description">{{ r.description }}</p>
				</li>
			</ul>
		</div>

		<div>
			<ul>
				<li v-for="r in renderersReposditory.getRenderersByGroups('default')">
					<RouterLink :to="r.id">{{ r.id }}</RouterLink>
					<p v-if="r.description">{{ r.description }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { renderersReposditory } from '@/common/RendererList'

const keys = renderersReposditory.getGroups().filter((group) => group !== 'default')
</script>

<style lang="scss">
.header {
	display: grid;
	grid-template-columns: minmax(200px, 1fr) 2fr;
	grid-template-rows: max-content auto;
	gap: 20px;
	min-height: 400px;
	margin-bottom: 3rem;
}

.header > *:first-child {
	grid-row: 1 / span 2;
}

.me {
	width: 100%;
	height: 100%;
	border-radius: 10px;
	overflow: hidden;
	object-fit: cover;
	max-height: 400px;
}

p {
	line-height: 1.6rem;
	margin-bottom: 2rem;
}

h1 {
	font-weight: 500;
	font-size: 4rem;
	line-height: 4.8rem;
}
</style>
