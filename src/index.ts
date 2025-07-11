import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/common/routes'

import '@/tattoo-rendering/step2/Step2'
import '@/tattoo-rendering/step3/Step3'
import '@/tattoo-rendering/step4/Step4'
import '@/tattoo-rendering/step5/Step5'
import '@/tattoo-rendering/step6-simplify/Step6'
import '@/website/Website'
import '@/website/Website2'

import '@/cubemap/cubemap/CubemapRenderer'
import '@/cubemap/cubemap_generator/CubemapRenderer2.ts'

import App from '@/common/components/App.vue'

import '@/scss/style.scss'

const app = createApp(App)
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

app.use(router)
app.mount('#app')
