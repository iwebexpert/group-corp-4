import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

function AuthRequireRole({children, redirect}) {
    
    const isAuth = authService.currentUserValue !== null
    const allData = authService.currentUserValue

  return isAuth ? React.cloneElement(children, {...allData}) : <Navigate ro={redirect}/>
}

export default AuthRequireRole