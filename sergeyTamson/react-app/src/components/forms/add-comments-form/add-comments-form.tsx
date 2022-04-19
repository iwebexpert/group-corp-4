import React, { useState } from 'react'
import './styles.scss'
import { Box, Button, Stack, TextField, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { commentsAddFetch } from '../../../actions/comments'

export type AddCommentsFormProps = {
  user: any
  pageId: number
}

const AddCommentsForm = ({ user, pageId }: AddCommentsFormProps) => {
  const [commentsTitle, setCommentsTitle] = useState('')
  const [commentsContent, setCommentsContent] = useState('')

  const theme = useTheme()
  const dispatch = useDispatch()

  const handleCommentsTitleChange = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    setCommentsTitle(event.target.value)
  }

  const handleCommentsContentChange = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    setCommentsContent(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const title = data.get('title')
    const content = data.get('content')

    dispatch(commentsAddFetch(content, title, pageId, user.id))
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
          Написать комментарий
        </Button>
      </Stack>
    </Box>
  )
}

export default AddCommentsForm
