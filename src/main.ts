import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores/index'
import router from './router/index'
import { registerIcons } from '@/utils/common'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '@/styles/index.scss'
import '@/plugins/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

async function start() {
    const app = createApp(App)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(pinia)
    app.use(router)
    app.use(ElementPlus)

    // 全局注册
    registerIcons(app) // icons

    app.mount('#app')
}

start()