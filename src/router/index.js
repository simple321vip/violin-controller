import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'
import layout from '../components/Layout.vue'
import welcome from '../view/info/wel.vue'
import detail from '../view/detail'

Vue.use(Router)

export const constRoutes = [
  {
    path: '/',
    component: welcome,
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
    children: [
      {
        path: '/main/wel',
        component: welcome,
        meta: {
          name: '項目1'
        }
      },
      {
        path: '/main/do',
        component: detail,
        meta: {
          name: '項目2'
        }
      }
    ]

  }
]

export const routes = [
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
