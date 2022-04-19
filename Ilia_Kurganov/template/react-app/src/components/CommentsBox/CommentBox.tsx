import { Box, Typography } from '@mui/material'
import React from 'react'
import { CommentPayload } from 'src/actions/actionsComments'
import { UsersPayload } from 'src/actions/actionsUsers'
import PageCommentForm from '../PageCommentForm/PageCommentForm'
import Avatar from '@mui/material/Avatar'

type CommentBoxProps = {
  paramId?: string
  userAuthorize?: UserType
  comments?: Array<CommentPayload>
  users?: Array<UsersPayload>
}

export function CommentBox({ userAuthorize, paramId, comments, users }: CommentBoxProps) {
  return (
    <Box component="div" sx={{ mt: 5 }}>
      {userAuthorize && paramId && <PageCommentForm pageId={paramId} />}
      {comments && comments.length > 0 ? (
        <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 5 }}>
          Комментарии:
        </Typography>
      ) : (
        <Typography component="h6" variant="h6" color="primery" gutterBottom sx={{ mt: 5 }}>
          Нет коментарьев
        </Typography>
      )}
      {comments &&
        users &&
        comments.map((comment) => {
          const commentAuthor = users.find((item) => item.id === comment.userId)
          return (
            <Box
              key={comment.id}
              component="div"
              sx={{ p: 1, paddingLeft: 2, mt: 3, border: '1px dashed gray' }}
            >
              <Box sx={{ display: 'flex', alignItems:'center', mb:3 }}>
                <Avatar>{commentAuthor?.id}</Avatar>
                <Box sx={{ ml: 2 }}>
                  <Typography mb={1}>
                    {commentAuthor?.name}({commentAuthor?.role})
                  </Typography>
                  <Typography mb={1}>{commentAuthor?.email}</Typography>
                </Box>
              </Box>
              <Typography>{comment.content}</Typography>
            </Box>
          )
        })}
    </Box>
  )
}

export default CommentBox
