import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import { registerSW } from 'virtual:pwa-register'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const updateSW = registerSW({
  onNeedRefresh() {
    alert("hello world")
  },
  onOfflineReady() {},
})

app.use(updateSW)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
