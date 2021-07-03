import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'
import layout from '../components/Layout.vue'

Vue.use(Router)

export const constRoutes = [
  {
    path: '/',
    component: Login,
    meta: {
      name: '項目4'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      name: '項目3'
    }
  },
  {
    path: '/main',
    name: 'main',
    component: layout,
    meta: {
      name: '項目1'
    }
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: layout,
    meta: {
      name: '項目2'
    }
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
