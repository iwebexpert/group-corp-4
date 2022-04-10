import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import styled from '@emotion/styled'

const ButtonCustom = styled(FormControl)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

export const dataSelectContent = ''

export function PagesFormChange({ dataInitial, onSave, onReset, onAdd }) {
  const [pagesID, setPagesId] = useState('')
  const [pagesUrl, setPagesUrl] = useState('')
  const [pagesTitle, setPagesTitle] = useState('')
  const [pagesContent, setPagesContent] = useState('')
  const [pagesUserId, setPagesUserId] = useState(1)

  useEffect(() => {
    setPagesId(dataInitial.id)
    setPagesUrl(dataInitial.url)
    setPagesTitle(dataInitial.title)
    setPagesContent(dataInitial.content)
    setPagesUserId(dataInitial.userId)
  }, [dataInitial])

  const handlePagesUrlChange = (event) => {
    setPagesUrl(event.target.value)
  }

  const handlePagesTitleChange = (event) => {
    setPagesTitle(event.target.value)
  }

  const handlePagesContentChange = (event) => {
    setPagesContent(event.target.value)
  }

  const handlePagesUserIdChange = (event) => {
    setPagesUserId(event.target.value)
  }

  const handleSubmit = () => {
    const changeData = {
      id: pagesID,
      url: pagesUrl,
      title: pagesTitle,
      content: pagesContent,
      userId: pagesUserId,
    }
    editOnPagesObjectFunc(changeData)

    setPagesUrl('')
    setPagesTitle('')
    setPagesContent('')
    setPagesUserId(1)
  }

  const getPagesContent = () => {
    if (dataSelectContent != pagesTitle) {
      return true
    } else {
      return false
    }
  }

  const getPagesContentValues = () => {
    if (dataSelectContent != pagesTitle) {
      return pagesContent
    } else {
      return ''
    }
  }

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <Typography color="primary" components="h2">
          Редактирование страницы
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="pages-url"></InputLabel>
          <TextField
            label="URL"
            id="pages-url"
            value={pagesUrl}
            onChange={handlePagesUrlChange}
          ></TextField>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="pages-title"></InputLabel>
          <TextField
            label="Заголовок"
            id="pages-title"
            value={pagesTitle}
            onChange={handlePagesTitleChange}
          ></TextField>
        </FormControl>
        <FormControl fullWidth sx ={{m:1}}>
            <InputLabel id="pages-content"></InputLabel>
            <TextField
              label="Контент"
              disabled={!getPagesContent()}
              id="pages-content"
              value={pagesContent}
              onChange={handlePagesContentChange}
            ></TextField>
          </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="pages-user-id"></InputLabel>
          <Input
            label="Пользователь"
            type="number"
            min="1"
            id="pages-user-id"
            value={pagesUserId}
            onChange={handlePagesUserIdChange}
          />
        </FormControl>
        <ButtonCustom  sx={{ m: 1 }} >
          <Button  label="Редактировать" onClick={handleSubmit} value="Редактировать" sx={{ border: 3, borderColor:'primary' }}>Редактировать</Button>
          <Button
           sx={{ border:3 ,borderColor:'primary'}}
            label="Вернуться назад"
            onClick={() => changeBack()}
            value="Вернуться назад"
          >Вернуться назад</Button>
        </ButtonCustom>
      </Box>
    </>
  )
}

PagesFormChange.defaultProps = {
  changesPages: {},
  editOnPagesObjectFunc: () => {},
}

PagesFormChange.propTypes = {
  changesPages: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    userId: PropTypes.number.isRequired,
  }),

  editOnPagesObjectFunc: PropTypes.func,
}
