import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

export default function PageError() {
  return (
    <ContainerWrapper>
      <Helmet>
        <title>Ошибка</title>
      </Helmet>
      <Typography align="center" color="primary">
        Error 404
      </Typography>
    </ContainerWrapper>
  )
}
