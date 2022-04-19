import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Toolbar, Typography, Divider } from '@mui/material'

import Loading from '../../components/Loading/Loading'
import Dashboard from '../../components/Dashboard'
import TableBlock from '../../components/TableBlock'
import { getAllCommentsWithPageAndUser, deleteComment } from '../../store/actions/commentActions'
import { authService } from '../../services/auth/authService'

export default function CommentsList() {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comment.data)
  const loading = useSelector((state) => state.comment.loading)
  const isAdmin = authService.isAdmin
  useEffect(() => dispatch(getAllCommentsWithPageAndUser()), [])

  const onDeleteComment = (id) => dispatch(deleteComment(id))
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Dashboard>
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
            <Typography sx={{ flex: '1 1 100%' }} component="h3" variant="h5">
              Comments
            </Typography>
          </Toolbar>
          <Divider sx={{ mb: 2 }} />
          <TableBlock
            titles={['Content']}
            showFields={['content']}
            fields={comments}
            showDelete={isAdmin}
            onDelete={onDeleteComment}
          />
        </Dashboard>
      )}
    </>
  )
}
