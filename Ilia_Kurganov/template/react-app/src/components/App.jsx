import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { mainListItems, secondaryListItems } from './ListItem.jsx/ListItem'
import PageTable from './PageTable/PageTable'
import { CopyRight } from './CopyRight/CopyRight'
import { Loader } from './Loader/Loader'
import PageForm from './PageForm/PageForm'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ThemeContextProvider } from '../context/ThemeContext'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

export function App() {
  const isBarOpen = () => {
    const LSBarisOpen = localStorage.getItem('config.bar')
    if (LSBarisOpen) {
      return JSON.parse(LSBarisOpen).isOpen
    }
    return false
  }

  const [open, setOpen] = useState(isBarOpen)

  const toggleDrawer = () => {
    setOpen(!open)
    localStorage.setItem('config.bar', JSON.stringify({ isOpen: !open }))
  }

  const [tableRows, setTableRows] = useState([])
  const [fetching, setFetching] = useState(false)
  const theme = useTheme()
  const { themeToggler } = useContext(ThemeContextProvider)

  useEffect(() => {
    const mode = process.env.NODE_ENV
    const timer = mode === 'development' ? 0 : 1000

    let waitFetch = setTimeout(() => {
      timer && setFetching((state) => !state)
      fetch('/api/pages')
        .then((respone) => respone.json())
        .then((data) => setTableRows(data))
    }, timer)

    timer && setFetching((state) => !state)

    return () => {
      clearTimeout(waitFetch)
    }
  }, [])

  const addRows = (row) => {
    setTableRows((rows) => {
      return [...rows, row]
    })
  }

  const delitePage = (key) => {
    const filterPage = tableRows.filter((page) => page.id !== key)
    setTableRows(filterPage)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Panel
          </Typography>
          <Tooltip title={theme.palette.mode === 'dark' ? 'Dark' : 'Light'} arrow>
            <IconButton color="inherit" onClick={() => themeToggler()}>
              <ThemeSwitcher theme={theme} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 440,
                }}
              >
                <PageForm addRows={addRows} />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  background:
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[300]
                      : theme.palette.grey[700],
                }}
              >
                {fetching ? (
                  <Loader />
                ) : (
                  <PageTable tableRows={tableRows} delitePage={delitePage} />
                )}
              </Paper>
            </Grid>
          </Grid>
          <CopyRight sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  )
}
