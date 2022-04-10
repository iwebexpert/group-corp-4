import { authService } from '../components/services/auth/authService'

export const validRoleMiddleware = (store) => (next) => (action) => {
  const user = authService.currentUserValue
  const res = next(action)

  if (
    action.type === 'PAGE_ADD' ||
    action.type === 'PAGE_DELETE' ||
    action.type === 'PAGE_FORM_EDIT_START'
  ) {
    if (user.role === 'admin') {
      return res
    }
  }
}
