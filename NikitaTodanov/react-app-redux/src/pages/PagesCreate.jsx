import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import PageTableContainer from '../containers/PageTableContainer'
import PageFormContainer from '../containers/PageFormContainer'

export default function PagesCreate({roles, privileges}) {
  console.log('createPage', roles, privileges)
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <PageFormContainer  roles={roles} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <PageTableContainer roles={roles}  />
              </Paper>
            </Grid>
          </Grid>
        </Container>
  )
}
