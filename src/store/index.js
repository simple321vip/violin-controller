import Vue from 'vue'
import Vuex from 'vuex'

import privilege from './modules/privilege'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    privilege
  },
  getters
})

export default store
