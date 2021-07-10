import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'
import layout from '../components/Layout.vue'
import welcome from '../view/welcome'
import detail from '../view/detail'
import PrepareSell from '../view/prepareSell'
import Record from '../view/record'
import Download from '../view/download'

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
        path: '/main/welcome',
        component: welcome,
        meta: {
          name: '控制台'
        }
      },
      {
        path: '/main/prepareSell',
        component: PrepareSell,
        meta: {
          name: '预售信息'
        }
      },
      {
        path: '/main/news',
        component: detail,
        meta: {
          name: '行业新闻'
        }
      },
      {
        path: '/main/notice',
        component: detail,
        meta: {
          name: '通知公告'
        }
      },
      {
        path: '/main/laws',
        component: detail,
        meta: {
          name: '政策法规'
        }
      },
      {
        path: '/main/download',
        component: Download,
        meta: {
          name: '下载中心'
        }
      },
      {
        path: '/main/guide',
        component: detail,
        meta: {
          name: '办事指南'
        }
      },
      {
        path: '/main/record',
        component: Record,
        meta: {
          name: '网上备案'
        }
      },
      {
        path: '/main/advice',
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
