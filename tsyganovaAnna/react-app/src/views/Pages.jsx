import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import PageForm from '../components/Pages/PageForm'
import PageTable from '../components/Pages/PageTable'
import CommentForm from '../components/Comments/CommentForm'
import Dashboard from '../components/Dashboard'
import Loading from '../components/Loading/Loading'
import { authService } from '../services/auth/authService'
import { getAllPage, addPage, editPage, deletePage } from '../store/actions/pageActions'
import { isDev } from '../helpers/devProdMode'

export default function Pages() {
  const [openEditPage, setEditPage] = useState({})
  const [isVisibleAdd, setIsVisibleAdd] = useState(false)
  const [isVisibleEdit, setIsVisibleEdit] = useState(false)
  const [isVisibleCommentAdd, setIsVisibleCommentAdd] = useState(false)

  const isAdmin = authService.isAdmin
  const dispatch = useDispatch()
  const pages = useSelector((state) => state.page.data)
  const loading = useSelector((state) => state.page.loading)

  useEffect(() => {
    if (isDev()) setTimeout(() => dispatch(getAllPage()), 1000)
    else dispatch(getAllPage())
  }, [])

  const handlePageToogle = (pageId) => {
    const findedItem = pages.find((item) => item.id === pageId)
    setEditPage(findedItem)
    setIsVisibleEdit(!isVisibleEdit)
  }
  const onEditPage = (data) => {
    setEditPage(data)
    dispatch(editPage(data))
    setIsVisibleEdit(!isVisibleEdit)
  }
  const onDeletePage = (id) => dispatch(deletePage(id))
  const onAddPage = (data) => {
    dispatch(addPage(data))
    openPageForm()
  }

  const openPageForm = () => {
    setIsVisibleAdd(!isVisibleAdd)
  }
  const openPageEditForm = () => {
    setIsVisibleEdit(!isVisibleEdit)
  }
  const openCommentForm = () => {
    setIsVisibleCommentAdd(!isVisibleCommentAdd)
  }
  return (
    <>
      {isAdmin && (
        <div>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openPageForm} sx={{ mr: 2 }}>
            Add new page
          </Button>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={openCommentForm}>
            Add new comment
          </Button>
        </div>
      )}
      <Dashboard>
        {loading ? (
          <Loading />
        ) : (
          <PageTable
            pages={pages}
            showButton={isAdmin}
            onDeletePage={onDeletePage}
            onEditPage={handlePageToogle}
          />
        )}
      </Dashboard>
      {isVisibleEdit && (
        <PageForm
          close={openPageEditForm}
          page={openEditPage}
          isOpen={isVisibleEdit}
          onChangeData={onEditPage}
        />
      )}
      {isVisibleAdd && (
        <PageForm close={openPageForm} isOpen={isVisibleAdd} onChangeData={onAddPage} />
      )}
      {isVisibleCommentAdd && <CommentForm close={openCommentForm} isOpen={isVisibleCommentAdd} />}
    </>
  )
}
