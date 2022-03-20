import React, { useState, useEffect } from 'react'

import Header from './Header'
import PagesForm from './PagesForm'
import PagesTable from './PagesTable'
import PagesFormChange from './PagesFormChange'
import LoadedForm from './LoadedForm'

import './App.css'

export default function App() {
  const [pages, setPages] = useState([])
  const [changesPages, setChangePages] = useState({})
  const [loadPages, setLoadPages] = useState(true)
  const [changePagesVisible, setChangePagesVisible]=useState(true)

  let NODE_ENV = process.env.NODE_ENV

  const addPages = (data) => {
    setPages(pages.concat([data]))
  }

  const deletePages = (id) => {
    const filteredItems = pages.filter((item) => item.id !== id)
    setPages(filteredItems)
  }

  const editOnPagesObjectFunc = (object) => {
    setChangePages(object)
    setPages(
      pages.map((obj) => {
        if (obj.id === object.id) {
          return object
        } else {
          return obj
        }
      }),
    )
    setChangePages({})
    setChangePagesVisible(false) 
    
  }

  const getElemForChange = (elem) => {
    setChangePages(elem)
    setChangePagesVisible(true)
    
  }

  const changeBack=()=>{
    setChangePagesVisible(false)
  }

  const changeLoadPages = () => {
    setLoadPages(!loadPages)
  }

  const addPagesFromServer = () => {
    fetch('/api/pages')
      .then((response) => response.json())
      .then((data) => setPages(data))
    changeLoadPages()
  }

  useEffect(() => {
    if (NODE_ENV === 'development') {
      setTimeout(addPagesFromServer, 1000)
    } else {
      addPagesFromServer()
    }
  }, [])
  return (
    <div>
      
      {loadPages && NODE_ENV === 'development' ? (<LoadedForm />) : 
      (
        <>
        <Header></Header>
          
          
          {changesPages.id && changePagesVisible ?<PagesFormChange
            changesPages={changesPages}
            changeBack={changeBack}
            editOnPagesObjectFunc={editOnPagesObjectFunc}
          /> :(<>
          <PagesTable
            pages={pages}
            onDeletePages={deletePages}
            getElemForChange={getElemForChange}
          />          
          <PagesForm onAddPages={addPages} />
          </>)}
        </>
      )}
    </div>
  )
}
