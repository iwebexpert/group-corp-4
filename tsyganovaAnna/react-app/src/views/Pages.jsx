import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Typography, Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Loading from '../components/Loading/Loading'
import Dashboard from '../components/Dashboard'
import PageForm from '../components/Pages/PageForm'
import TableBlock from '../components/TableBlock'
import { authService } from '../services/auth/authService'
import { getAllPage, addPage, editPage, deletePage } from '../store/actions/pageActions'
import { isDev } from '../helpers/devProdMode'

export default function Pages() {
  const [openEditPage, setEditPage] = useState({})
  const [isShowAdd, setIsShowAdd] = useState(false)
  const [isShowEdit, setIsShowEdit] = useState(false)

  const isAdmin = authService.isAdmin
  const dispatch = useDispatch()

  const pages = useSelector((state) => state.page.data)
  const loading = useSelector((state) => state.page.loading)

  useEffect(() => {
    if (isDev()) {
      setTimeout(() => dispatch(getAllPage()), 1000)
    } else {
      dispatch(getAllPage())
    }
  }, [])

  const handlePageToogle = (pageId) => {
    const findedItem = pages.find((item) => item.id === pageId)
    setEditPage(findedItem)
    setIsShowEdit(!isShowEdit)
  }

  const onDeletePage = (id) => dispatch(deletePage(id))

  const onAddPage = (data) => {
    dispatch(addPage(data))
    openAddForm()
  }
  const openAddForm = () => {
    setIsShowAdd(!isShowAdd)
  }

  const openEditForm = () => {
    setIsShowEdit(!isShowEdit)
  }
  const onEditPage = (data) => {
    setEditPage(data)
    dispatch(editPage(data))
    setIsShowEdit(!isShowEdit)
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Dashboard>
          <Typography component="h3" variant="h5">
            List of created pages
          </Typography>
          <Divider sx={{ mt: 1, mb: 2 }} />
          {isAdmin && (
            <Button variant="outlined" startIcon={<AddIcon />} onClick={openAddForm} sx={{ mr: 2 }}>
              Add new page
            </Button>
          )}
          <TableBlock
            titles={['Url', 'Title', 'Content']}
            showFields={['url', 'title', 'content']}
            fields={pages}
            showButton={isAdmin}
            onDeletePage={onDeletePage}
            onEditPage={handlePageToogle}
          />
        </Dashboard>
      )}
      {isShowEdit && (
        <PageForm
          close={openEditForm}
          page={openEditPage}
          isOpen={isShowEdit}
          onChangeData={onEditPage}
        />
      )}
      {isShowAdd && <PageForm close={openAddForm} isOpen={isShowAdd} onChangeData={onAddPage} />}
    </>
  )
}
