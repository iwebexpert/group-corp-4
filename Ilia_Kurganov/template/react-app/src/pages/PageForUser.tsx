import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'reducers/*'
import { pagesFetch } from '../actions/actionsPages'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

function PageForUser() {
  const dispatch = useDispatch()
  const page = useSelector((store: AppState) => store.page.data)

  useEffect(() => {
    dispatch(pagesFetch())
  }, [])

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', height: '85%' }}
    >
      <Helmet>
        <title>Pages</title>
      </Helmet>
      <Typography component="h4" variant="h4" color="primery" gutterBottom>
        Pages
      </Typography>
      <Grid container spacing={10}>
        {page.map((page) => (
          <Grid item xs={4} key={page.id}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 440,
                textDecoration: 'none',
              }}
              component={Link}
              to={`${page.id}`}
              elevation={6}
            >
              <Box>
                <Typography component="p" color="primery" gutterBottom>
                  ID:{page.id}
                </Typography>
                <Typography component="p" variant="h6" color="primery" gutterBottom sx={{ mt: 2 }}>
                  Название страницы:
                </Typography>
                <Typography component="p" color="primery" gutterBottom>
                  {page.title}
                </Typography>
                <Typography component="p" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
                  Урл страницы:
                </Typography>
                <Typography component="p" color="primery" gutterBottom>
                  {page.url}
                </Typography>
                <Typography component="p" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
                  Контент:
                </Typography>
                <Typography component="p" color="primery" gutterBottom>
                  {page.content}
                </Typography>
                <Typography component="p" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
                  Номер пользователя:
                </Typography>
                <Typography component="p" color="primery" gutterBottom>
                  {page.userId}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PageForUser
