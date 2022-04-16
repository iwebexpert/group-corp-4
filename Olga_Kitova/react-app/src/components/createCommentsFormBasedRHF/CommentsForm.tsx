import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import CommentsInputText from './CommentsInputText'
import { addCommentsFetch } from 'actions/actionComments'

type CommentsFormType = {
  userId: Multiple
  pageId: Multiple
}

interface ObjectLiteralData {
  [key: string]: string
}

export default function CommentsForm({ userId, pageId }: CommentsFormType) {
  const dispatch = useDispatch()

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm()

  const onSubmit = (data: ObjectLiteralData) => {
    const dataToSend = {
      pageId,
      userId,
      content: data.comments,
    }
    dispatch(addCommentsFetch(dataToSend))
    reset({ CommentsInputText: '' })
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <CommentsInputText control={control} name="comments" type="text" label="Add comments..." />
      <Button type="submit" variant="outlined" sx={{ mt: 2, mb: 2 }}>
        Submit
      </Button>
    </Box>
  )
}
