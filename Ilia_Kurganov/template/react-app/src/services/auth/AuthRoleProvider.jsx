import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addRole } from '../../actions/actions'
import { authService } from './authService'

function AuthRoleProvider({ children }) {
  const dispatch = useDispatch()
  const role = authService.currentUserValue.role
  useEffect(() => {
    if (role) {
      dispatch(addRole(role))
    }
  }, [])

  return <>{children}</>
}

export default AuthRoleProvider
