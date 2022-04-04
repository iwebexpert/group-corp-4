import { authServices } from '../services/auth/authServices'
import { v4 as uuidv4 } from 'uuid'

import { getCurrentUserRole, getCurrentName, getCurrentEmail } from '../services/auth/authServices'
import { PAGE_PENDING, PAGE_SUCCESS, PAGE_ERROR, PAGE_DELETE_ERROR, PAGE_DELETE_SUCCESS, PAGE_ADD_ERROR,PAGE_ADD_SUCCESS,PAGE_FORM_EDIT_START, PAGE_FORM_EDIT_SAVE, PAGE_FORM_EDIT_RESET } from '../actions/page'

const actionActive=(action)=>{
    
    switch(action.type){
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
    role === 'user' &&
    (action.type === PAGE_PENDING || action.type === PAGE_SUCCESS 
        || action.type === PAGE_ERROR)
  ) {
     access = false
  }
  else {
    access= true
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
            'Authentication': `Bearer ${authServices.token}`
        },
        body: JSON.stringify(data)
    }
    if(action.type === PAGE_PENDING) {
        return null
    } else {
        fetch('api/logger', options)
        .then((res) => res.json())
        .then(res => {
            if(res.error) throw res.error
            return res
        })}
    

    return res

}
