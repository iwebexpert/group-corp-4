import { Container, CssBaseline, Grid, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import MenuComponent from '../components/Menu/MenuComponent'

const drawerWidth = 240

export default function Layout() {
  const [open, setOpen] = useState()

  const toggleDrawer = () => {
    let menu = localStorage.getItem('menu')
    if (menu === 'true') {
      setOpen(false)
      localStorage.setItem('menu', 'false')
    } else {
      setOpen(true)
      localStorage.setItem('menu', 'true')
    }
  }
  useEffect(() => {
    let menu = localStorage.getItem('menu')
    if (!menu) {
      localStorage.setItem('menu', 'true')
      setOpen(true)
    } else {
      if (menu === 'true') {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <HeaderComponent open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
        <MenuComponent open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, paddingTop: '50px' }}>
          <Grid container spacing={3}>
            <Outlet />
          </Grid>
        </Container>
      </Box>
    </>
  )
}
