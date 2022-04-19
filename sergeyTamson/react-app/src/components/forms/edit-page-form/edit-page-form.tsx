import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import './styles.scss'
import { Button, TextField, useTheme, Stack, Box } from '@mui/material'
import { editPageFetch } from '../../../actions/page'
import { useDispatch } from 'react-redux'

export type EditPageFormProps = {
  onClose: (value: boolean) => void
  item: any
}

const EditPageForm = ({ item, onClose }: EditPageFormProps) => {
  const [pageUrl, setPageUrl] = useState(item?.url)
  const [pageTitle, setPageTitle] = useState(item?.title)
  const [pageContent, setPageContent] = useState(item?.content)
  const [pageUserId, setPageUserIdt] = useState(item?.userId)

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
      id: item?.id || uuidv4(),
      url: pageUrl,
      title: pageTitle,
      content: pageContent,
      userId: pageUserId,
    }

    dispatch(editPageFetch(data))
    onClose(false)
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
          изменить данные страницы
        </Button>

        <Button color="secondary" type="button" onClick={handleClose}>
          Закрыть
        </Button>
      </Stack>
    </Box>
  )
}

export default EditPageForm
