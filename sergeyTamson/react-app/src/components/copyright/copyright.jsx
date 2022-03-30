import { Link, Typography } from '@mui/material'
import React from 'react'

const Copyright = () => {
  return (
    <Typography mt={15}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
