import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import PageWrapper from './PageWrapper'

function PageError() {
  return (
    <PageWrapper>
       <Helmet>
        <title>Error Page</title>
      </Helmet>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Ошибка
      </Typography>
      <Typography component="p" color="primery" gutterBottom>
        Данной странички не существует
      </Typography>
    </PageWrapper>
  )
}

export default PageError
