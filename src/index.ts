import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/common/routes'

import App from '@/common/components/App.vue'

import '@/scss/style.scss'

const app = createApp(App)
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

app.use(router)
app.mount('#app')
