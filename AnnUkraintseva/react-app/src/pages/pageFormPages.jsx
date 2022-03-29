import React, { useState, useEffect } from 'react'
import PagesTable from '../components/PagesTable'
import PagesForm from '../components/PagesForm'
import PagesFormChange from '../components/PagesFormChange'
import CommentForm from '../components/CommentForm'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Copyright from '../components/Copyright'

export default function pageFormPages() {
  const [pages, setPages] = useState([])
  const [changesPages, setChangePages] = useState({})
  const [loadPages, setLoadPages] = useState(true)
  const [changePagesVisible, setChangePagesVisible] = useState(true)

  // let NODE_ENV = process.env.NODE_ENV

  const addPages = (data) => {
    setPages(pages.concat([data]))
  }

  const deletePages = (id) => {
    const filteredItems = pages.filter((item) => item.id !== id)
    setPages(filteredItems)
  }

  const editOnPagesObjectFunc = (object) => {
    setChangePages(object)
    setPages(
      pages.map((obj) => {
        if (obj.id === object.id) {
          return object
        } else {
          return obj
        }
      }),
    )
    setChangePages({})
    setChangePagesVisible(false)
  }

  const getElemForChange = (elem) => {
    setChangePages(elem)
    setChangePagesVisible(true)
  }

  const changeBack = () => {
    setChangePagesVisible(false)
  }

  const changeLoadPages = () => {
    setLoadPages(!loadPages)
  }

  useEffect(() => {
    fetch('/api/pages')
      .then((response) => response.json())
      .then((data) => setPages(data))
  }, [])

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* ------------------------------------------- */}
              {changesPages.id && changePagesVisible ? (
                <PagesFormChange
                  changesPages={changesPages}
                  changeBack={changeBack}
                  editOnPagesObjectFunc={editOnPagesObjectFunc}
                />
              ) : (
                <>
                  <PagesForm onAddPages={addPages} />
                </>
              )}
            </Paper>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* <Orders /> */}
              <PagesTable
                pages={pages}
                onDeletePages={deletePages}
                getElemForChange={getElemForChange}
              />
            </Paper>
          </Grid>
          {/* <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <CommentForm />
            </Paper>
          </Grid> */}
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
  )
}
