import React, { useState } from 'react'
import PageTable from './PageTable/PageTable'
import PageForm from './PageForm/PageForm'

import './App.scss'

export const App = () => {
  const [tableRows, setTableRows] = useState([])

  const addRows = (row) => {
    setTableRows((rows) => {
      return [...rows, row]
    })
  }

  const delitePage = (key) => {
    const filterPage = tableRows.filter((page) => page.id !== key)
    setTableRows(filterPage)
  }

  return (
    <>
      <div className='inner'>
        <PageTable tableRows={tableRows} delitePage={delitePage} />
        <PageForm addRows={addRows} />
      </div>
    </>
  )
}
