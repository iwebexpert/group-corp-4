import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

type WrapperPagesProps = {
  children: React.ReactNode
}

export default function WrapperPages({ children }: WrapperPagesProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>{children}</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
