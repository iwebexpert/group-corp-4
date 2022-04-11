import React from 'react'
import { Paper } from '@mui/material'
import CreatePagesForm from 'components/CreatePagesForm/CreatePagesForm'
import WrapperPages from './WrapperPages'

export default function PageAddPage({userId}) {
  return (
    <WrapperPages>
               <Paper
                 sx={{
                   p: 2, display: 'flex', flexDirection: 'column', height: 600,
                 }}>
                       <CreatePagesForm userId={userId} /> 
                   </Paper>
    </WrapperPages>
  )
}
