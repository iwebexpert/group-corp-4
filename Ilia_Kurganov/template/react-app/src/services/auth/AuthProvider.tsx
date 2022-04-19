import React, { useEffect, useState } from 'react'
import PageSignIn from '../../pages/PageSignIn'
import { authService } from './authService'

type AuthProviderProps = {
  children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const currentUser = authService.currentUserValue
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  const handleSuccessAuth = (user: UserType) => {
    setUser(user)
  }

  return <>{user === null ? <PageSignIn handleSuccessAuth={handleSuccessAuth} /> : children}</>
}

export default AuthProvider
