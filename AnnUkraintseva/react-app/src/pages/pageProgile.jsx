import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Typography from '@mui/material/Typography'



export function PageProfile() {
  const currentUser = JSON.parse(localStorage.getItem('user'))

  return (
    <ContainerWrapper>
      {/* К следующему дз сделаю красивее */}
      <Typography component="h2" sx={{fontSize :20, m:2}}>Мой профиль</Typography>
      <Typography component='div' sx={{border:2, borderColor:'secondary', m:2, p:3, borderRadius: 2}}>
      <Typography component="div">Имя пользователя: {currentUser.name}</Typography>
      <Typography component="div">Email: {currentUser.email}</Typography>
      <Typography component="div">Роль: {currentUser.role}</Typography>
      </Typography>
      
    </ContainerWrapper>
  )
}
