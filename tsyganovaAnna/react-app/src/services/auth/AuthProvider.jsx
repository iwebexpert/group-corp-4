import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'

import Login from '../../views/Login'
import { authService } from './authService'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = authService.currentUser
    setUser(currentUser)
  }, [])

  const handleSuccessAuth = (user) => {
    setUser(user)
  }

  return <>{user === null ? <Login handleSuccessAuth={handleSuccessAuth} /> : <Outlet />}</>
}
