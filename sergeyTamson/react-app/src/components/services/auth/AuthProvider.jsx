import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { authService } from './authService'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = authService.currentUserValue
    setUser(currentUser)
  }, [])

  return React.cloneElement(children, { user })
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
