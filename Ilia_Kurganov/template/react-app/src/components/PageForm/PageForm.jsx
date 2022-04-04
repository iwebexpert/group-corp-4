import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import './PageForm.scss'
import { Box, Button, TextField } from '@mui/material'

const PageForm = ({ addRows }) => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [content, setContent] = useState('')

  const handleOnClick = () => {
    if (url && title && userId && content) {
      const page = {
        id: uuidv4(),
        url: url,
        title: title,
        userId: userId,
        content: content,
      }
      addRows(page)
      setUrl('')
      setTitle('')
      setUserId('')
      setContent('')
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        id="url"
        label="URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="userid"
        label="UserId"
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(+(e.target.value))}
      />
      <TextField
        id="content-multiline"
        label="Content"
        multiline
        rows={4}
        disabled={title ? false : true}
        placeholder={!title ? 'Заполните поле title' : 'Content'}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" onClick={handleOnClick}>
        Send
      </Button>
    </Box>
  )
}

PageForm.propTypes = {
  addRows: PropTypes.func,
}

export default PageForm
