import React from 'react'
import { useState, useEffect } from 'react'
import CreatePageForm from '../create-page-form/create-page-form.jsx'
import Header from '../header/header.jsx'
import Loading from '../loading/loading.jsx'
import PageTable from '../page-table/page-table.jsx'
import './styles.scss'

const App = () => {
  const [page, setPage] = useState([])

  const onAddPage = (data) => {
    setPage(page.concat([data]))
  }

  const handleEditPage = (data) => {
    setPage((prev) => [...prev.filter((item) => item.id !== data?.id), data])
  }

  console.log('NODE_ENV', process.env.NODE_ENV)

  useEffect(() => {
    window.setTimeout(
      () => {
        fetch('/api/pages')
          .then((res) => res.json())
          .then((data) => {
            setPage(data)
          })
      },
      process.env.NODE_ENV === 'development' ? 2000 : 0,
    )
  }, [])

  return (
    <div>
      <Header />

      {!page.length && <Loading />}

      {page.length !== 0 && (
        <div className="content">
          <div className="content__item">
            <CreatePageForm onAddPage={onAddPage} />
          </div>

          <div className="content__item">
            <PageTable page={page} setPage={setPage} handleEditPage={handleEditPage} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
