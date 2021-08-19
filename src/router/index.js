// vue-cli3.x + vue-router3.x 写法
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// vue-cli4.x + vue-router4.x 写法
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

// 1.安装插件
// Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 3.导出router
export default router