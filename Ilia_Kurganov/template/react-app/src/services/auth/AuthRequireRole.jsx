import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

function AuthRequireRole({children, redirect}) {
    
    const isAuth = authService.currentUserValue !== null
    const role = authService.currentUserValue.role
    const allData = authService.currentUserValue
    console.log(allData)

  return isAuth ? React.cloneElement(children, {...allData}) : <Navigate ro={redirect}/>
}

export default AuthRequireRole