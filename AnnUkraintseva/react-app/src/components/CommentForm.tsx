import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"

import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import { v4 as uuidv4 } from 'uuid'
import { authServices } from '../services/auth/authServices'
import { commentAddFetch, CommentPayload } from '../actions/comments'
import { PagePayload } from 'actions/page'



type CommentFormProps={
  onePage: PagePayload
}
export default function CommentForm({onePage}:CommentFormProps) {

  const dispatch = useDispatch()


  const currentId = authServices.getCurrentId

  const [userId, setUserId]=useState('')

 
  const [commentContent, setCommentContent]=useState('')


  useEffect(()=>{
    setUserId(currentId)
  }, [currentId])


  const handleCommentContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(event.target.value)
  }

  let pageId:string

  {onePage && (pageId = onePage.id)}


  const handleSubmitAddComment = () => {
    const data = {
      id: uuidv4(),
      pageId: pageId,
      userId: userId,
      content: commentContent,
    }
     dispatch(commentAddFetch(data))
    setCommentContent('')
  }

  return ( 
   <>
      <Box sx={{minWidth : 120}}>
        <Typography color='primary' component="h2">
          Добавление комментариев
        </Typography>
        <FormControl fullWidth sx={{m:1}}>
          <InputLabel id="content"></InputLabel>
          <TextField
          placeholder="Оставьте свой комментарий"
          label="Коментарий"
          id="content"
          value={commentContent}
          onChange={handleCommentContentChange}
          >
          </TextField>
        </FormControl>
        <FormControl fullWidth sx={{m:1}}>
          <InputLabel id="button-comments"></InputLabel>
          <Button
               onClick={handleSubmitAddComment}
              value="Добавить комментарий"
            >Добавить комментарий</Button>
        </FormControl>
      </Box>
   </> 
  )
}
