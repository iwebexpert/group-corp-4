import React, {useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import { authServices } from '../services/auth/authServices'

import { getCurrentUser } from '../services/auth/authServices'


import styled from "@emotion/styled"
import { PageItem } from './PagesTableMUI'
import { PagePayload } from 'actions/page'

const ButtonCustom = styled(FormControl)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

type PagesFormProps={
  dataInitial: PageItem | null
  onSave: (data: PagePayload)=>void
  onReset: ()=>void
  onAdd: (data: PagePayload)=>void
}


export const dataSelectContent = ''

export default function PagesForm({ dataInitial, onSave, onReset, onAdd }:PagesFormProps) {

  const user: UserType = authServices.currentUserValue

  const [pageId, setPageId] = useState<string | null>(null)
  const [pagesUrl, setPagesUrl] = useState<string>('')
  const [pagesTitle, setPagesTitle] = useState<string>('')
  const [pagesContent, setPagesContent] = useState<string>('')
  const [pagesUserName, setPagesUserName]= useState<string>(user.name)
  const [pagesUserId, setPagesUserId] = useState<string>(user.id)

  useEffect(() => {
    if (dataInitial) {
      setPageId(dataInitial.id)
      setPagesUrl(dataInitial.url)
      setPagesTitle(dataInitial.title)
      setPagesContent(dataInitial.content)
      setPagesUserId(dataInitial.userId)
      setPagesUserName(dataInitial.userName)
    } else {
      setPageId(null)
      setPagesUrl('')
      setPagesTitle('')
      setPagesContent('')
      setPagesUserId(user.id)
      setPagesUserName(user.name)
    }
  }, [dataInitial])

  const handlePagesUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPagesUrl(event.target.value)
  }

  const handlePagesTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPagesTitle(event.target.value)
  }

  const handlePagesContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPagesContent(event.target.value)
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
      userName: pagesUserName,
    }

    if (pageId) {
      onSave(data)
    } else {
      setPagesUserId(user.id)
      setPagesUserName(user.name)
      onAdd(data)
      setPagesUrl('')
      setPagesTitle('')
      setPagesContent('')
      setPagesUserName('')
      setPagesUserId('')
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
            <Button className="btn-create" onClick={handleSubmit} value="Создать новую страницу">
              Создать новую страницу
            </Button>
          )}
        </FormControl>
      </Box>
    </>
  )
}
