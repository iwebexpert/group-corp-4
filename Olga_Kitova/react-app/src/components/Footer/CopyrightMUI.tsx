import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { TypographyProps } from '@mui/system'

export default function CopyrightMUI(props: TypographyProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="primary" href="#">
        CMS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
