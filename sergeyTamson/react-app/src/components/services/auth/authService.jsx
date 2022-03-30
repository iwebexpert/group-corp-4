import jwt_decode from 'jwt-decode'

const localStorageKey = 'user'

export const authService = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser()
  },
}

function getCurrentUser() {
  let user = localStorage.getItem(localStorageKey)
  if (user !== null) {
    user = JSON.parse(user)
  }
  return user
}

function login(email, password, callback = (user) => {}) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }

  return fetch(`http://localhost:9000/api/users?email=${email}&password=${password}`, options)
    .then(handleResponse)
    .then((user) => {
      let decoded = jwt_decode(user.token)
      delete decoded.password
      localStorage.setItem(localStorageKey, JSON.stringify(decoded))
      callback(decoded)
      return decoded
    })
    .catch((error) => error)
}

function logout() {
  localStorage.removeItem(localStorageKey)
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

    if (data.length === 0) {
      return Promise.reject(new Error('Пользователь не найден'))
    }

    return data[0]
  })
}
