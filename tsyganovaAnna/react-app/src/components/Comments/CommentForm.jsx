import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { Box, Button } from '@mui/material'

import Input from '../Fields/Input.jsx'
import { authService } from '../../services/auth/authService'

export default function CommentForm({ comment, onChangeData, pageId }) {
  const [content, setComment] = useState(comment?.content)
  const [emptyComment, setEmptyComment] = useState(false)
  const handleCommentChange = (event) => setComment(event.target.value)

  const currentUser = authService.currentUser
  const commentData = {
    id: comment.id ? comment.id : uuidv4(),
    content: content,
    userId: comment.userId ? comment.userId : currentUser.id,
    pageId: pageId,
  }

  const handleSubmit = () => {
    if (!content || content.length === 0) {
      setEmptyComment(true)
    } else {
      setEmptyComment(false)
      setComment('')
      onChangeData(commentData)
    }
  }

  return (
    <Box sx={{ mt: 1, mb: 1 }}>
      <Input
        label="Content"
        value={content}
        multiline
        required
        error={emptyComment}
        helperText={emptyComment ? 'Comment is empty' : ''}
        onChange={handleCommentChange}
      />
      <Button onClick={handleSubmit} variant="outlined" sx={{ mt: 1, mr: 1, pt: 1 }}>
        Save
      </Button>
    </Box>
  )
}
CommentForm.defaultProps = {
  comment: {},
  onChangeData: () => {},
  pageId: null,
}

CommentForm.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number || PropTypes.string,
    content: PropTypes.string,
  }),
  onChangeData: PropTypes.func.isRequired,
  pageId: PropTypes.number,
}
