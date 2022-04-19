import React from 'react'
import PageError from 'pages/PageError'
import { authService } from './authService'

type AuthRequireRoleProps = {
  children: React.ReactElement
}

export default function AuthRequireRole({ children }: AuthRequireRoleProps) {
  const user = authService?.currentUserValue
  const role = user?.role || null

  return role === 'admin' ? children : <PageError />
}
