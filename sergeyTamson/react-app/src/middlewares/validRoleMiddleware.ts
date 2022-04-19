import { string } from 'prop-types'
import { Middleware } from 'redux'
import { authService } from '../components/services/auth/authService'

export const validRoleMiddleware: Middleware = (store) => (next) => (action) => {
  const user: any = authService.currentUserValue

  if (
    (action.type === 'PAGE_ADD' ||
      action.type === 'PAGE_DELETE' ||
      action.type === 'PAGE_FORM_EDIT_START') &&
    user?.role === 'user'
  ) {
    throw new Error('Нет доступа')
  } else {
    return next(action)
  }
}
