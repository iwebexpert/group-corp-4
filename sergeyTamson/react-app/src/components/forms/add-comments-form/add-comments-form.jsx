import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import './styles.scss'
import { Box, Button, Stack, TextField, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { commentsAddFetch } from '../../../actions/comments'

const AddCommentsForm = ({ onClose, textButton, user, pageId }) => {
  const [commentsTitle, setCommentsTitle] = useState('')
  const [commentsContent, setCommentsContent] = useState('')

  const theme = useTheme()
  const dispatch = useDispatch()

  const handleCommentsTitleChange = (event) => {
    setCommentsTitle(event.target.value)
  }

  const handleCommentsContentChange = (event) => {
    setCommentsContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const title = data.get('title')
    const content = data.get('content')

    dispatch(commentsAddFetch(content, title, pageId, user.id))
  }

  const handleClose = () => {
    onClose(false)
  }

  return (
    <Box
      component="form"
      className={'form form__' + theme.palette.mode}
      onSubmit={handleSubmit}
      noValidate
    >
      <Stack gap={3}>
        <Stack gap={2}>
          <TextField
            fullWidth
            type="text"
            label="Заголовок"
            defaultValue={commentsTitle}
            onChange={handleCommentsTitleChange}
            color="primary"
            variant="outlined"
            id="title"
            name="title"
          />

          <TextField
            fullWidth
            type="text"
            label="Текст"
            defaultValue={commentsContent}
            onChange={handleCommentsContentChange}
            color="primary"
            variant="outlined"
            id="content"
            name="content"
          />
        </Stack>

        <Button type="submit" color="primary">
          {textButton}
        </Button>
      </Stack>
    </Box>
  )
}

AddCommentsForm.defaultProps = {
  onAddPage: () => {},
  item: {},
  textButton: 'Написать комментарий',
  onClose: () => {},
}

AddCommentsForm.propTypes = {
  onAddPage: PropTypes.func,
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
    }),
  ),
  textButton: PropTypes.string,
  onClose: PropTypes.func,
}

export default AddCommentsForm
