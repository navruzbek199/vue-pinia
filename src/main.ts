import './style.css'
import { createApp } from 'vue'
import router from './routes/router'
import { createPinia } from 'pinia'
import App from './App.vue'
const _pinia = createPinia();
createApp(App)
.use(_pinia)
.use(router)
.mount('#app')
