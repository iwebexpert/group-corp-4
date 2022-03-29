import React from 'react'
import { Typography } from '@mui/material'
import PageWrapper from './PageWrapper'

function PageBranches() {
  return (
    <PageWrapper>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Филиалы
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        Много филиалов
      </Typography>
    </PageWrapper>
  )
}

export default PageBranches
