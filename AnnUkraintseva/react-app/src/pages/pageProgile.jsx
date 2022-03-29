import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import styled from '@emotion/styled'

export function PageProfile() {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  let flag = true
  if (typeof currentUser === 'object') {
    flag = true
  } else {
    flag = false
  }


  return (
    <ContainerWrapper>
      {/* К следующему дз сделаю красивее */}
      <Typography component="h2">Мой профиль</Typography>
      <Typography component="h4">Имя пользователя: {currentUser.name}</Typography>
      <Typography component="h4">Email: {currentUser.email}</Typography>
      <Typography component="h4">Роль: {currentUser.role}</Typography>
    </ContainerWrapper>
  )
}
