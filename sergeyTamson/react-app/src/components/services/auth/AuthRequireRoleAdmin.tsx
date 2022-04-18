import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

export type AuthRequireRoleAdminProps = {
  children: any
  redirectTo: string
  role: string
}

export default function AuthRequireRoleAdmin({
  children,
  redirectTo,
  role,
}: AuthRequireRoleAdminProps) {
  let isAuthenticated = authService.currentUserValue !== null

  return isAuthenticated && role === 'admin' ? (
    React.cloneElement(children)
  ) : (
    <Navigate to={redirectTo} />
  )
}
