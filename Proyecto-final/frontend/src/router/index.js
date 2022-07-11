import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:() => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/tareas',
    name: 'personas',
    component:() => import(/* webpackChunkName: "about" */ '../views/Tareas.vue')
  },
  {
    path: '/pagos',
    name: 'pagos',
    component:() => import(/* webpackChunkName: "about" */ '../views/Pagos.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
