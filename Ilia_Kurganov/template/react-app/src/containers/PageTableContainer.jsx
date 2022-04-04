import React from 'react'
import PageTable from '../components/PageTable/PageTable'
import { useDispatch, useSelector } from 'react-redux'
import { pageDelete } from './../actions/actions'

function PageTableContainer() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.page.data)
  const role = useSelector((state) => state.page.role)
  const delitePage = (key) => {
    dispatch(pageDelete(key))
  }

  return <PageTable tableRows={data} delitePage={delitePage} role={role} />
}

export default PageTableContainer
