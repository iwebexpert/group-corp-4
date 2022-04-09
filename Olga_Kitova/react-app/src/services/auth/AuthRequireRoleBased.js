import React from 'react'
import LoginForm from 'components/LoginForm'
import { authService } from './authService'

export default function AuthRequireRoleBased({children}) {
    const user = authService?.currentUserValue;
    const role = user?.role || null
   
    return role ? children : <LoginForm />
}