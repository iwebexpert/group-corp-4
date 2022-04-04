import React from 'react'
import { authService } from '../services/auth/authService'

export const checkRoleMiddleware = (store) => (next) => (action) => {
  const user = authService.currentUserValue
  if (user.role === 'admin') {
    const res = next(action)
    return res
  }
  return
}

export default checkRoleMiddleware
