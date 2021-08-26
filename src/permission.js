import store from './store'
import router, { routes } from './router'

import NProgress from 'nprogress'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

const permission = {}
const whiteList = ['/login', '/welcome', '/prepareSell', '/trade', '/news', '/notice', '/download', '/guide', '/advice', '/record/login']
NProgress.configure({ showSpinner: false })
store.dispatch('privilege/create_access_routes', routes)

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const hasToken = getToken()
  console.log('asasasas')
  if (hasToken) {
    if (to.path === '/record/login') {
      next({ path: '/record/main' })
      NProgress.done()
    } else if (to.path === '/') {
      console.log(12121121)
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else if (to.path === '/') {
      next({ path: '/welcome' })
    } else if (to.path === '/record') {
      next({ path: '/record/login' })
    } else {
      next({ path: '/welcome' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default permission
