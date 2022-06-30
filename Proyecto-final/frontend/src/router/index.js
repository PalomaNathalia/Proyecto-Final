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
    path: '/inicio',
    name: 'inicio',
    component:() => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/personas',
    name: 'personas',
    component:() => import(/* webpackChunkName: "about" */ '../views/Personas.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
