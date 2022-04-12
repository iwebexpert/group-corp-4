import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import PageWrapper from './PageWrapper'
import { authService } from '../services/auth/authService'
import { Helmet } from 'react-helmet'

function PageComments() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Comments</title>
      </Helmet>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Комментарии
      </Typography>
    </PageWrapper>
  )
}

export default PageComments
