import React, { useState, useEffect } from 'react'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'
import { v4 as uuidv4 } from 'uuid'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import './App.css'
import { Box } from '@mui/system'
import { CssBaseline } from '@mui/material'
import MenuComponent from './Menu/MenuComponent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import { ThemeContextConsumer, ThemeContextProvider } from './Theme/ThemeContext'

const drawerWidth = 240

export default function App() {
  const [fields, setFields] = useState()
  const [pages, setPages] = useState([])
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

  const getPages = () => {
    fetch('http://localhost:9001/pages')
      .then((response) => response.json())
      .then((json) => setPages(json))
  }

  const time = () => {
    setTimeout(() => {
      getPages()
    }, 1000)
  }

  useEffect(() => {
    time()
  }, [])

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

  const savePage = (fields) => {
    if (fields.id) {
      setPages(
        pages.map((page) => {
          if (page.id !== fields.id) {
            return page
          } else {
            return fields
          }
        }),
      )
    } else {
      setPages([...pages, { id: uuidv4(), ...fields }])
    }
  }

  const removePage = (id) => {
    setPages(pages.filter((page) => page.id !== id))
  }
  const changePage = (id) => {
    setFields(pages.filter((page) => page.id === id)[0])
  }
  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {(context) => (
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <HeaderComponent open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
            <MenuComponent open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, paddingTop: '50px' }}>
              <Grid container spacing={3}>
                <FormComponent savePage={savePage} fields={fields} setFields={setFields} />
                <TableComponent pages={pages} removePage={removePage} changePage={changePage} />
              </Grid>
            </Container>
          </Box>
        )}
      </ThemeContextConsumer>
    </ThemeContextProvider>
  )
}
