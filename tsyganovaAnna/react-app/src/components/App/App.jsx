import React, { useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Header from '../Header/Header'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import PageForm from '../Pages/PageForm.jsx'
import PageTable from '../Pages/PageTable.jsx'
import Loading from '../Loading/Loading.jsx'
import CommentForm from '../Comments/CommentForm.jsx'

CommentForm
import './App.sass'

export default function App() {
  let NODE_ENV = process.env.NODE_ENV
  const [pages, setPages] = useState([])
  const [editPage, setEditPage] = useState({})
  const [isVisibleAdd, setIsVisibleAdd] = useState(false)
  const [isVisibleEdit, setIsVisibleEdit] = useState(false)
  const [isVisibleCommentAdd, setIsVisibleCommentAdd] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const getListPages = () => {
    fetch('/api/pages')
      .then((response) => response.json())
      .then((data) => {
        setPages(data)
      })
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    if (NODE_ENV === 'development') {
      setLoading(!isLoading)
      setTimeout(() => getListPages(), 1000)
    } else {
      getListPages()
    }
  }, [])

  const handlePageToogle = (pageId) => {
    const findedItem = pages.find((item) => item.id === pageId)
    setEditPage(findedItem)
    setIsVisibleEdit(!isVisibleEdit)
  }
  const onEditPage = (data) => {
    setEditPage(data)
    setPages(
      pages.map((item) => {
        if (item.id === data.id) return data
        else return item
      }),
    )
    setIsVisibleEdit(!isVisibleEdit)
  }

  const deletePage = (id) => {
    const filteredItems = pages.filter((item) => item.id !== id)
    setPages(filteredItems)
  }

  const onAddPage = (data) => {
    setPages(pages.concat([data]))
    openPageForm()
  }
  const openPageForm = () => {
    setIsVisibleAdd(!isVisibleAdd)
  }
  const openCommentForm = () => {
    setIsVisibleCommentAdd(!isVisibleCommentAdd)
  }
  return (
    <>
      <Header />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          height: '100vh',
          overflow: 'auto',
        }}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div>
              <Button variant="outlined" startIcon={<AddIcon />} onClick={openPageForm}>
                Add new page
              </Button>
              <Button variant="outlined" startIcon={<AddIcon />} onClick={openCommentForm}>
                Add new comment
              </Button>
            </div>
            <Paper>
              <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
                <PageTable pages={pages} onDeletePage={deletePage} onEditPage={handlePageToogle} />
              </Container>
            </Paper>
            {isVisibleEdit && (
              <PageForm isOpen={isVisibleEdit} page={editPage} onChangeData={onEditPage} />
            )}
            {isVisibleAdd && (
              <PageForm close={openPageForm} isOpen={isVisibleAdd} onChangeData={onAddPage} />
            )}
            {isVisibleCommentAdd && (
              <CommentForm close={openCommentForm} isOpen={isVisibleCommentAdd} />
            )}
          </Container>
        )}
      </Box>
    </>
  )
}
