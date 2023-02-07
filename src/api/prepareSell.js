import request from '../utils/request'
const prepareSellApi = {
  getprepareSellList (listQuery) {
    return request({
      url: '/prepare/data',
      method: 'get',
      params: listQuery
    })
  },
  getprepareSellDetail (listQuery) {
    return request({
      url: '/prepare/detail',
      method: 'get',
      params: listQuery
    })
  },
  getprepareSellBuilding (listQuery) {
    return request({
      url: '/prepare/building',
      method: 'get',
      params: listQuery
    })
  }
}
export default prepareSellApi
