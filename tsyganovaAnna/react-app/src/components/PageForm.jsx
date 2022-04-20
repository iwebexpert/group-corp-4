import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Box, Typography, Button } from '@mui/material'

import Input from './Fields/Input'
import { authService } from '../services/auth/authService'

export default function PageForm({ isOpen, close, page, onChangeData }) {
  const [url, setUrl] = useState(page?.url)
  const [title, setTitle] = useState(page?.title)
  const [content, setContent] = useState(page?.content)
  const [emptyUrl, setEmptyUrl] = useState(false)
  const [emptyTitle, setEmptyTitle] = useState(false)

  const handleContent = (event) => setContent(event.target.value)

  const handleChange = (event) => {
    const name = eval(event.target.name)
    const value = event.target.value
    name(value)
  }

  const validateCheck = () => {
    fieldGroup.forEach((field) => {
      const name = eval(field.errorName)
      if (!field?.value || field?.value?.length === 0) {
        name(true)
      } else {
        name(false)
      }
    })
    if (url && title) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    const pageData = {
      url: url,
      title: title,
      content: content,
      userId: page.userId ? page.userId : authService.currentUser.id,
    }
    if (page) pageData.id = page.id

    setUrl('')
    setTitle('')
    setContent('')

    onChangeData(pageData)
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

  const fieldGroup = [
    {
      label: 'Url',
      value: url,
      name: 'setUrl',
      required: true,
      onChange: handleChange,
      errorName: 'setEmptyUrl',
      error: emptyUrl,
      helperText: emptyUrl ? 'Url is empty' : '',
    },
    {
      label: 'Title',
      value: title,
      name: 'setTitle',
      required: true,
      onChange: handleChange,
      errorName: 'setEmptyTitle',
      error: emptyTitle,
      helperText: emptyTitle ? 'Title is empty' : '',
    },
  ]

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Typography variant="h6" component="h6" sx={{ color: 'gray' }}>
          {JSON.stringify(page) === '{}' ? 'Create page' : 'Edit page'}
        </Typography>
        {fieldGroup.map((page) => (
          <Input
            key={page.label}
            name={page.name}
            label={page.label}
            value={page.value}
            required={page.required}
            onChange={page.onChange}
            error={page.error}
            helperText={page.helperText}
          />
        ))}
        <Input
          label="Content"
          value={content}
          rows={4}
          multiline
          disabled={!title}
          onChange={handleContent}
        />
        <Button onClick={validateCheck} variant="outlined" sx={{ mt: 2, mr: 2 }}>
          Save
        </Button>
        <Button onClick={close} variant="text" sx={{ mt: 2 }}>
          Canсel
        </Button>
      </Box>
    </Modal>
  )
}
PageForm.defaultProps = {
  isOpen: false,
  close: () => {},
  page: {},
  onChangeData: () => {},
}

PageForm.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
  page: PropTypes.shape({
    id: PropTypes.number || PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    userId: PropTypes.number,
  }),
  onChangeData: PropTypes.func.isRequired,
}
