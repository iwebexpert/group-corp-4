import React, { useState, useEffect } from 'react'
import LoginForm from '../../components/LoginForm'
import { authService } from './authService'

type AuthProviderProps = {
  children: React.ReactNode
}

export default function AuthProvider({ children }:AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const currentUser = authService.currentUserValue
    setUser(currentUser)
  }, [])

  const handleSuccessAuth = (user:UserType) => {
    setUser(user)
  }

  return <>{user === null ? <LoginForm handleSuccessAuth={handleSuccessAuth} /> : children}</>
}
