import { authService } from '../services/auth/authService'
import { isDev } from './devProdMode'

const URL_DOMAIN = 'http://127.0.0.1:3001'
const URL_PREFIX = '/api/v1'

export const urls = {
  equipment: () => `${URL_PREFIX}/equipment`,
  equipmentForm: (id: string) => `${URL_PREFIX}/equipment/${id}`,
  filalReport: () => `${URL_PREFIX}/reports`,
  filialReportDownloadLink: (id: string, format: 'html5' | 'pdf') => `${URL_PREFIX}/filial/download/${id}?format=${format}`,
  authLogin: () => `${URL_DOMAIN}${URL_PREFIX}/user/login`,
}

interface ObjectLiteral {
  [key: string]: Object
}

type FetchOptions = {
  method: string
  headers: Headers
  body?: string
}

export const requestOptions = (method = 'GET', body: ObjectLiteral | null = null, isAddToken = true): FetchOptions => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if(isAddToken){
    headers.append('Authentication', `Bearer ${authService.token}`)
  }

  if(isDev()){
    headers.append('Cache-Control', 'no-cache')
  }

  const options: FetchOptions = {
    method,
    headers,
  }

  if(body !== null){
    options.body = JSON.stringify(body)
  }

  return options
}