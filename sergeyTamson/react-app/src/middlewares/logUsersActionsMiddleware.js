import { authService } from '../components/services/auth/authService'

const rewriteAction = (action) => {
  switch (action) {
    case 'PAGE_PENDING':
    case 'PAGE_SUCCESS':
    case 'PAGE_ERROR':
      return 'Получение страниц'
    case 'PAGE_ADD':
      return 'Добавление страниц'
    case 'PAGE_FORM_EDIT_START':
      return 'Редактирование страницы'
    case 'PAGE_DELETE':
      return 'Удаление страницы'
    case 'STATS_PENDING':
    case 'STATS_SUCCESS':
    case 'STATS_ERROR':
      return 'Получение статистики'
    default:
      return 'Нет действий'
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

export const logUsersActionsMiddleware = (store) => (next) => (action) => {
  // const { id, role } = authService.currentUserValue
  const res = next(action)
  // const getBear = () => {
  //   if (role === 'user') {
  //     if (
  //       action.type === 'PAGE_PENDING' ||
  //       action.type === 'PAGE_SUCCESS' ||
  //       action.type === 'PAGE_ERROR'
  //     ) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return true
  //   }
  // }

  // const data = {
  //   userId: id,
  //   actions: {
  //     date: new Date().toLocaleString('ru', optionsDate),
  //     action: rewriteAction(action.type),
  //     bear: getBear(),
  //   },
  // }

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Cache-Control': 'no-cache',
  //     'Content-Type': 'application/json',
  //     Authentication: `Bearer ${authService.token}`,
  //   },
  //   body: JSON.stringify(data),
  // }

  // if (action.type === 'PAGE_PENDING') {
  //   return null
  // } else {
  //   fetch('/api/logs', options)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.error) throw res.error
  //       return res
  //     })
  //     .catch((err) => console.log(err))
  // }

  return res
}
