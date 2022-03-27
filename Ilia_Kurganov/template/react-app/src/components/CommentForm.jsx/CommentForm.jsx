import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'

export const PageForm = ({ addComment }) => {
  const [pageId, setPageId] = useState('')
  const [userId, setUserId] = useState('')
  const [content, setContent] = useState('')

  const handleOnClick = () => {
    if (pageId && userId && content) {
      const page = {
        id: uuidv4(),
        pageId: pageId,
        userId: userId,
        content: content,
      }
      addComment(page)
      setPageId('')
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
        id="padeId"
        label="Page Id"
        variant="outlined"
        value={pageId}
        onChange={(e) => setPageId(e.target.value)}
      />
      <TextField
        id="userId"
        label="User Id"
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        id="content"
        label="Content"
        multiline
        rows={4}
        placeholder={'Заполните поле'}
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
  addRows: PropTypes.func.isRequired,
}

