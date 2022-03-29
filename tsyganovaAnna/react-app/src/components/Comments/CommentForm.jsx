import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '../Fields/Input.jsx'

export default function CommentForm({ isOpen, close, comment, onChangeData }) {
  const [content, setPaageContent] = useState(comment ? comment.content : '')
  const handleCommentContentChange = (event) => setPaageConcommenttent(event.target.value)

  const commentData = {
    id: comment.id ? comment.id : uuidv4(),
    content: content,
    userId: comment.userId ? comment.userId : uuidv4(),
  }

  const handleSubmit = () => {
    setPaageContent('')
    onChangeData(commentData)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    p: 2,
  }

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Input
          label="Content"
          value={content}
          rows={4}
          multiline
          onChange={handleCommentContentChange}
        />
        <Button onClick={handleSubmit} variant="outlined">
          Save
        </Button>
      </Box>
    </Modal>
  )
}
CommentForm.defaultProps = {
  isOpen: false,
  close: () => {},
  comment: {},
  onChangeData: () => {},
}

CommentForm.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    id: PropTypes.number || PropTypes.string,
    content: PropTypes.string,
  }),
  onChangeData: PropTypes.func.isRequired,
}
