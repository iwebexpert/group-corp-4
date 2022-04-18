import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

export type AuthRequireProps = {
  children: any
  redirectTo: string
}

export default function AuthRequire({ children, redirectTo }: AuthRequireProps) {
  let isAuthenticated = authService.currentUserValue !== null

  return isAuthenticated ? React.cloneElement(children) : <Navigate to={redirectTo} />
}
