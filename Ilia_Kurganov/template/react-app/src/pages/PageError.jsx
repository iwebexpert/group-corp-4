import { Typography } from '@mui/material'
import React from 'react'
import PageWrapper from './PageWrapper'

function PageError() {
  return (
    <PageWrapper>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Ошибка
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        Данной странички не существует
      </Typography>
    </PageWrapper>
  )
}

export default PageError
