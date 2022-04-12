import { Typography } from '@mui/material'
import React from 'react'
import PageWrapper from './PageWrapper'
import Helmet from 'react-helmet'

function PageProfile(props) {
  const { id, name, email, role } = props.userInfo

  return (
    <PageWrapper>
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Мой профиль
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 2 }}>
        Id пользователя:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {id}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 2 }}>
        Имя:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {name}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 2 }}>
        Email:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {email}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 2 }}>
        Роль:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {role}
      </Typography>
    </PageWrapper>
  )
}

export default PageProfile
