import { getPrepareSellData, getPrepareSellDetail } from './prepareSell'
import { getTradeData } from './trade'

const Mock = require('mockjs')

const getData = function () {

}

const test = Mock.mock('/login', 'get', getData)

const prepareSellData = Mock.mock(RegExp('/prepare/data' + '.*'), 'get', (options) => {
  return Mock.mock(getPrepareSellData)
})

const prepareSellDetail = Mock.mock(RegExp('/prepare/detail' + '.*'), 'get', (options) => {
  return Mock.mock(getPrepareSellDetail)
})

const tradeData = Mock.mock(RegExp('/trade/data' + '.*'), 'get', (options) => {
  return Mock.mock(getTradeData)
})

export {
  prepareSellData,
  prepareSellDetail,
  test,
  tradeData
}
