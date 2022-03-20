import React, { useEffect, useState } from 'react'
import PageTable from './PageTable/PageTable'
import PageForm from './PageForm/PageForm'
import { Loader } from './Loader/Loader'


import './App.scss'

export const App = () => {
  const [tableRows, setTableRows] = useState([])
  const [fetching, setFetching] = useState(false)  

  useEffect(()=> {
    const mode = process.env.NODE_ENV
    const timer = mode === 'development'? 0 : 1000

    let waitFetch = setTimeout(()=>{   
      timer && setFetching((state) => !state)
      fetch('/api/pages')
          .then((respone) => respone.json())
          .then((data) => setTableRows(data)) 
    }, timer)

    timer && setFetching((state) => !state)  

    return () => {
      clearTimeout(waitFetch)
    }
  }, [])

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
        {fetching ? <Loader/> : 
          <PageTable tableRows={tableRows} delitePage={delitePage} />
        }
        <PageForm addRows={addRows} />
      </div>
    </>
  )
}
