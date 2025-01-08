import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";
import Vue3Lottie from 'vue3-lottie'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(Vue3Lottie)

app.use(pinia)

app.use(Toast)

app.use(MotionPlugin)

app.use(router)

app.mount('#app')
