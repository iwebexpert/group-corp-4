import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Toolbar, Tooltip, IconButton, Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Loading from '../../components/Loading/Loading'
import Dashboard from '../../components/Dashboard'
import PageForm from '../../components/PageForm'
import TableBlock from '../../components/TableBlock'
import { authService } from '../../services/auth/authService'
import { getAllPage, addPage, editPage, deletePage } from '../../store/actions/pageActions'
import { isDev } from '../../helpers/devProdMode'

export default function PagesList() {
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
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
            <Typography sx={{ flex: '1 1 100%' }} component="h3" variant="h5">
              Pages
            </Typography>
            {isAdmin && (
              <Tooltip title="Create a new page">
                <IconButton onClick={openAddForm} sx={{ color: '#7b9d20' }}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
            )}
          </Toolbar>
          <Divider sx={{ mb: 2 }} />
          <TableBlock
            titles={['Url', 'Title', 'Content']}
            showFields={['url', 'title', 'content']}
            linkFields={['url']}
            fields={pages}
            showEdit={isAdmin}
            showDelete={isAdmin}
            onDelete={onDeletePage}
            onEdit={handlePageToogle}
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
