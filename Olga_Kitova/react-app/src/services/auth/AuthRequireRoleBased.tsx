import React from 'react'
import { authService } from './authService'
import PageError from 'pages/PageError'

type AuthRequireRoleBasedProps = {
  children: React.ReactElement
}

export default function AuthRequireRoleBased({ children }: AuthRequireRoleBasedProps) {
  const user = authService?.currentUserValue
  const role = user?.role || null

  return role ? children : <PageError />
}
