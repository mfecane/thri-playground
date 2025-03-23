<template>
	<div class="container">
		<img src="/assets/images/me.jpg" alt="" class="me" />
		<h1>Mfecane's three.js playground</h1>
		<ul>
			<li v-for="k in rendererList" :key="k.id">
				<RouterLink :to="k.id">{{ k.id }}</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { rendererList } from '@/common/RendererList'
</script>
