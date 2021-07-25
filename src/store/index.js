import Vue from 'vue'
import Vuex from 'vuex'

import privilege from './modules/privilege'
import auth from './modules/auth'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    privilege,
    auth
  },
  getters
})

export default store
