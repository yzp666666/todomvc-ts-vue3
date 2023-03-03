import { createApp } from 'vue'
// import './style.css'
import './assets/index.css'
import {createPinia} from 'pinia'
import App from './App.vue'

const pinia=createPinia()

let app=createApp(App)

app.use(pinia)
app.mount('#app')
