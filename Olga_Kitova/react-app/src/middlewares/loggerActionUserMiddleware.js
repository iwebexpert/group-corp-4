import {authService} from 'services/auth/authService'
import {optionsDate} from 'config/requestConfig'
import { fetchRequestLogs } from 'helpers/requestLogs'

const actionPending = [
    'PAGE_GET_PENDING', 'PAGE_GET_ERROR','PAGES_GET_PENDING','COMMENTS_GET_PENDING',
    'ALL_COMMENTS_GET_PENDING', 'STATS_GET_PENDING', 'ALL_USERS_GET_PENDING'
]

export const loggerActionUserMiddleware = store => next => action => {

    const id = authService?.currentUserValue?.id || 'Not auth'

    if(!actionPending.includes(action.type)) {

        fetchRequestLogs({
            userId: id,
            actions: {
            date: new Date().toLocaleString("ru", optionsDate),
            action: action.type
            }
        })
    }
    return next(action)
}