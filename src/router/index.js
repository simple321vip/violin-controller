import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'
import layout from '../components/Layout.vue'

Vue.use(Router)

export const constRoutes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: layout,
    meta: {
      name: '項目'
    }
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: layout
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
