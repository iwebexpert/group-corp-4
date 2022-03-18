import React, { useState } from 'react'

import PagesForm from './PagesForm'
import PagesTable from './PagesTable'

export default function App() {
  const [pages, setPages] = useState([])

  const addPages = (data) => {
    console.log(data)
    setPages(pages.concat([data]))
    console.log(pages)
  }

  const deletePages = (id) => {
    console.log('Delete item', id)
    const filteredItems = pages.filter((item) => item.id !== id)
    console.log('filterItem', filteredItems)
    setPages(filteredItems)
  }

  const changePages = (id, callback) => {
    const changeItems = pages.filter((item) => item.id === id)
    console.log('changeItems', changeItems)
    callback(changeItems)
  }

  return (
    <div>
      <PagesTable pages={pages} onDeletePages={deletePages} onChangePages={changePages} />
      <PagesForm onAddPages={addPages} />
    </div>
  )
}
