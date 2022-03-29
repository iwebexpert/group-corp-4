import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { authService } from '../services/auth/authService'
import WrapperPages from './WrapperPages'

export default function PageLogout() {
  useEffect(() => {
    authService.logout()
    window.location.href = '/'
  })
  return (
    <WrapperPages>
      <Typography variant="body2"> Вы вышли из профиля </Typography>
    </WrapperPages>
  )
}
