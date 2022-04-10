import React, { useState, useEffect, Fragment } from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Copyright from '../components/Copyright'

import { useTheme } from '@mui/material/styles'

import { ThemeModeContext } from '../contexts/ThemeContextMUI'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'

import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { onePageFetch } from '../actions/page'
import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import CommentForm from '../components/CommentForm'

import { commentFetch } from '../actions/comments'
import CommentUser from './CommentUser'

import { authServices } from '../services/auth/authServices'


const FavoriteIconCustom = styled(FavoriteIcon)`
  cursor: pointer;
`

const FavoriteBorderIconCustom = styled(FavoriteBorderIcon)`
  cursor: pointer;
`

const TypographyCustom = styled(Typography)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme()

export default function LayoutPage() {

  const privileges = authServices.userRole
  const [isAdmin, setIsAdmin] = useState('')
  useEffect(() => {
    setIsAdmin(privileges)
  }, [privileges])


  let location = useLocation()
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.oneData)
  useEffect(() => {
    const url = location.pathname.split('/')[2]
    dispatch(onePageFetch(url))
  }, [location])

  const onePage = page[0]

  const theme = useTheme()

  const colorMode = React.useContext(ThemeModeContext)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Tooltip
          title={(theme.palette.mode !== 'light' ? 'Светлая ' : 'Темная ') + 'тема оформления'}
        >
          <IconButton color="inherit" onClick={colorMode.toogleColorMode}>
            {theme.palette.mode !== 'light' ? <LightModeIcon /> : <NightlightRoundIcon />}
          </IconButton>
        </Tooltip>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          {onePage && (
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {onePage.title}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
                sx={{ border: 2, borderRadius: 2 }}
              >
                {onePage.content}
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="text.secondary"
                paragraph
                sx={{ marginTop: 5 }}
              >
                Автор поста: {onePage.userName}
              </Typography>
            </Container>
          )}
        </Box>
        <CommentUser onePage={onePage}/>
       
        <Container>
          {(isAdmin ==='admin' || isAdmin==='user') && <Paper sx={{ padding: 10 }}>
              <CommentForm onePage={onePage} />
            
          </Paper>}
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography align="center" sx={{ margin: 5 }}>
          <Button variant="contained">
            <Link to="/pagesLink" style={{ textDecoration: 'none', color: 'black' }}>
              <TypographyCustom>Вернуться назад</TypographyCustom>
            </Link>
          </Button>
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  )
}
