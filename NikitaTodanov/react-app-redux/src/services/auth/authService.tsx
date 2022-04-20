import jwt_decode from 'jwt-decode'
import { isDev } from 'helpers/devProdMode'
import { getParams, removeParam, setParam } from 'helpers/localStorageHelper'
import { requestOptions, urls } from 'helpers/requestHelper'

export const authService = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser()
  },
  get currentPrivileges() {
    return getCurrentPriviligesBasedRoles()
  },
  get token() {
    return getCurrentToken()
  },
  get userId() {
    return getUserId()
  },
}

const localStorageKey = 'user'

function getCurrentUser() {
  let user = getParams(localStorageKey, null, 'auth')

  if (isDev() && user && user?.roles) {
    user.roles.push('ROLE_USER')
    user.roles.push('ROLE_ROOT')
  }

  return user
}

function getCurrentToken() {
  const user = getCurrentUser()
  return user && user.token ? user.token : null
}

function getUserId() {
  const user = getCurrentUser()
  return user && user.username ? user.username : null
}

function getCurrentPriviligesBasedRoles() {
  const user = getCurrentUser()
  const privileges = {
    isRoot: false,
    isUser: false,
    isProfileEdit: false,
    isAvailablePageFilial: false,
    isAvailablePageFilialForm: false,
  }

  if (!user?.roles) {
    return privileges
  }

  if (user.roles.indexOf('ROLE_USER') !== -1) {
    privileges.isUser = true
    privileges.isAvailablePageFilialForm = true
  }

  if (user.roles.indexOf('ROLE_ROOT') !== -1) {
    privileges.isRoot = true
    privileges.isProfileEdit = true
    privileges.isAvailablePageFilial = true
  }

  return privileges
}

function login(username: string, password: string, callback: (user: UserType) => void) {
  const options = requestOptions('POST', { login: username, pass: password }, false)

  return fetch(urls.authLogin(), options)
    .then(handleResponse)
    .then((user) => {
      let decoded: UserType = jwt_decode(user.token)
      if (typeof decoded === 'object') {
        decoded['username'] = username
        decoded['token'] = user.token
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
