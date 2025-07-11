<template>
	<RouterLink class="closeButton" to="/">
		<svg class="icon" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70.04 117.43">
        <path fill="currentColor"
            d="M67.92,7.31l-5.19-5.19c-2.83-2.83-7.42-2.83-10.25,0L2.94,51.61c-3.92,3.92-3.92,10.28,0,14.2l49.54,49.49c2.83,2.83,7.42,2.83,10.25,0l5.19-5.19c2.83-2.83,2.83-7.42,0-10.25L29.46,61.41c-1.49-1.49-1.49-3.9,0-5.39l38.46-38.46c2.83-2.83,2.83-7.42,0-10.25Z" />
    </svg>

	</RouterLink>
</template>

<script setup lang="ts">
import { rendererManager } from '@/common/RendererManager'
import { onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{ id: string }>()

function onResize() {
	rendererManager.onResize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
	rendererManager.setRenderer(props.id)
	window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
	rendererManager.clear()
	window.removeEventListener('resize', onResize)
})
</script>

<style lang="scss">
.closeButton {
	position: fixed;
	z-index: 10001;
	top: 16px;
	left: 16px;
	padding: 8px;
	border-radius: 50%;
	background: rgb(43, 45, 49);
	display: grid;
	place-content: center;
}

.closeButton  svg{
    width: 18px;
    height: 18px;
}
</style>
