import React from 'react'
import { Paper, Container } from '@mui/material'

export default function Dashboards({ children /*, style, width */ }) {
  const style = { mt: 2, mb: 2 }
  const width = 'lg'
  return (
    <Paper sx={{ maxWidth: 'lg', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth={width} sx={style}>
        {children}
      </Container>
    </Paper>
  )
}
