import React from 'react'
import {Navigate} from 'react-router-dom'
import {authService} from './authService'

type AuthRequireProps = {
  children: JSX.Element | null,
  redirectTo :string
}

export default function AuthRequire({children, redirectTo}: AuthRequireProps) {

  let isAuthenticated = authService.currentUserValue !== null
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}
