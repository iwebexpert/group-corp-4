import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const CommentsTable = () => {
  const commentsArray = useSelector((state) => state.comments.data)

  return (
    <Stack>
      {commentsArray.map((item) => (
        <Box>
          <Box>{item.title}</Box>
          <Box>{item.content}</Box>
          <Box>{item.userId}</Box>
        </Box>
      ))}
    </Stack>
  )
}

export default CommentsTable
