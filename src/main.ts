import { createApp } from 'vue'
import router from './routes/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import "./assets/style/main.scss";
import "./assets/style/element/index.scss";
import './style.scss'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

const _pinia = createPinia();
createApp(App)
.use(ElementPlus)
.use(_pinia)
.use(router)
.mount('#app')
