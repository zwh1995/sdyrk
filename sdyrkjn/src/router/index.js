import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'xiao'
  },
  {
    path: '/xiao',
    name: 'xiao',
    component: () => import(/* webpackChunkName: "xiao" */ '../views/Xiaoxi/xiaox.vue')
  },
  {
    path: '/fre',
    name: 'fre',
    component: () => import(/* webpackChunkName: "fre" */ '../views/Friends/friend.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine/mine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
