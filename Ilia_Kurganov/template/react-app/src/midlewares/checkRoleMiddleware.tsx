import React from 'react'
import { authService } from '../services/auth/authService'
import { Middleware } from 'redux';

export const checkRoleMiddleware: Middleware = (store) => (next) => (action) => {
  const user = authService.currentUserValue
  if (user.role === 'admin' || user.role === 'user') {
    const res = next(action)
    return res
  }
  return
}

export default checkRoleMiddleware
