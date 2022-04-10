import React, { useEffect, useState } from 'react'
import PageSignIn from '../../pages/PageSignIn'
import { authService } from './authService'
import { useSelector } from 'react-redux';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const logs = useSelector((state) => state.logs)

  useEffect(() => {
    const currentUser = authService.currentUserValue
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  const handleSuccesAuth = (user) => {
    setUser(user)
  }

  console.log('logs' , logs)
  console.log('user' , user)

  return <>{user === null ? <PageSignIn handleSuccesAuth={handleSuccesAuth} /> : children}</>
}

export default AuthProvider
