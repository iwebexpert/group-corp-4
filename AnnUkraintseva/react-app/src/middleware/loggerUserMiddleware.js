import { authServices } from '../services/auth/authServices'
import { v4 as uuidv4 } from 'uuid'

import { getCurrentUserRole, getCurrentName, getCurrentEmail } from '../services/auth/authServices'
import {
  PAGE_PENDING,
  PAGE_SUCCESS,
  PAGE_ERROR,
  PAGE_DELETE_ERROR,
  PAGE_DELETE_SUCCESS,
  PAGE_ADD_ERROR,
  PAGE_ADD_SUCCESS,
  PAGE_FORM_EDIT_START,
  PAGE_FORM_EDIT_SAVE,
  PAGE_FORM_EDIT_RESET,
  ONE_PAGE_PENDING,
  ONE_PAGE_SUCCESS,
  ONE_PAGE_ERROR,
} from '../actions/page'

import { ACTIVE_PENDING,
    ACTIVE_SUCCESS,
    ACTIVE_ERROR
} from '../actions/activeUser'

import { COMMENT_PENDING,
COMMENT_SUCCESS, 
COMMENT_ERROR, 
COMMENT_ADD_SUCCESS,
COMMENT_ADD_ERROR,
} from '../actions/comments'

const actionActive = (action) => {
  switch (action.type) {
    case PAGE_PENDING:
    case PAGE_SUCCESS:
    case PAGE_ERROR:
      return 'Работа со страницами'

    case PAGE_DELETE_ERROR:
    case PAGE_DELETE_SUCCESS:
      return 'Удаление страницы'

    case PAGE_ADD_ERROR:
    case PAGE_ADD_SUCCESS:
      return 'Добавление страницы'

    case PAGE_FORM_EDIT_START:
    case PAGE_FORM_EDIT_SAVE:
    case PAGE_FORM_EDIT_RESET:
      return 'Редактирование страниц'

    case ACTIVE_PENDING:
    case ACTIVE_SUCCESS:
    case ACTIVE_ERROR:
        return 'Просмотр действий пользователей'

    case ONE_PAGE_PENDING:
    case ONE_PAGE_SUCCESS:
    case ONE_PAGE_ERROR:
        return 'Просмотр страницы'

    case COMMENT_PENDING:
    case COMMENT_SUCCESS:
    case COMMENT_ERROR:
      return 'Просмотр комментариев'

    case COMMENT_ADD_SUCCESS:
    case COMMENT_ADD_ERROR:
      return 'Добавление комментария'

    default:
      return 'Такого действия не найдено'
  }
}

export const loggerUserMiddleware = (store) => (next) => (action) => {
  const role = getCurrentUserRole()
  const name = getCurrentName()
  const email = getCurrentEmail()

  const res = next(action)

  let access
  const actionUser = actionActive(action)
  if (
    (role === 'user' &&
    (
      action.type === PAGE_ADD_SUCCESS ||
      action.type === PAGE_DELETE_SUCCESS ||
      action.type === PAGE_FORM_EDIT_START ||
      action.type === PAGE_FORM_EDIT_SAVE ||
      action.type === PAGE_FORM_EDIT_RESET ||
      action.type === ACTIVE_PENDING ||
      action.type === ACTIVE_SUCCESS||
      action.type === ACTIVE_ERROR))
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
  if (action.type === PAGE_PENDING) {
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
