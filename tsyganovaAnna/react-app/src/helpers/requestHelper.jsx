import { authService } from '../services/auth/authService'
import { isDev } from './devProdMode'

// const URL_DOMAIN = 'http://127.0.0.1:3001'
const URL_PREFIX = '/api'

export const urls = {
  login: (username, password) => `${URL_PREFIX}/users?email=${username}&password=${password}`,
  pages: () => `${URL_PREFIX}/pages`,
  getPage: (id) => `${URL_PREFIX}/pages/${id}`,
  stats: () => `${URL_PREFIX}/stats`,
  getStats: (id) => `${URL_PREFIX}/pages/${id}`,
}

export const request = (api, method = 'GET', body = null, isAddToken = true) => {
  return fetch(api, getOptions(method, body, isAddToken)).then((response) => {
    if (!response.ok) {
      if (response.status !== 401) {
        authService.logout()
      }
      return Promise.reject(response.statusText)
    }
    return response.json()
  })
}

export const getOptions = (method, body = null, isAddToken = true) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if (isAddToken) headers.append('Authentication', `Bearer ${authService.token}`)
  if (isDev()) headers.append('Cache-Control', 'no-cache')

  const request = { method: method, headers: headers }
  if (body) request.body = JSON.stringify(body)

  return request
}

export const pageResponse = (type, response) => ({
  type: type,
  payload: response,
})
