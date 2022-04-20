import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Helmet } from 'react-helmet'

import Copyright from '../components/Copyright'
import PagesTableContainers from '../containers/PagesTableContainers'
import PagesFormContainers from '../containers/PagesFormContainers'

import { authServices } from '../services/auth/authServices'

export default function PageFormPages() {
  const privileges = authServices.userRole

  return (
    <>
      <Helmet>
        <title>Работа со страницами</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {privileges === 'admin' ? (
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <>
                  <PagesFormContainers />
                </>
              </Paper>
            </Grid>
          ) : null}

          {/* ---------------------- */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <PagesTableContainers />
            </Paper>
          </Grid>
          {/* ---------------------- */}
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
  )
}
