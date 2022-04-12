import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

export default function AuthRequireRoleAdmin({ children, redirectTo, role }) {
  let isAuthenticated = authService.currentUserValue !== null

  return isAuthenticated && role === 'admin' ? (
    React.cloneElement(children)
  ) : (
    <Navigate to={redirectTo} />
  )
}
