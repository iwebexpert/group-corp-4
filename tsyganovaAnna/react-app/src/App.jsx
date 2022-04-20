import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Container, Box } from '@mui/material'

import LeftMenu from './components/LeftMenu'
import Header from './components/Header'
import './App.sass'

export default function App() {
  const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false)

  function handleClick(status) {
    setIsOpenLeftMenu(status)
  }

  return (
    <>
      <Header HandleClick={handleClick} />
      <LeftMenu isOpenLeftMenu={isOpenLeftMenu} HandleClick={handleClick} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
          height: 'calc(100vh - 65px)',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
