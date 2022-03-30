import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'

function PageWrapper({ children }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: "85%" }}>
      <Grid container spacing={3} sx={{flex: '1 0 auto'}}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </Paper>
        </Grid>
      </Grid>
      <CopyRight sx={{ pt: 4, flex: '0 0 auto' }} />
    </Container>
  )
}

export default PageWrapper
