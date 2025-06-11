import './assets/main.css'

// 修正后
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NavMenu from './components/NavMenu.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [] // ✅ 清空路由配置
})

createApp(App).use(router).mount('#app')
