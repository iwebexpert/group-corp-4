import { authService } from '../services/auth/authService'
import { isDev } from './devProdMode'

const URL_MAIN = '/api/'

export const urls = {
  pages: () => `${URL_MAIN}pages`,
  users: () => `${URL_MAIN}users`,
  currentPages: (id: string) => `${URL_MAIN}pages/${id}`,
  sendComments: () => `${URL_MAIN}/comments`,
  getComment: (id: string) => `${URL_MAIN}/comments?pageId=${id}`,
  authLogin: (email: string) => `${URL_MAIN}users?email=${email}`,
  logs: () => `${URL_MAIN}/log`,
  onePageByUrl: (url: string ) => `${URL_MAIN}/pages?url=${url}`,
}

interface ObjectLiteral {
  [key: string]: any
}

type requestOptionsType = {
  method: string,
  body?: string,
  headers: Headers
}

export const requestOptions = (method = 'GET', body: ObjectLiteral | null = null, isAddToken = true): requestOptionsType => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if (isAddToken) {
    headers.append('Authentication', `Bearer ${authService.token}`)
  }
  if (isDev()) {
    headers.append('Cache-Control', 'no-cache')
  }
  const options: requestOptionsType = {
    method,
    headers,
  }

  if (body !== null) {
    options.body = JSON.stringify(body)
  }
  return options
}
