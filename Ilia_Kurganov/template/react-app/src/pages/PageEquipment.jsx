import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Paper, Toolbar, useTheme } from '@mui/material'
import { PageForm } from './../components/CommentForm.jsx/CommentForm'
import PageTable from './../components/PageTable/PageTable'
import { Loader } from './../components/Loader/Loader'
import { CopyRight } from './../components/CopyRight/CopyRight'

function PageEquipment(props) {
  const [fetching, setFetching] = useState(false)
  const [tableRows, setTableRows] = useState([])
  const theme = useTheme()

  useEffect(() => {
    const mode = process.env.NODE_ENV
    const timer = mode === 'development' ? 0 : 1000

    let waitFetch = setTimeout(() => {
      timer && setFetching((state) => !state)
      fetch('/api/pages')
        .then((respone) => {
          console.log(respone)
          return respone.json()
        })
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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {props.role === 'admin' ? (
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
            {fetching ? (
              <Loader />
            ) : (
              <PageTable tableRows={tableRows} delitePage={delitePage} role={props.role} />
            )}
          </Paper>
        </Grid>
      </Grid>
      <CopyRight sx={{ pt: 4 }} />
    </Container>
  )
}

export default PageEquipment
