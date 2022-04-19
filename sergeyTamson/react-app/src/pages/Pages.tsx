import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CreatePageForm from '../components/forms/create-page-form/create-page-form'
import PageTable from '../components/page-table/page-table'
import { AppState } from '../reducers'

const PagesPage = () => {
  const user = useSelector((state: AppState) => state.user.data)

  return (
    <Box className="content">
      {user?.role === 'admin' && (
        <Box className="content__item content__form">
          <CreatePageForm />
        </Box>
      )}

      <Box className="content__item">
        <PageTable />
      </Box>
    </Box>
  )
}

export default PagesPage
