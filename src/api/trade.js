import request from '../utils/request'
const tradeApi = {
  getTradeInfo (listQuery) {
    return request({
      url: '/trade/data',
      method: 'get',
      params: listQuery
    })
  }
}
export default tradeApi
