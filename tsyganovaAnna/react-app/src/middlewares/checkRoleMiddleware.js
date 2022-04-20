import { authService } from '../services/auth/authService'

const textError = 'The user has insufficient rights'
const actionByNotAuth = [
  'PAGE_LOADING',
  'PAGE_GET_SUCCESS',
  'PAGE_GET_ERROR',
  'COMMENTS_LOADING',
  'COMMENTS_GET_SUCCESS',
  'COMMENTS_GET_ERROR',
]
export const checkRoleMiddleware = (store) => (next) => (action) => {
  const role = authService?.currentUserRole || null
  if (role === null) {
    if (actionByNotAuth.includes(action.type)) {
      return next(action)
    }
    throw new Error(textError)
  } else {
    return next(action)
  }
}
