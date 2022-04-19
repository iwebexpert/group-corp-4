import { PAGE_ADD } from '../store/actions/pageActions'
import { authService } from '../services/auth/authService'
const textError =
  'У пользователя недостаточно прав для добавления, редактирования или удаления страниц'

export const checkRoleMiddleware = (store) => (next) => (action) => {
  const isAdmin = authService.isAdmin

  const res = next(action)
  if (isAdmin) {
    return res
  } else {
    // if (action.type === PAGE_ADD || action.type === PAGE_ADD || action.type === PAGE_ADD) {
    //   return res
    // } else {
    throw new Error(textError)
    // }
  }
}
