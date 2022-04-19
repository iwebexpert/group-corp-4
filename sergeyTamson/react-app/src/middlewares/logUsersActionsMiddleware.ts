import { useCallback } from 'react'
import { Middleware } from 'redux'
import { authService } from '../components/services/auth/authService'

const rewriteAction = (action: string) => {
  switch (action) {
    case 'PAGE_ADD':
      return `Добавление страницы`

    case 'PAGE_FORM_EDIT_START':
      return 'Редактирование страницы'

    case 'PAGE_DELETE':
      return 'Удаление страницы'

    default:
      return 'Непонятные действия'
  }
}

const optionsDate = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}

const data = {
  userId: 1,
}
const options = {
  method: 'POST',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}

export const logUsersActionsMiddleware: Middleware = (store) => (next) => (action) => {
  const responce = next(action)

  if (
    action.type !== 'PAGE_PENDING' &&
    action.type !== 'USER_PENDING' &&
    action.type !== undefined
  ) {
    fetch('http://localhost:9000/api/logs', options)
      .then((res) => res.text())
      .then((res) => {
        return res
      })
      .catch((err) => console.log(err))
  }

  return responce
}
