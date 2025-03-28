import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/common/routes'

import '@/tattoo-rendering/step2/Step2'
import '@/tattoo-rendering/step3/Step3'

import App from '@/common/components/App.vue'

import '@/scss/style.scss'

const app = createApp(App)
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

app.use(router)
app.mount('#app')
