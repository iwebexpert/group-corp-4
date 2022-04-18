import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './styles.scss'
import { Button, TextField, useTheme, Stack, Box } from '@mui/material'
import { pageAdd } from '../../../actions/page'
import { useDispatch } from 'react-redux'

const CreatePageForm = () => {
  const [pageUrl, setPageUrl] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const [pageContent, setPageContent] = useState('')
  const [pageUserId, setPageUserIdt] = useState('')

  const theme = useTheme()
  const dispatch = useDispatch()

  const handlePageUrlChange = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    setPageUrl(event.target.value)
  }

  const handlePageTitleChange = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    setPageTitle(event.target.value)
  }

  const handlePageContentChange = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    setPageContent(event.target.value)
  }

  const handlePageUserIdChange = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    setPageUserIdt(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      id: uuidv4(),
      url: pageUrl,
      title: pageTitle,
      content: pageContent,
      userId: pageUserId,
    }

    dispatch(pageAdd(data))
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
            type="url"
            label="URL"
            defaultValue={pageUrl}
            onChange={handlePageUrlChange}
            color="primary"
            variant="outlined"
            id="url"
            name="url"
          />

          <TextField
            fullWidth
            label="Название"
            defaultValue={pageTitle}
            onChange={handlePageTitleChange}
            color="primary"
            id="name"
            name="name"
          />

          <TextField
            fullWidth
            label="Контент"
            defaultValue={pageContent}
            onChange={handlePageContentChange}
            disabled={!Boolean(pageTitle)}
            color="primary"
            id="content"
            name="content"
          />

          <TextField
            fullWidth
            label="ID пользователя"
            defaultValue={pageUserId}
            onChange={handlePageUserIdChange}
            color="primary"
          />
        </Stack>

        <Button color="primary" type="submit">
          создать страницу
        </Button>
      </Stack>
    </Box>
  )
}

export default CreatePageForm
