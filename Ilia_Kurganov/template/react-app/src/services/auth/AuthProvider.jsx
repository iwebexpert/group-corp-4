import React, { useEffect, useState } from 'react'
import PageSignIn from '../../pages/PageSignIn'
import { authService } from './authService'

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
     
    const currentUser = authService.currentUserValue
    if(currentUser){
        setUser(currentUser)
    }
  }, [])

  const handleSuccesAuth = (user) => {
    setUser(user)
  }

  return <>{user === null ? <PageSignIn handleSuccesAuth={handleSuccesAuth} /> : children}</>
}

export default AuthProvider
