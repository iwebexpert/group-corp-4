import React, { useState, useEffect } from 'react'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer, ThemeContextProvider } from './Theme/ThemeContext'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import './App.css'

export default function App() {
  const [fields, setFields] = useState()
  const [pages, setPages] = useState([])

  const getPages = () => {
    fetch('http://localhost:9001/pages')
      .then((response) => response.json())
      .then((json) => setPages(json))
  }

  const time = () => {
    setTimeout(() => {
      getPages()
    }, 1000)
  }

  useEffect(() => {
    time()
  }, [])

  console.log(pages)
  const savePage = (fields) => {
    if (fields.id) {
      setPages(
        pages.map((page) => {
          if (page.id !== fields.id) {
            return page
          } else {
            return fields
          }
        }),
      )
    } else {
      setPages([...pages, { id: uuidv4(), ...fields }])
    }
  }

  const removePage = (id) => {
    setPages(pages.filter((page) => page.id !== id))
  }
  const changePage = (id) => {
    setFields(pages.filter((page) => page.id === id)[0])
  }
  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {(context) => (
          <div className={'wrapper-style-' + context.theme}>
            <HeaderComponent />
            <FormComponent savePage={savePage} fields={fields} setFields={setFields} />
            <TableComponent pages={pages} removePage={removePage} changePage={changePage} />
          </div>
        )}
      </ThemeContextConsumer>
    </ThemeContextProvider>
  )
}
