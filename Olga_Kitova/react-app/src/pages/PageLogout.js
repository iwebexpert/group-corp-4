import React, { useEffect } from 'react'
import {Helmet} from "react-helmet"
import { Typography } from '@mui/material'
import { authService } from 'services/auth/authService'
import WrapperPages from './WrapperPages'

export default function PageLogout() {
  useEffect(() => {
    authService.logout()
    window.location.href = '/'
  })
  return (
        <>
      <Helmet>
        <title>Log Out</title>
    </Helmet>
    <WrapperPages>
          <Typography variant="body2">You are logged out </Typography>
        </WrapperPages>
        </>

  )
}
