import { constRoutes } from '../../router'

const state = {
  accessRoutes: []
}

const mutations = {
  CREATE_ACCESS_ROUTES (state, routes) {
    state.accessRoutes = routes.concat(constRoutes)
  }

}

const actions = {
  create_access_routes ({ commit }, routes) {
    commit('CREATE_ACCESS_ROUTES', routes)
  }
}

const privilege = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default privilege
