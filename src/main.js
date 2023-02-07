// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import permission from './permission'

const echarts = require('echarts')
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

const allbtnname = [
  {
    text: 'open',
    class: 'open_side',
    icon: 'icon open_side',
    type: 'open'
  }
]

Vue.directive('otherRender', {
  inserted: function (el, name, vm) {
    let icon = ''
    let vClass = ''
    const type = vm.context.type
    allbtnname.forEach(item => {
      if (type.indexOf(item.type) !== 1) {
        vClass = item.class
        icon = item.icon
      }
    })
    const className = el.getAttribute('class').split(' ')
    className.push(vClass)
    el.setAttribute('class', className.join(' '))
    vm.context.otherRender = function (h) {
      return h('i', {
        class: icon
      })
    }
  }
})

require('./mock/mock')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  permission,
  components: { App },
  // template is nescessry!
  template: '<App/>'
})
