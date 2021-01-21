import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/client',
    name: 'Clients',
    component: () => import('../views/Clients/Clients.vue')
  },
  {
    path: '/contracts',
    name: 'Contracts',
    component: () => import('../views/Contracts/Create.vue')
  },
  {
    path: '/contracts-review',
    name: 'ContractsAcquired',
    component: () => import('../views/Contracts/Contracts.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Contracts/Reports.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
