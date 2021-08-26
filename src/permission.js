import store from './store'
import router, { routes } from './router'

import NProgress from 'nprogress'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

const permission = {}
const whiteList = ['/login', '/welcome', '/prepareSell', '/trade', '/news', '/notice', '/download', '/guide', '/advice']
NProgress.configure({ showSpinner: false })
store.dispatch('privilege/create_access_routes', routes)

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    const hasToken = getToken()
    if (hasToken !== 'null') {
      if (to.path === '/record/login' || to.path === '/record') {
        next({ path: '/record/main' })
      } else if (to.path === '/') {
        next({ path: '/welcome' })
      } else {
        const hasGetUserInfo = store.getters.name
        if (hasGetUserInfo) {
          next()
        } else {
          try {
            next()
          } catch (error) {
            // await store.dispatch('user/resetToken')
            Message.error(error || 'Has Error')
            next(`/login?redirect=${to.path}`)
          }
        }
      }
    } else {
      if (to.path === '/') {
        next({ path: '/welcome' })
      } else if (to.path === '/record') {
        next({ path: '/record/login' })
      } else if (to.path === '/record/login') {
        next()
      }
    }
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default permission
