import { authService } from 'services/auth/authService'

const BASE_URL = 'http://localhost:3001'
export const BASE_URL_COMMENTS = `${BASE_URL}/api/comments`
export const BASE_URL_PAGES = `${BASE_URL}/api/pages`
export const BASE_URL_LOGS = `${BASE_URL}/api/logs`
export const BASE_URL_USERS = `${BASE_URL}/api/users`
export const BASE_URL_USERS_LOGS = `${BASE_URL}/api/users?_embed=logs`

const mode = process.env.NODE_ENV


export const getOptions = (method, body = null, isAddToken = true) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if(isAddToken){
    headers.append('Authentication', `Bearer ${authService.token}`)
  }
  if(mode === 'development'){
    headers.append('Cache-Control', 'no-cache')
  }
  const options = {
    method,
    headers,
  }
  if(body !== null){
    options.body = JSON.stringify(body)
  }
  return options
}

 // Rewrite date
 export const optionsDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}