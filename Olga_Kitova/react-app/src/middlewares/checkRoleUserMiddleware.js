import {authService} from '../services/auth/authService'
import {PAGES_GET_SUCCESS,PAGES_GET_PENDING, PAGES_GET_ERROR} from 'constants/constantsPages'
const textError = "У пользователя недостаточно прав для добавления, редактирования или удаления страниц"

export const checkRoleUserMiddleware = store => next => action => {
    const {role} = authService.currentUserValue
    const res = next(action)
    if(role === 'admin') {
        return res
    } else {
        if(action.type === PAGES_GET_PENDING || action.type === PAGES_GET_SUCCESS || action.type === PAGES_GET_ERROR) {
            return res
        } else {
            throw new Error(textError)
        }
    }
}