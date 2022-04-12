import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import PageWrapper from './PageWrapper'
import { authService } from './../services/auth/authService'
import { Helmet } from 'react-helmet'

function PageLogout() {
  useEffect(() => {
    authService.logout()
    window.location.href = '/'
  }, [])

  return (
    <PageWrapper>
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Выход
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        Ты этого хочешь?
      </Typography>
    </PageWrapper>
  )
}

export default PageLogout
