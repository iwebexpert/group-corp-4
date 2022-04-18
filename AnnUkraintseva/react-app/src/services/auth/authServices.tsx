import jwt_decode from 'jwt-decode'
import { removeParam, setParam, getParam } from '../../helper/localStorageHelper'

const localStorageKey = 'user'
const localStorageKey2 = 'allUsers'

const erroeMas = [400, 401, 403, 404, 500]

export const authServices = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser()
  },
  get token() {
    return getCurrentToken()
  },
  get userName() {
    return getCurrentName()
  },
  get userRole() {
    return getCurrentUserRole()
  },
  get userEmail() {
    return getCurrentEmail()
  },
  get getCurrentId() {
    return getCurrentId()
  },
}

export function getCurrentUser() {
  let user = getParam(localStorageKey, null, 'auth')

  return user
}

export function getCurrentName() {
  const user = getCurrentUser()
  return user && user.name ? user.name : null
}

export function getCurrentEmail() {
  const user = getCurrentUser()
  return user && user.email ? user.email : null
}

export function getCurrentUserRole() {
  const user = getCurrentUser()
  return user && user.role ? user.role : null
}

function getCurrentToken() {
  const user = getCurrentUser()
  return user && user.token ? user.token : null
}

function getCurrentId() {
  const user = getCurrentUser()
  return user && user.id ? user.id : null
}

function login(email: string, password: string, callback: (user: UserType) => void) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  return fetch(
    `http://localhost:9000/api/users?email_like=${email}&password_like=${password}&_embed=tokens`,
    options,
  )
    .then(handleResponse)
    .then((user) => {
      let decoded: UserType = jwt_decode(user[0].token)
      if (typeof decoded === 'object') {
        decoded['email'] = email
        decoded['token'] = user[0].token
      }
      setParam(localStorageKey, 'auth', decoded)
      callback(decoded)
      return decoded
    })
}


function logout() {
  removeParam(localStorageKey)
}

function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (erroeMas.indexOf(response.status) !== -1) {
        authServices.logout()
        location.reload()
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
