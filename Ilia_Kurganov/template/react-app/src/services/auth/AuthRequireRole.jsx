import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

function AuthRequireRole({ children, redirect }) {
  const isAuth = authService.currentUserValue !== null
  const userInfo = authService.currentUserValue

  return isAuth ? React.cloneElement(children, { userInfo }) : <Navigate ro={redirect} />
}

export default AuthRequireRole
