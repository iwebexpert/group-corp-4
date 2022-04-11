import React from 'react'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import { Box, Button} from '@mui/material'
import { useForm } from 'react-hook-form'
import CommentsInputText from './CommentsInputText'
import {addCommentsFetch} from 'actions/actionComments'



export default function CommentsForm({userId, pageId}) {
    const dispatch = useDispatch()

    const {
        handleSubmit,
        reset, 
        formState: {errors},
        control
    } = useForm()


  const onSubmit = (data) => {

    const dataToSend = {
        pageId,
        userId,
        content: data.comments
    }
    dispatch(addCommentsFetch(dataToSend))
    reset({CommentsInputText: ""})
  }


  return (
  <Box component="form" validate onSubmit={handleSubmit(onSubmit)}>
        <CommentsInputText
        control={control}
        name="comments"
        type="text"
        label="Add comments..."
        defaulValue=""
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ mt: 2, mb: 2 }} >
          Submit
        </Button>
      </Box>      
  )
}

//Props types
CommentsForm.defaultProps = {
  pageId: 0,
  userId: 0
}
CommentsForm.propTypes = {
  pageId: PropTypes.number,
  userId: PropTypes.number
}