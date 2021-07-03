import store from './store'
import { routes } from './router'

const permission = {}

store.dispatch('privilege/create_access_routes', routes)

export default permission
