import React from 'react'
import { Typography } from '@mui/material'
import PageWrapper from './PageWrapper'
import { Helmet } from 'react-helmet'

function PageApp() {
  return (
    <PageWrapper>
       <Helmet>
        <title>About App</title>
      </Helmet>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        О приложении
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        Хорошее приложение
      </Typography>
    </PageWrapper>
  )
}

export default PageApp
