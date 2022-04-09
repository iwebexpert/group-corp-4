import {authService} from 'services/auth/authService'

const textError = "The user has insufficient rights"
const actionByNotAuth = [
    'PAGE_GET_SUCCESS','PAGE_GET_PENDING', 'PAGE_GET_ERROR', 
    'PAGES_GET_SUCCESS','PAGES_GET_PENDING', 'PAGES_GET_ERROR', 
    'COMMENTS_GET_PENDING', 'COMMENTS_GET_SUCCESS', 'COMMENTS_GET_ERROR'
]

export const checkRoleUserMiddleware = store => next => action => {

    const role = authService?.currentUserValue?.role || null

    if(role === null) {
          if(actionByNotAuth.includes(action.type))  {
            return next(action)
        } else {
            throw new Error(textError)
        }
    } else {
        return next(action)
    }
}