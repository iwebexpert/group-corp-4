import React from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from './authService'

export default function AuthRequireRoleBased({ children, redirectTo }) {
  let isAuthenticated = authService.currentUserValue !== null
  let roles = ['user']
  return isAuthenticated ? React.cloneElement(children, { roles }) : <Navigate to={redirectTo} />
}
