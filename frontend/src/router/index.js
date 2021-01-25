import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../store/index'
import store from '../store/index'

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
    component: () => import('../views/Clients/Clients.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/new-contract',
    name: 'NewContract',
    component: () => import('../views/Contracts/Create.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/contracts',
    name: 'AdminContractsAll',
    component: () => import('../views/Contracts/AdminContractsAll.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/list-contracts',
    name: 'ContractsAcquired',
    component: () => import('../views/Contracts/ListContracts.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Contracts/Reports.vue'),
    meta: {requireAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record =>  record.meta.requireAuth)
  if(rutaProtegida && store.state.token === ''){
    next({name: 'Login'})
  }else{
    next();
  }
})
export default router
