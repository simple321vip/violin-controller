import Vue from 'vue'
import Router from 'vue-router'
import LOGIN from '../view/login'
import layout from '../components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LOGIN,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/',
      name: 'layout',
      component: layout
    }
    // { path: '/', redirect: '/login' },
    // { path: '/login', component: LOGIN }
  ]
})
