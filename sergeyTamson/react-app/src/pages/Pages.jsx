import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageFetch } from '../actions/page'
import CreatePageForm from '../components/forms/create-page-form/create-page-form'
import Loading from '../components/loading/loading'
import PageTable from '../components/page-table/page-table'

const PagesPage = () => {
  const page = useSelector((state) => state.page.data)

  const user = useSelector((state) => state.user.data)

  // const handleEditPage = (data) => {
  //   setPage((prev) => [...prev.filter((item) => item.id !== data?.id), data])
  // }

  return (
    <Container>
      {!page.length && <Loading />}

      {page.length !== 0 && (
        <div className="content">
          {user?.role === 'admin' && (
            <div className="content__item content__form">
              <CreatePageForm />
            </div>
          )}

          <div className="content__item">
            <PageTable page={page} />
          </div>
        </div>
      )}
    </Container>
  )
}

export default PagesPage
