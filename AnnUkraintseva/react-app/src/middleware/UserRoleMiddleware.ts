import { getCurrentUserRole } from '../services/auth/authServices'
import {
  PageActionTypes
} from '../actions/page'

import { ActiveActionTypes } from '../actions/activeUser'

import { AllUserActionTypes } from 'actions/allUser'
import { Middleware } from 'redux'

export const UserRoleMiddleware: Middleware = (store) => (next) => (action) => {
  const role = getCurrentUserRole()
  const res = next(action)

  if (
    role === 'user' &&
    (action.type === PageActionTypes.PAGE_ADD_SUCCESS ||
      action.type === PageActionTypes.PAGE_DELETE_SUCCESS ||
      action.type === PageActionTypes.PAGE_FORM_EDIT_START ||
      action.type === PageActionTypes.PAGE_FORM_EDIT_SAVE ||
      action.type === PageActionTypes.PAGE_FORM_EDIT_RESET ||
      action.type === ActiveActionTypes.ACTIVE_PENDING ||
      action.type === ActiveActionTypes.ACTIVE_SUCCESS ||
      action.type === ActiveActionTypes.ACTIVE_ERROR ||
      action.type === AllUserActionTypes.ALL_USER_PENDING ||
      action.type === AllUserActionTypes.ALL_USER_SUCCESS ||
      action.type === AllUserActionTypes.ALL_USER_ERROR)
  ) {
    throw new Error('РЈ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РЅРµС‚ РґРѕСЃС‚СѓРїР° Рє РґР°РЅРЅС‹Рј РѕРїРµСЂР°С†РёСЏРј')
  } else {
    return res
  }
}
