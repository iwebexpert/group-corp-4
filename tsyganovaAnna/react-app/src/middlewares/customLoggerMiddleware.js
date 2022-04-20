import { authService } from '../services/auth/authService'
import { addStats } from '../store/actions/statsActions'
import { optionsDate } from '../helpers/requestHelper'

const actionPending = [
  'PAGE_LOADING',
  'PAGE_SUCCESS',
  'COMMENTS_LOADING',
  'COMMENTS_SUCCESS',
  'STATS_ADD_SUCCESS',
  'STATS_ADD_ERROR',
]
export const customLoggerMiddleware = (store) => (next) => (action) => {
  const id = authService?.currentUser?.id || 'Not auth'

  if (!actionPending.includes(action.type)) {
    store.dispatch(
      addStats({
        userId: id,
        date: new Date().toLocaleString('ru', optionsDate),
        action: action.type,
      }),
    )
  }
  return next(action)
}