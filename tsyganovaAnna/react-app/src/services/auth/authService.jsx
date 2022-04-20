import jwt_decode from 'jwt-decode'
import { getItem, setItem, removeItem } from '../../helpers/localStorageHelper'
import { urls, getOptions } from '../../helpers/requestHelper'
import { isDev } from '../../helpers/devProdMode'

export const authService = {
  login,
  logout,
  get currentUser() {
    return getCurrentUser()
  },
  get currentUserExist() {
    return getCurrentUserExist()
  },
  get currentUserRole() {
    return getCurrentUserRole()
  },
  get isAdmin() {
    return checkRole()
  },
  get token() {
    return getCurrentToken()
  },
}
const localStorageKey = 'User'

function getCurrentUser() {
  return getItem(localStorageKey)
}

function getCurrentUserRole() {
  const user = getItem(localStorageKey)
  if (user !== null) return user.role
  return null
}

function getCurrentUserExist() {
  const user = getItem(localStorageKey)
  if (user !== null) return true
  return false
}

function checkRole() {
  const user = getItem(localStorageKey)
  if (user !== null && user.role === 'admin') return true

  return false
}

function logout() {
  removeItem(localStorageKey)
  removeItem('Token')
  window.location.href = '/'
}

function getCurrentToken() {
  return getCurrentUser() ? getItem('Token') : null
}

function login(username, password, callback = () => {}) {
  return fetch(urls.login(username, password), getOptions('GET', false))
    .then(handleResponse)
    .then((user) => {
      const userData = isDev() ? user.pop() : user
      let decoded = jwt_decode(userData.token)
      if (typeof decoded === 'object') {
        decoded['username'] = username
      }
      setItem(localStorageKey, decoded)
      setItem('Token', userData.token)

      callback(decoded)
      location.reload()
      return decoded
    })
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if ([400, 401, 403, 404, 500].indexOf(response.status) !== -1) {
        authService.logout()
        location.reload()
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
