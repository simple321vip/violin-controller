const getters = {
  accessRoutes: state => state.privilege.accessRoutes,
  token: state => state.auth.token,
  name: state => state.auth.userName
}

export default getters
