import { setToken } from '../../utils/auth'

const state = {
  user: ''
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
  async create_token ({ commit }, token) {
    return new Promise((resolve, reject) => {
      commit('CREATE_TOKEN', token)
      setToken(token)
    })
  }
}

const user = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user
