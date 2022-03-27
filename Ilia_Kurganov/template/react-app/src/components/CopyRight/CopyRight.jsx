import React from 'react'
import { Link, Typography } from '@mui/material'

export const CopyRight = ( props ) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Test Project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
