import { authService } from '../services/auth/authService'
// import { optionsDate } from 'config/requestConfig'
// import { fetchRequestLogs } from 'helpers/requestLogs'

const actionPending = ['PAGE_LOADING', 'PAGE_SUCCESS']

export const customLoggerMiddleware = (store) => (next) => (action) => {
  const id = authService?.currentUser?.id || 'Not auth'

  if (!actionPending.includes(action.type)) {
    console.log(action.type)
    // fetchRequestLogs({
    //   userId: id,
    //   actions: {
    //     date: new Date(),
    //     action: action.type,
    //   },
    // })
  }
  return next(action)
}
