const Mock = require('mockjs')

const getData = function () {
  return {
    msg: 'seccess',
    items: [
      {
        name: 'xiaoguan',
        sex: 'f'
      }
    ]
  }
}

const test = Mock.mock('/login', 'get', getData)

export {
  test
}
