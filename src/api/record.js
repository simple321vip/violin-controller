import request from '../utils/request'
const recordApi = {
  authorize (user) {
    const User = user
    return request({
      url: '/record/authorize',
      method: 'post',
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      data: JSON.stringify(User)
    })
  }
}

export default recordApi
