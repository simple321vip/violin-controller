const state = {
  token: ''
}

const mutations = {
  CREATE_TOKEN (state, token) {
    state.token = token
  }

}

const actions = {
  create_token ({ commit }, token) {
    commit('CREATE_TOKEN', token)
  }
}

const auth = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default auth
