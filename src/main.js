import { createApp } from 'vue'
import App from './App.vue'
import router from './router'              // 导入router

// 在Vue2.x中可以通过EventBus的方法来实现组件通信。
// 在Vue3.x中移除了on,off等方法,而是推荐使用mitt代替。
// Vue2.x：Vue实例可以作为事件总线
// Vue.prototype.$bus = new Vue()               


createApp(App).use(router).mount('#app')   // 挂载router
