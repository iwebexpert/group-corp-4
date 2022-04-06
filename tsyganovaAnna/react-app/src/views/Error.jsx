import React from 'react'
import { Typography } from '@mui/material'

import Dashboard from '../components/Dashboard'

export default function Error() {
  return (
    <Dashboard>
      <Typography component="h3" variant="h5" gutterBottom>
        Page not found
      </Typography>
    </Dashboard>
  )
}
