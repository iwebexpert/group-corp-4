import React from 'react'
import { Box, Typography, Divider } from '@mui/material'

import AvatarIcon from '../AvatarIcon'
export default function CommentBlock({ comment }) {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '2rem', mb: 1 }}>
        <AvatarIcon name={comment?.user?.name} style={{ backgroundColor: '#7b9d20' }} />
        <Typography variant="h6">{comment?.user?.name}</Typography>
      </Box>
      <Typography>{comment?.content}</Typography>
      <Divider sx={{ mb: 1 }} />
    </>
  )
}
