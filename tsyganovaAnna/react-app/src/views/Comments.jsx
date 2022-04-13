import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Typography, Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Loading from '../components/Loading/Loading'
import Dashboard from '../components/Dashboard'
import TableBlock from '../components/TableBlock'
import CommentForm from '../components/Comments/CommentForm'
import { authService } from '../services/auth/authService'
import {
  getAllComments,
  addComment,
  editComment,
  deleteComment,
} from '../store/actions/commentActions'
import { isDev } from '../helpers/devProdMode'

export default function Comments() {
  const [openEditComment, setEditComment] = useState({})
  const [isShowAdd, setIsShowAdd] = useState(false)
  const [isShowEdit, setIsShowEdit] = useState(false)

  const isAdmin = authService.isAdmin
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comment.data)
  const loading = useSelector((state) => state.comment.loading)

  useEffect(() => {
    if (isDev()) {
      setTimeout(() => dispatch(getAllComments()), 1000)
    } else {
      dispatch(getAllComment())
    }
  }, [])

  const handleCommentToogle = (pageId) => {
    const findedItem = comments.find((item) => item.id === pageId)
    setEditComment(findedItem)
    setIsShowEdit(!isShowEdit)
  }

  const onDeleteComment = (id) => dispatch(deleteComment(id))
  const openAddForm = () => {
    setIsShowAdd(!isShowAdd)
  }
  const onAddComment = (data) => {
    dispatch(addComment(data))
    openAddForm()
  }

  const openEditForm = () => {
    setIsShowEdit(!isShowEdit)
  }
  const onEditComment = (data) => {
    setEditComment(data)
    dispatch(editComment(data))
    setIsShowEdit(!isShowEdit)
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Dashboard>
          <Typography component="h3" variant="h5" sx={{ mb: 3 }}>
            List of created comment
          </Typography>
          <Divider sx={{ mt: 1, mb: 2 }} />
          {isAdmin && (
            <Button variant="outlined" startIcon={<AddIcon />} onClick={openAddForm}>
              Add new comment
            </Button>
          )}
          <TableBlock
            titles={['Content']}
            showFields={['content']}
            fields={comments}
            showButton={isAdmin}
            onDeleteComment={onDeleteComment}
            onEditComment={handleCommentToogle}
          />
        </Dashboard>
      )}
      {isShowEdit && (
        <CommentForm
          close={openEditForm}
          page={openEditComment}
          isOpen={isShowEdit}
          onChangeData={onEditComment}
        />
      )}
      {isShowAdd && (
        <CommentForm close={openAddForm} isOpen={isShowAdd} onChangeData={onAddComment} />
      )}
    </>
  )
}
