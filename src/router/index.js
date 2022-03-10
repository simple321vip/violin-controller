import Vue from 'vue'
import Router from 'vue-router'
import layout from '../components/Layout.vue'
import welcome from '../view/welcome'
import detail from '../view/detail'
import PrepareSell from '../view/prepareSell'
import Index from '../view/record/'
import Login from '../view/record/Login'
import Main from '../view/record/main'
import Download from '../view/download'
import News from '../view/news'
import Trade from '../view/trade'

Vue.use(Router)

export const constRoutes = [

  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/welcome',
        component: welcome,
        meta: {
          name: '控制台'
        }
      },
      {
        path: '/prepareSell',
        component: PrepareSell,
        meta: {
          name: '预售信息'
        }
      },
      {
        path: '/trade',
        component: Trade,
        meta: {
          name: '交易信息'
        }
      },
      {
        path: '/news',
        component: News,
        meta: {
          name: '行业新闻'
        }
      },
      {
        path: '/notice',
        component: detail,
        meta: {
          name: '通知公告'
        }
      },

      {
        path: '/download',
        component: Download,
        meta: {
          name: '下载中心'
        }
      },
      {
        path: '/school',
        component: () => import('../view/school'),
        meta: {
          name: '学校'
        }
      },
      {
        path: '/record',
        component: Index,
        children: [
          {
            path: '/record/login',
            component: Login
          },
          {
            path: '/record/main',
            component: Main
          }
        ],
        meta: {
          name: '网上备案'
        }
      },
      {
        path: '/advice',
        component: detail,
        meta: {
          name: '咨询投诉'
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
