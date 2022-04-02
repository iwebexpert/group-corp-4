import {authService} from '../services/auth/authService'
import { PAGES_GET_PENDING, PAGES_GET_SUCCESS, PAGES_GET_ERROR,
        PAGES_ADD_SUCCESS, PAGES_ADD_ERROR, PAGES_EDIT_ID_RESET,
        PAGES_EDIT_ID_SUCCESS, PAGES_EDIT_SUCCESS, PAGES_EDIT_ERROR,
        PAGES_DELETE_SUCCESS, PAGES_DELETE_ERROR } from 'constants/constantsPages'
        import {STATS_GET_PENDING, STATS_GET_SUCCESS, STATS_GET_ERROR} from 'constants/constantsStats'
  // Rewrite actions types
   const rewriteAction = (action) => {
     switch(action) {
        case PAGES_GET_PENDING: case PAGES_GET_SUCCESS: case PAGES_GET_ERROR:
            return 'Получение страниц'
        case PAGES_ADD_SUCCESS:  case PAGES_ADD_ERROR:
            return 'Добавление страниц'
        case PAGES_EDIT_ID_RESET: case PAGES_EDIT_ID_SUCCESS:
            return 'Получение ID страницы'
        case PAGES_EDIT_SUCCESS: case PAGES_EDIT_ERROR:
            return 'Редактирование страницы'
        case PAGES_DELETE_SUCCESS:  case PAGES_DELETE_ERROR:
            return 'Удаление страницы'
        case STATS_GET_PENDING: case STATS_GET_SUCCESS: case STATS_GET_ERROR:
            return 'Получение статистики'
        default:
            return 'Нет действий'
            
     }
   }
   // Rewrite date
    const optionsDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }


export const loggerActionUserMiddleware = store => next => action => {
    const {id, role} = authService.currentUserValue
    const res = next(action)
    // Сhange property bear depending on access right
    const getBear = () => {
        if(role === 'user') {
            if(action.type === PAGES_GET_PENDING || action.type === PAGES_GET_SUCCESS || action.type === PAGES_GET_ERROR) {
               return true
            } else {
                return false
            }
        } else {
            return true
        }
    }
    
    const data = {
        userId: id,
        actions: {
            date: new Date().toLocaleString("ru", optionsDate),
             action: rewriteAction(action.type), 
             bear: getBear()}
    }

    const options = {
        method: 'POST',
        headers: { 
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Authentication': `Bearer ${authService.token}`
        },
        body: JSON.stringify(data)
    }
    if(action.type === PAGES_GET_PENDING) {
        return null
    } else {
        fetch('api/logs', options)
        .then((res) => res.json())
        .then(res => {
            if(res.error) throw res.error
            return res
        })
        .catch(err => console.log(err))
    }
    
    return res
}