import React, { useEffect, useState } from 'react'
import { ThemeContextProvider, ThemeContextConsumer } from '../../contexts/ThemeContext'

import PageForm from '../PageForm/PageForm.jsx'
import PageEdit from '../PageEdit/PageEdit.jsx'
import PageTable from '../PageTable/PageTable.jsx'
import Loading from '../Loading/Loading.jsx'

import './App.sass'

export default function App() {
  let NODE_ENV = process.env.NODE_ENV
  const [pages, setPages] = useState([])
  const [editPage, setEditPage] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const getListPages = () => {
    fetch('/api/pages')
      .then((response) => response.json())
      .then((data) => {
        setPages(data)
      })
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    if (NODE_ENV === 'development') {
      setLoading(!isLoading)
      setTimeout(() => getListPages(), 1000)
    } else {
      getListPages()
    }
  }, [])

  const handlePageToogle = (pageId) => {
    const findedItem = pages.find((item) => item.id === pageId)
    setEditPage(findedItem)
    setIsVisible(!isVisible)
  }
  const onEditPage = (data) => {
    setEditPage(data)
    setPages(
      pages.map((item) => {
        if (item.id === data.id) return data
        else return item
      }),
    )
    setIsVisible(!isVisible)
  }

  const deletePage = (id) => {
    const filteredItems = pages.filter((item) => item.id !== id)
    setPages(filteredItems)
  }

  const onAddPage = (data) => {
    setPages(pages.concat([data]))
  }
  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {(context) => (
          <div className={'app app_' + context.theme}>
            {isLoading ? (
              <Loading />
            ) : (
              <main>
                {isVisible && <PageEdit page={editPage} onChangeData={onEditPage} />}
                <PageTable pages={pages} onDeletePage={deletePage} onEditPage={handlePageToogle} />
                <PageForm onChangeData={onAddPage} />
              </main>
            )}
          </div>
        )}
      </ThemeContextConsumer>
    </ThemeContextProvider>
  )
}
