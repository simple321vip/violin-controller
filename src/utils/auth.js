import Cookies from 'js-cookie'

export const getToken = function () {
  const token = Cookies.get('token')
  return token
}

export const setToken = function (token) {
  Cookies.set('token', token)
}

export const resetToken = function (token) {
  Cookies.set('token', null)
}
