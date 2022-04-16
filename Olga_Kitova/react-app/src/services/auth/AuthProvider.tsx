import React, { useState, useEffect } from 'react'
import { authService } from './authService'

type AuthProviderProps = {
  children: React.ReactElement
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const currentUser = authService?.currentUserValue
    setUser(currentUser)
  }, [])

  const handleSuccessAuth = (user: UserType) => {
    setUser(user)
  }

  return React.cloneElement(children, { user, handleSuccessAuth })
}
