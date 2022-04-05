import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import PageForm from '../components/Pages/PageForm'
import PageTable from '../components/Pages/PageTable'
import CommentForm from '../components/Comments/CommentForm'
import Dashboard from '../components/Dashboard'
import { authService } from '../services/auth/authService'

export default function Pages() {
  let NODE_ENV = process.env.NODE_ENV
  const [pages, setPages] = useState([])
  const [editPage, setEditPage] = useState({})
  const [isVisibleAdd, setIsVisibleAdd] = useState(false)
  const [isVisibleEdit, setIsVisibleEdit] = useState(false)
  const [isVisibleCommentAdd, setIsVisibleCommentAdd] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const isAdmin = authService.isAdmin
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
      {isAdmin && (
        <div>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openPageForm}>
            Add new page
          </Button>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openCommentForm}>
            Add new comment
          </Button>
        </div>
      )}
      <Dashboard>
        <PageTable
          pages={pages}
          showButton={isAdmin}
          onDeletePage={deletePage}
          onEditPage={handlePageToogle}
        />
      </Dashboard>
      {isVisibleEdit && (
        <PageForm isOpen={isVisibleEdit} page={editPage} onChangeData={onEditPage} />
      )}
      {isVisibleAdd && (
        <PageForm close={openPageForm} isOpen={isVisibleAdd} onChangeData={onAddPage} />
      )}
      {isVisibleCommentAdd && <CommentForm close={openCommentForm} isOpen={isVisibleCommentAdd} />}
    </>
  )
}
