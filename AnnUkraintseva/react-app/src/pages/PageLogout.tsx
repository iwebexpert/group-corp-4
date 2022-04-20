import React, { useEffect } from 'react'
import { authServices } from '../services/auth/authServices'
import LoadedForm from '../components/LoadedForm'

export default function PageLogout() {
  useEffect(() => {
    authServices.logout()
    window.location.href = '/'
  })

  return (
        <LoadedForm></LoadedForm>
  )
}
