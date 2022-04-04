import React, { useState, useEffect } from 'react'
import LoginForm from '../../components/LoginForm'
import { authService } from './authService'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = authService.currentUserValue
    setUser(currentUser)
  }, [])

  const handleSuccessAuth = (user) => {
    setUser(user)
  }

  return <>{user === null ? <LoginForm handleSuccessAuth={handleSuccessAuth} /> : children}</>
}
