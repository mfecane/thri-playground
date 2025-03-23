<template>test</template>

<script setup lang="ts">
import { rendererManager } from '@/common/RendererManager'
import { onMounted, onBeforeUnmount } from 'vue'
import { RenderersEnum } from '@/common/RenderersEnum'

const props = defineProps<{ id: RenderersEnum }>()

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
