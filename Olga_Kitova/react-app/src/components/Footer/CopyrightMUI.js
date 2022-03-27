import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function CopyrightMUI(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="primary" href="#">
          CMS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }