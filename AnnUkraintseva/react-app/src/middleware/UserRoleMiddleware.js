import { getCurrentUserRole } from '../services/auth/authServices'
import { PAGE_PENDING, PAGE_SUCCESS, PAGE_ERROR } from '../actions/page'

export const UserRoleMiddleware = (store) => (next) => (action) => {
  const role = getCurrentUserRole()
  const res = next(action)

  if (
    role === 'user' &&
    (action.type === PAGE_PENDING || action.type === PAGE_SUCCESS 
        || action.type === PAGE_ERROR)
  ) {
    throw new Error('У пользователя нет доступа к данным операциям')
  }
  else {
      return res
  }
}
