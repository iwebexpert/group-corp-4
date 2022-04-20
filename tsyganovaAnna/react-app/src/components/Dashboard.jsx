import React from 'react'
import { Paper, Container } from '@mui/material'

export default function Dashboards({ children }) {
  const style = { mt: 2, mb: 2 }
  const width = 'lg'
  return (
    <Paper sx={{ maxWidth: 'lg' }}>
      <Container maxWidth={width} sx={style}>
        {children}
      </Container>
    </Paper>
  )
}
