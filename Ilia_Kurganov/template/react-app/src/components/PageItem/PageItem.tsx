import React from 'react'
import PageWrapper from '../../pages/PageWrapper'
import { Typography } from '@mui/material'
import { PagePayload } from '../../actions/actionsPages'
import { CommentPayload } from '../../actions/actionsComments'
import CommentBox from '../CommentsBox/CommentBox'
import { UsersPayload } from '../../actions/actionsUsers'

type PageItemProps = {
  page: PagePayload
  paramId?: string
  userAuthorize?: UserType
  comments?: Array<CommentPayload>
  withCommentsBox?: boolean
  users?: Array<UsersPayload>
}

export function PageItem({
  page,
  paramId,
  userAuthorize,
  comments,
  withCommentsBox = false,
  users
}: PageItemProps) {
  return (
    <PageWrapper>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Номер страницы:
      </Typography>
      <Typography component="p" color="primery" gutterBottom>
        {page.id}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Название страницы:
      </Typography>
      <Typography component="p" color="primery" gutterBottom>
        {page.title}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Урл страницы:
      </Typography>
      <Typography component="p" color="primery" gutterBottom>
        {page.url}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Контент:
      </Typography>
      <Typography component="p" color="primery" gutterBottom>
        {page.content}
      </Typography>
      <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 1 }}>
        Номер пользователя:
      </Typography>
      <Typography component="p" color="primery" gutterBottom>
        {page.userId}
      </Typography>
      {withCommentsBox && (
        <CommentBox comments={comments} userAuthorize={userAuthorize} paramId={paramId} users={users}/>
      )}
    </PageWrapper>
  )
}

export default PageItem
