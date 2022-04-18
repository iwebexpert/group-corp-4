import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { number, string } from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../reducers'

export type CommentsArrayProps = {
  id: number
  title: string
  content: string
  userId: number
}

const CommentsTable = () => {
  const commentsArray = useSelector((state: AppState) => state.comments.data)

  return (
    <Stack>
      {commentsArray.map((item: CommentsArrayProps) => (
        <Box key={item.id}>
          <Box>{item.title}</Box>
          <Box>{item.content}</Box>
          <Box>{item.userId}</Box>
        </Box>
      ))}
    </Stack>
  )
}

export default CommentsTable
