import React, { Fragment, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

import styled from "@emotion/styled"

const ButtonCustom = styled(FormControl)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`


export const dataSelectContent = ''

export function PagesForm({ dataInitial, onSave, onReset, onAdd }) {
  console.log('datainit', dataInitial)

  const [pageId, setPageId] = useState(null)
  const [pagesUrl, setPagesUrl] = useState('')
  const [pagesTitle, setPagesTitle] = useState('')
  const [pagesContent, setPagesContent] = useState('')
  const [pagesUserId, setPagesUserId] = useState(1)

  useEffect(() => {
    console.log('dataInitial', dataInitial)
    if (dataInitial) {
      setPageId(dataInitial.id)
      setPagesUrl(dataInitial.url)
      setPagesTitle(dataInitial.title)
      setPagesContent(dataInitial.content)
      setPagesUserId(dataInitial.userId)
    } else {
      setPageId(null)
      setPagesUrl('')
      setPagesTitle('')
      setPagesContent('')
      setPagesUserId(1)
    }
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

  const getPagesContent = () => {
    if (dataSelectContent != pagesTitle) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = () => {
    const data = {
      id: pageId ?? uuidv4(),
      url: pagesUrl,
      title: pagesTitle,
      content: pagesContent,
      userId: pagesUserId,
    }

    if (pageId) {
      onSave(data)
    } else {
      onAdd(data)
      setPagesUrl('')
      setPagesTitle('')
      setPagesContent('')
      setPagesUserId(1)
    }
  }

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        {pageId ? (
          <Typography color="primary" component="h2">
            Редактирование страниц
          </Typography>
        ) : (
          <Typography color="primary" component="h2">
            Добавление страниц
          </Typography>
        )}

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="pages-url"></InputLabel>
          <TextField
            placeholder="Введите url"
            label="URL"
            id="pages-url"
            value={pagesUrl}
            onChange={handlePagesUrlChange}
          ></TextField>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="pages-title"></InputLabel>
          <TextField
            placeholder="Введите заголовок"
            label="Заголовок"
            id="pages-title"
            value={pagesTitle}
            onChange={handlePagesTitleChange}
          ></TextField>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="pages-content"></InputLabel>
          <TextField
            placeholder="Введите контент"
            label="Контент"
            disabled={!getPagesContent()}
            id="pages-content"
            value={pagesContent}
            onChange={handlePagesContentChange}
          ></TextField>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, fontSize: 14 }}>
          <InputLabel htmlFor="pagesUserId"></InputLabel>
          <Input
            label="Пользователь"
            type="number"
            min="1"
            id="pagesUserId"
            value={pagesUserId}
            onChange={handlePagesUserIdChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          {pageId ? (
            <ButtonCustom>
              <Button onClick={handleSubmit} value="Редактировать">
                Редактировать
              </Button>
              <Button onClick={onReset} value="Отмена">
                Отмена
              </Button>
            </ButtonCustom>
          ) : (
            <Button onClick={handleSubmit} value="Создать новую страницу">
              Создать новую страницу
            </Button>
          )}
        </FormControl>
      </Box>
    </>
  )
}

PagesForm.defaultProps = {
  onAddPages: () => {},
}

PagesForm.propTypes = {
  onAddPages: PropTypes.func.isRequired,
}
