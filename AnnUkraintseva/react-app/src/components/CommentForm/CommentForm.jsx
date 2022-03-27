import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import { v4 as uuidv4 } from 'uuid'




export default function CommentForm() {

  const [commentPagesId, setCommentPagesId]=useState('1')
  const [commentUserId, setCommentUserId]=useState('1')
  const [commentContent, setCommentContent]=useState('')

  const handleCommentPagesIdChange = (event) => {
    setCommentPagesId(event.target.value)
  }

  const handleCommentUserIdChange = (event) => {
    setCommentUserId(event.target.value)
  }

  const handleCommentContentChange = (event) => {
    setCommentContent(event.target.value)
  }

  const handleSubmit = () => {
    const data = {
      id: uuidv4(),
      pagesId: commentPagesId,
      userId: commentUserId,
      content: commentContent,
    }
    onAddComment(data)
    setCommentPagesId('')
    setCommentUserId('')
    setCommentContent('')
  }

  return ( 
   <>
      <Box sx={{minWidth : 120}}>
        <Typography color='primary' component="h2">
          Добавление комментариев
        </Typography>
        <FormControl fullWidth sx ={{m:1}}>
          <InputLabel id="pages-id">Страница</InputLabel>
          <Input
              label ="Страница"
              type="number"
              min="1"
              id="pages-id"
              // value={commentPagesId}
              // onChange={handleCommentPagesIdChange}
            />
        </FormControl>
        <FormControl fullWidth sx ={{m:1}}>
          <InputLabel id="user-id">Пользователь</InputLabel>
          <Input
              label ="Пользователь"
              type="number"
              min="1"
              id="user-id"
              // value={commentUserId}
              // onChange={handleCommentUserIdChange}
            />
        </FormControl>
        <FormControl fullWidth sx={{m:1}}>
          <InputLabel id="content"></InputLabel>
          <TextField
          placeholder="Оставьте свой комментарий"
          label="Коментарий"
          id="content"
          // value={pagesUrl}
          // onChange={handlePagesUrlChange}
          >
          </TextField>
        </FormControl>
        <FormControl fullWidth sx={{m:1}}>
          <InputLabel id="button-comments"></InputLabel>
          <Button
              // onClick={handleSubmit}
              value="Добавить комментарий"
            >Добавить комментарий</Button>
        </FormControl>
      </Box>
   </> 
  )
}
