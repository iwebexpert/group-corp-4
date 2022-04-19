import { Middleware } from 'redux'
import { authService } from 'services/auth/authService'

const actionByNotAuth = [
  'PAGE_GET_SUCCESS',
  'PAGE_GET_PENDING',
  'PAGE_GET_ERROR',
  'PAGES_GET_SUCCESS',
  'PAGES_GET_PENDING',
  'PAGES_GET_ERROR',
  'COMMENTS_GET_PENDING',
  'COMMENTS_GET_SUCCESS',
  'COMMENTS_GET_ERROR',
]

export const checkRoleUserMiddleware: Middleware = (store) => (next) => (action) => {
  const role = authService?.currentUserValue?.role || null

  if (role === null) {
    if (actionByNotAuth.includes(action.type)) {
      return next(action)
    } else {
      window.location.href = '/login'
      return
    }
  } else {
    return next(action)
  }
}
