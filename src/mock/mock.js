import { getPrepareSellData, getPrepareSellDetail } from './prepareSell'

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

export {
  prepareSellData,
  prepareSellDetail,
  test
}
