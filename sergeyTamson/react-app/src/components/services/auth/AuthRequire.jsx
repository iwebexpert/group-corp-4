import React from 'react'
import {Navigate} from 'react-router-dom'
import {authService} from './authService'

export default function AuthRequire({children, redirectTo}) {
  // let isAuthenticated = false
  let isAuthenticated = authService.currentUserValue !== null
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}
