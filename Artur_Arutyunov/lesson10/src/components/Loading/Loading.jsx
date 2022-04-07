import { CircularProgress, Paper } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <Paper sx={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Paper>
  )
}
