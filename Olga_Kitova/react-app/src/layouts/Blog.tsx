import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import Header from 'components/Header/Header'
import Footer from 'components/Footer'
import { useTheme } from '@mui/material/styles'
import { Outlet } from 'react-router'

export default function Blog() {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ paddingBottom: '2rem' }} maxWidth="lg">
        <Header />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
      <br />
    </ThemeProvider>
  )
}
