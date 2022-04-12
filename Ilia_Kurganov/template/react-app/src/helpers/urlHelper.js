import { authService } from '../services/auth/authService'
import { isDev } from './devProdMode'

const URL_MAIN = '/api/'

export const urls = {
  pages: () => `${URL_MAIN}pages`,
  users: () => `${URL_MAIN}users`,
  currentPages: (id) => `${URL_MAIN}pages/${id}`,
  sendComments: () => `${URL_MAIN}/comments`,
  getComment: (id) => `${URL_MAIN}/comments?pageId=${id}`,
  authLogin: (email) => `${URL_MAIN}/users?email_like=${email}`,
  logs: () => `${URL_MAIN}/log`,
}

export const requestOptions = (method = 'GET', body = null, isAddToken = true) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if (isAddToken) {
    headers.append('Authentication', `Bearer ${authService.token}`)
  }
  if (isDev()) {
    headers.append('Cache-Control', 'no-cache')
  }
  const options = {
    method,
    headers,
  }

  if (body !== null) {
    options.body = JSON.stringify(body)
  }
  return options
}
