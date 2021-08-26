
import { setToken } from '../../utils/auth'

const state = {
  token: ''
}

const mutations = {
  CREATE_TOKEN (state, token) {
    state.token = token
  },
  CLEAR_TOKEN (state) {
    state.token = null
  }
}

const actions = {
  create_token ({ commit }, token) {
    commit('CREATE_TOKEN', token)
    setToken(token)
  }
}

const user = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user
