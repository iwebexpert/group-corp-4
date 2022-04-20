import { authService } from '../services/auth/authService'
import { isDev } from './devProdMode'

const URL_PREFIX = '/api'

export const urls = {
  login: (username, password) => `${URL_PREFIX}/users?email=${username}&password=${password}`,
  pages: () => `${URL_PREFIX}/pages`,
  getPage: (id) => `${URL_PREFIX}/pages/${id}`,
  getPageByUrl: (url) => `${URL_PREFIX}/pages?url=${url}`,

  users: () => `${URL_PREFIX}/users`,
  getUser: (id) => `${URL_PREFIX}/users/${id}`,
  getLogsOfUser: () => `${URL_PREFIX}/users?_embed=logs`,

  comments: () => `${URL_PREFIX}/comments`,
  commentsWithPageAndUser: () => `${URL_PREFIX}/comments?_expand=user&_expand=page`,
  getComment: (id) => `${URL_PREFIX}/comments/${id}`,
  getCommentsForPage: (pageId) => `${URL_PREFIX}/comments?pageId=${pageId}&_expand=user`,

  stats: () => `${URL_PREFIX}/logs`,
  getStats: (id) => `${URL_PREFIX}/logs/${id}`,
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

export const response = (type, response) => ({
  type: type,
  payload: response,
})

export const optionsDate = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}