import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    // name: 'Root',
    // component: () => import('@/views/home/Home.vue'),
    redirect: 'home'
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
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
