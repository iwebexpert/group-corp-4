import React from 'react'
import { useState } from 'react'
import CreatePageForm from './create-page-form/create-page-form.jsx'
import PageTable from './page-table/page-table.jsx'

const App = () => {
  const [page, setPage] = useState([])

  const onAddPage = (data) => {
    setPage(page.concat([data]))
  }

  const handleEditPage = (data) => {
    setPage((prev) => [...prev.filter((item) => item.id !== data?.id), data])
  }

  return (
    <div>
      <CreatePageForm onAddPage={onAddPage} />
      <PageTable page={page} setPage={setPage} handleEditPage={handleEditPage} />
    </div>
  )
}

export default App
