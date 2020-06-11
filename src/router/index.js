import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/engine',
    name: 'Engine',
    component: () => import('@/views/engine/Engine.vue')
  },
  {
    path: '/site',
    name: 'NavSite',
    component: () => import('@/views/site/NavSite.vue')
  },
  {
    path: '/bili',
    name: 'NavBili',
    component: () => import('@/views/bili/NavBili.vue')
  },
  {
    path: '/api',
    name: 'NavApi',
    component: () => import('@/views/api/NavApi.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/page/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router