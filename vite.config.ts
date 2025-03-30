import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
	plugins: [vue(), glsl()],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	base: '/thri-playground/',
	server: {
		host: true,
		port: 5515,
	},
})
