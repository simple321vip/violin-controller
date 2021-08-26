import { setToken, resetToken } from '../../utils/auth'

const state = {
  token: null,
  userName: null
}

const mutations = {
  CREATE_TOKEN (state, token) {
    state.token = token
  },
  CREATE_USERNAME (state, userName) {
    state.userName = userName
  },
  RESET_TOKEN (state) {
    state.token = null
  },
  RESET_USERNAME (state) {
    state.userName = null
  }

}

const actions = {
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('CREATE_TOKEN', user.token)
      commit('CREATE_USERNAME', user.userName)
      setToken('token', user.token)
    })
  },
  create_token ({ commit }, token) {
    commit('CREATE_TOKEN', token)
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('RESET_TOKEN')
      commit('RESET_USERNAME')
      resetToken('token', null)
    })
  }
}

const auth = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default auth
