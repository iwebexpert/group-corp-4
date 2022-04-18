import { authServices } from '../services/auth/authServices'
import { v4 as uuidv4 } from 'uuid'

import { getCurrentUserRole, getCurrentName, getCurrentEmail } from '../services/auth/authServices'
import {
  PageActionTypes
} from '../actions/page'

import { ActiveActionTypes
} from '../actions/activeUser'

import { CommentActionTypes
} from '../actions/comments'

import {AllUserActionTypes
} from '../actions/allUser'
import { Middleware } from 'redux'

const actionActive = (action:any) => {
  switch (action.type) {
    case PageActionTypes.PAGE_PENDING:
    case PageActionTypes.PAGE_SUCCESS:
    case PageActionTypes.PAGE_ERROR:
      return 'Работа со страницами'

    case PageActionTypes.PAGE_DELETE_ERROR:
    case PageActionTypes.PAGE_DELETE_SUCCESS:
      return 'Удаление страницы'

    case PageActionTypes.PAGE_ADD_ERROR:
    case PageActionTypes.PAGE_ADD_SUCCESS:
      return 'Добавление страницы'

    case PageActionTypes.PAGE_FORM_EDIT_START:
    case PageActionTypes.PAGE_FORM_EDIT_SAVE:
    case PageActionTypes.PAGE_FORM_EDIT_RESET:
      return 'Редактирование страниц'

    case ActiveActionTypes.ACTIVE_PENDING:
    case ActiveActionTypes.ACTIVE_SUCCESS:
    case ActiveActionTypes.ACTIVE_ERROR:
        return 'Просмотр действий пользователей'

    case PageActionTypes.ONE_PAGE_PENDING:
    case PageActionTypes.ONE_PAGE_SUCCESS:
    case PageActionTypes.ONE_PAGE_ERROR:
        return 'Просмотр страницы'

    case CommentActionTypes.COMMENT_PENDING:
    case CommentActionTypes.COMMENT_SUCCESS:
    case CommentActionTypes.COMMENT_ERROR:
      return 'Просмотр комментариев'

    case CommentActionTypes.COMMENT_ADD_SUCCESS:
    case CommentActionTypes.COMMENT_ADD_ERROR:
      return 'Добавление комментария'
    
    case AllUserActionTypes.ALL_USER_PENDING:
    case AllUserActionTypes.ALL_USER_SUCCESS:
    case AllUserActionTypes.ALL_USER_ERROR:
      return 'Просмотр пользователей'

    default:
      return 'Такого действия не найдено'
  }
}

export const loggerUserMiddleware: Middleware = (store) => (next) => (action) => {
  const role = getCurrentUserRole()
  const name = getCurrentName()
  const email = getCurrentEmail()

  const res = next(action)

  let access
  const actionUser = actionActive(action)
  if (
    (role === 'user' &&
    (
      action.type === PageActionTypes.PAGE_ADD_SUCCESS ||
      action.type === PageActionTypes.PAGE_DELETE_SUCCESS ||
      action.type === PageActionTypes.PAGE_FORM_EDIT_START ||
      action.type === PageActionTypes.PAGE_FORM_EDIT_SAVE ||
      action.type === PageActionTypes.PAGE_FORM_EDIT_RESET ||
      action.type === ActiveActionTypes.ACTIVE_PENDING ||
      action.type === ActiveActionTypes.ACTIVE_SUCCESS||
      action.type === ActiveActionTypes.ACTIVE_ERROR|| 
      action.type ===AllUserActionTypes.ALL_USER_PENDING||
      action.type ===AllUserActionTypes.ALL_USER_SUCCESS||
      action.type ===AllUserActionTypes.ALL_USER_ERROR
      ))
  ) {
    access = false
  } else {
    access = true
  }

  const data = {
    id: uuidv4(),
    name: name,
    email: email,
    role: role,
    action: actionUser,
    access: access,
  }

  const options = {
    method: 'POST',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Authentication: `Bearer ${authServices.token}`,
    },
    body: JSON.stringify(data),
  }
  if (action.type === PageActionTypes.PAGE_PENDING) {
    return null
  } else {
    fetch('api/logger', options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        return res
      })
  }

  return res
}
