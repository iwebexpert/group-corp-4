import { Typography } from '@mui/material'
import React from 'react'
import PageWrapper from './PageWrapper'

function PageProfile(props) {
  const { id, name, email, role } = props
  return (
    <PageWrapper>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Мой профиль
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {id}
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {name}
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {email}
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {role}
      </Typography>
    </PageWrapper>
  )
}

export default PageProfile
