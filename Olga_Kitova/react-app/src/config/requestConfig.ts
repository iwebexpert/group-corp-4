import { authService } from 'services/auth/authService'
import { mode } from 'helpers/URLRequest'

interface ObjectLiteralBody {
  [key: string]: any
}

type FetchOptions = {
  method: string
  headers: Headers
  body?: string
}

export const getOptions = (
  method = 'GET',
  body: ObjectLiteralBody | null = null,
  isAddToken = true,
): FetchOptions => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if (isAddToken) {
    headers.append('Authentication', `Bearer ${authService.token}`)
  }
  if (mode === 'development') {
    headers.append('Cache-Control', 'no-cache')
  }
  const options: FetchOptions = {
    method,
    headers,
  }
  if (body !== null) {
    options.body = JSON.stringify(body)
  }
  return options
}

export interface DateTimeFormatOptions {
  year?: string
  month?: string
  day?: string
  hour?: string
  minute?: string
  second?: string
}
// Rewrite date
export const optionsDate: DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}
