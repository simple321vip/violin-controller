import request from '../utils/request'
const downloadApi = {
  getDownloadList (listQuery) {
    return request({
      url: '/prepare/data',
      method: 'post',
      responseType: Blob,
      params: listQuery
    })
  }
}
export default downloadApi
