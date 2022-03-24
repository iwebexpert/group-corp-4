import React, { useEffect, useState } from 'react'
import { ThemeContextProvider, ThemeContextConsumer } from '../../contexts/ThemeContext'

import PageForm from '../PageForm/PageForm.jsx'
import PageEdit from '../PageEdit/PageEdit.jsx'
import PageTable from '../PageTable/PageTable.jsx'

import './App.sass'

export default function App() {
  const [pages, setPages] = useState([])
  const [editPage, setEditPage] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const handlePageToogle = (pageId) => {
    const findedItem = pages.find((item) => item.id === pageId)
    setEditPage(findedItem)
    setIsVisible(!isVisible)
  }
  const onEditPage = (data) => {
    setEditPage(data)
    setPages(
      pages.map((item) => {
        console.log('item: ', item)
        if (item.id === data.id) return data
        else return item
      }),
    )
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    fetch('/api/pages')
      .then((response) => response.json())
      .then((data) => {
        setPages(data)
      })
  }, [])
  const deleteEquipment = (id) => {
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
            <main>
              {isVisible && <PageEdit page={editPage} onChangeData={onEditPage} />}
              <PageTable
                pages={pages}
                onDeletePage={deleteEquipment}
                onEditPage={handlePageToogle}
              />
              <PageForm onChangeData={onAddPage} />
            </main>
          </div>
        )}
      </ThemeContextConsumer>
    </ThemeContextProvider>
  )
}
