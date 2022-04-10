import { getCurrentUserRole } from '../services/auth/authServices'
import {
  PAGE_ADD_ERROR,
  PAGE_ADD_SUCCESS,
  PAGE_DELETE_ERROR,
  PAGE_DELETE_SUCCESS,
  PAGE_FORM_EDIT_START,
  PAGE_FORM_EDIT_SAVE,
  PAGE_FORM_EDIT_RESET,
} from '../actions/page'

import { ACTIVE_PENDING, ACTIVE_SUCCESS, ACTIVE_ERROR } from '../actions/activeUser'

export const UserRoleMiddleware = (store) => (next) => (action) => {
  const role = getCurrentUserRole()
  const res = next(action)

  if (
    (role === 'user' &&
      (action.type === PAGE_ADD_SUCCESS ||
        action.type === PAGE_DELETE_SUCCESS ||
        action.type === PAGE_FORM_EDIT_START ||
        action.type === PAGE_FORM_EDIT_SAVE ||
        action.type === PAGE_FORM_EDIT_RESET ||
        action.type === ACTIVE_PENDING ||
        action.type === ACTIVE_SUCCESS ||
        action.type === ACTIVE_ERROR))
    
  ) {
    throw new Error('У пользователя нет доступа к данным операциям')
  } else {
    return res
  }
}
