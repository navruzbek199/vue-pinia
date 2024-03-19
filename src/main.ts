import './style.css'
import { createApp } from 'vue'
import router from './routes/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
const _pinia = createPinia();
createApp(App)
.use(ElementPlus)
.use(_pinia)
.use(router)
.mount('#app')
