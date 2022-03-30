import React from 'react'
import { Box } from '@mui/material'
import Header from '../header/header'
import { Outlet } from 'react-router'
import Copyright from '../copyright/copyright'

const Layout = ({ setIsDarkMode }) => {
  return (
    <Box>
      <Header toggleThemeMode={setIsDarkMode} />

      <Box>
        <Outlet />
      </Box>

      <Copyright />
    </Box>
  )
}

export default Layout
