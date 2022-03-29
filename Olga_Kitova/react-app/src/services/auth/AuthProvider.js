import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoginForm from 'components/LoginForm'
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

  return user === null 
  ? 
  <LoginForm handleSuccessAuth={handleSuccessAuth} /> 
  : 
  React.cloneElement(children, {user}) 
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
