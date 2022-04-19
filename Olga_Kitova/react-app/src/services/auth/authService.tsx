import jwt_decode from 'jwt-decode'
import { getOptions } from 'config/requestConfig'
import { BASE_URL_USERS } from 'helpers/URLRequest'

const localStorageKey = 'user'
const arrayError = [400, 401, 403, 404, 500, 504]

export const authService = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser()
  },
  get token() {
    return getCurrentToken()
  },
}

function getCurrentUser() {
  let user = localStorage.getItem(localStorageKey)
  let userCopy
  if (user !== null) {
    userCopy = JSON.parse(user)
  }
  return userCopy ?? null
}

function getCurrentToken() {
  const user = getCurrentUser()
  return user && user.token ? user.token : null
}

function login(email: string, password: string, callback: (user: UserType) => void) {
  return fetch(
    `${BASE_URL_USERS}?email_like=${email}&password_like=${password}&_embed=tokens`,
    getOptions('GET', null, false),
  )
    .then(handleResponse)
    .then((user) => {
      let decoded: UserType = jwt_decode(user.token)
      decoded['token'] = user.token
      localStorage.setItem(localStorageKey, JSON.stringify(decoded))
      callback(decoded)
      return decoded
    })
    .catch((err) => {
      return err
    })
}

function handleResponse(res: Response) {
  return res.json().then((data) => {
    if (!res.ok) {
      if (arrayError.indexOf(res.status) !== -1) {
        authService.logout()
        location.reload()
        const error = (data && data.message) || res.statusText
        throw new Error(error)
      }
      throw new Error('Ошибка запроса')
    } else if (data.length < 1) {
      throw new Error('Неправильный email или пароль')
    } else if (Array.isArray(data)) {
      data = data[0]['tokens'][0]
    }
    return data
  })
}

function logout() {
  localStorage.removeItem(localStorageKey)
}
