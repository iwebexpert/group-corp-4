import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Typography from '@mui/material/Typography'
import { getCurrentUser } from '../services/auth/authServices'
import { Helmet } from 'react-helmet'

export function PageProfile() {
  const currentUser = getCurrentUser()

  return (
    <ContainerWrapper>
      <Helmet>
        <title>Мой профиль</title>
      </Helmet>
      <Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
        Мой профиль
      </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Имя пользователя: {currentUser.name}
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Email: {currentUser.email}
        </Typography>
        <Typography variant="h5" align="left" color="text.secondary" paragraph>
          Роль: {currentUser.role}
        </Typography>
    </ContainerWrapper>
  )
}
