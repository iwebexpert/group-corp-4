import React, { useState, useEffect, ReactNode } from 'react'
import { authService } from './authService'

export type AuthProviderProps = {
  children: any
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser: any = authService.currentUserValue
    setUser(currentUser)
  }, [])

  return React.cloneElement(children, { user })
}
