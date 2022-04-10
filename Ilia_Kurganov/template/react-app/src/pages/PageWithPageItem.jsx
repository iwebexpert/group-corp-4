import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import PageCommentForm from '../components/PageCommentForm/PageCommentForm'
import PageWrapper from './PageWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { onePageFetch } from '../actions/actionsPages'
import { authService } from './../services/auth/authService'
import { Loader } from '../components/Loader/Loader'
import { commentsFetch } from './../actions/actionsComments'
import { Box } from '@mui/system'
import { Helmet } from 'react-helmet'

function PageWithPageItem() {
  const params = useParams()
  const dispatch = useDispatch()
  const page = [...useSelector((state) => state.page.data)].find((item) => item.id === params.id)
  const comments = useSelector((state) => state.comments.data)
  const userAuthorize = authService.currentUserValue

  useEffect(() => {
    dispatch(commentsFetch(params.id))
    if (page) {
      return
    }
    dispatch(onePageFetch(params.id))
  }, [])

  console.log('comments', comments)

  if (!page) {
    return (
      <PageWrapper>
        <Loader />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Pages</title>
      </Helmet>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Номер страницы:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {page.id}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Название страницы:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {page.title}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Урл страницы:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {page.url}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Контент:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {page.content}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Номер пользователя:
      </Typography>
      <Typography component="p" variant="p" color="primery" gutterBottom>
        {page.userId}
      </Typography>
      <Box component="div" sx={{ mt: 5 }}>
        {userAuthorize && <PageCommentForm pageId={params.id} />}
        <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 5 }}>
          Комментарии:
        </Typography>
        {comments.map((comment, i) => (
          <Box key={i} component="div" sx={{ p: 5, mt: 3, border: '1px dashed gray' }}>
            <Typography>{comment.id}</Typography>
            <Typography>{comment.content}</Typography>
          </Box>
        ))}
      </Box>
    </PageWrapper>
  )
}

export default PageWithPageItem
