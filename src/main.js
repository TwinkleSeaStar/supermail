import { createApp } from 'vue'
import App from './App.vue'
import router from './router'              // 导入router
import bus from './mitt/bus'

// 在Vue2.x中可以通过EventBus的方法来实现组件通信。
// 在Vue3.x中移除了on,off等方法,而是推荐使用mitt代替。
// Vue.prototype.$bus = new Vue()               // Vue2.x：Vue实例可以作为事件总线

const app = createApp(App)                      // Vue3.x: 挂载全局对象$bus来进行事件传递     
app.config.globalProperties.$bus = bus


createApp(App).use(router).mount('#app')   // 挂载router
