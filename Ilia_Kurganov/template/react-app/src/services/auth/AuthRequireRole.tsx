import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

export type AuthRequireRoleType = {
  children: JSX.Element | null,
  roleString: string,
  redirect: string
}

function AuthRequireRole({ children, roleString, redirect }: AuthRequireRoleType) {
  const isAuth = authService.currentUserValue !== null
  const role = authService.currentUserValue.role

  return isAuth && role === roleString ? children : <Navigate to={redirect} />
}

export default AuthRequireRole
