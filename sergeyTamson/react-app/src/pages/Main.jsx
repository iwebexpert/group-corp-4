import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePageForm from '../components/forms/create-page-form/create-page-form'
import Loading from '../components/loading/loading'
import PageTable from '../components/page-table/page-table'

const MainPage = () => {
  const [page, setPage] = useState([])

  const onAddPage = (data) => {
    setPage(page.concat([data]))
  }

  const handleEditPage = (data) => {
    setPage((prev) => [...prev.filter((item) => item.id !== data?.id), data])
  }

  useEffect(() => {
    window.setTimeout(
      () => {
        fetch('/api/pages')
          .then((res) => res.json())
          .then((data) => {
            setPage(data)
          })
      },
      process.env.NODE_ENV === 'development' ? 1000 : 0,
    )
  }, [])

  return (
    <Container>
      {!page.length && <Loading />}

      {page.length !== 0 && (
        <div className="content">
          <div className="content__item content__form">
            <CreatePageForm onAddPage={onAddPage} />
          </div>

          <div className="content__item">
            <PageTable page={page} setPage={setPage} handleEditPage={handleEditPage} />
          </div>
        </div>
      )}
    </Container>
  )
}

export default MainPage
