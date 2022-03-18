import React, { useState } from 'react'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [fields, setFields] = useState()
  const [pages, setPages] = useState([])

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
    <div>
      <FormComponent savePage={savePage} fields={fields} setFields={setFields} />
      <TableComponent pages={pages} removePage={removePage} changePage={changePage} />
    </div>
  )
}
