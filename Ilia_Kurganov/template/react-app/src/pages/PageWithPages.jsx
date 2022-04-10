import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid, Paper, useTheme } from '@mui/material'
import { Loader } from '../components/Loader/Loader'
import { CopyRight } from '../components/CopyRight/CopyRight'
import PageFormContainer from '../containers/PageFormContainer'
import PageTableContainer from '../containers/PageTableContainer'
import { Helmet } from 'react-helmet'
import { pagesFetch } from '../actions/actionsPages'
import { authService } from './../services/auth/authService';

export const PageWithPages = (props) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const isLoading = useSelector((state) => state.page.isLoading)
  const role = authService.currentUserValue.role

  useEffect(() => {
    dispatch(pagesFetch())
  }, [])

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {role === 'admin' ? (
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 440,
              }}
            >
              <PageFormContainer />
            </Paper>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              background:
                theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            }}
          >
            {isLoading ? <Loader /> : <PageTableContainer />}
          </Paper>
        </Grid>
      </Grid>
      <CopyRight sx={{ pt: 4 }} />
    </Container>
  )
}
