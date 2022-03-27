import { ThemeProvider } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import CreatePageForm from '../create-page-form/create-page-form.jsx'
import Header from '../header/header.jsx'
import Loading from '../loading/loading.jsx'
import PageTable from '../page-table/page-table.jsx'
import { darkTheme, lightTheme } from './styles.js'
import './styles.scss'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light')
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
      process.env.NODE_ENV === 'development' ? 10000 : 0,
    )
  }, [])

  return (
    <ThemeProvider theme={isDarkMode === 'dark' ? darkTheme : lightTheme}>
      <div>
        <Header toggleThemeMode={setIsDarkMode} />

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
      </div>
    </ThemeProvider>
  )
}

export default App
