import { authService } from 'services/auth/authService'
import { fetchRequestLogs } from 'helpers/requestLogs'
import { Middleware } from 'redux'

const actionPending = [
  'PAGE_GET_PENDING',
  'PAGE_GET_ERROR',
  'PAGES_GET_PENDING',
  'COMMENTS_GET_PENDING',
  'ALL_COMMENTS_GET_PENDING',
  'STATS_GET_PENDING',
  'ALL_USERS_GET_PENDING',
]
export type FetchRequestLogsPayload = {
  userId: Multiple
  actions: {
    date: string
    action: string
  }
}
export const loggerActionUserMiddleware: Middleware = (store) => (next) => (action) => {
  const id = authService?.currentUserValue?.id || 'Not auth'

  if (!actionPending.includes(action.type)) {
    const date = new Date().toLocaleString()

    fetchRequestLogs({
      userId: id,
      actions: {
        date,
        action: action.type,
      },
    })
  }

  return next(action)
}
