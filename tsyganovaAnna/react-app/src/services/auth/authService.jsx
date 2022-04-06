import jwt_decode from 'jwt-decode'

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
}
const localStorageKey = 'User'

function getCurrentUser() {
  let user = localStorage.getItem(localStorageKey)
  if (user !== null) {
    user = JSON.parse(user)
  }
  return user
}

function getCurrentUserRole() {
  let user = localStorage.getItem(localStorageKey)
  if (user !== null) {
    return JSON.parse(user).role
  }
}

function getCurrentUserExist() {
  let user = localStorage.getItem(localStorageKey)
  if (user !== null) {
    return true
  }
  return false
}

function checkRole() {
  let user = localStorage.getItem(localStorageKey)
  if (user !== null && JSON.parse(user).role === 'admin') {
    return true
  }
  return false
}

function login(username, password, callback = (user) => {}) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ login: username, pass: password }),
  }

  return fetch(`/api/users?email=${username}&password=${password}`, options)
    .then(handleResponse)
    .then((user) => {
      const userData = user[0] ? user.pop() : user
      let decoded = jwt_decode(userData.token)
      if (typeof decoded === 'object') {
        decoded['username'] = username
      }
      localStorage.setItem(localStorageKey, JSON.stringify(decoded))
      localStorage.setItem('Token', userData.token)
      callback(decoded)
      location.reload()
      return decoded
    })
}

function logout() {
  localStorage.removeItem(localStorageKey)
  localStorage.removeItem('Token')
  window.location.href = '/'
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
