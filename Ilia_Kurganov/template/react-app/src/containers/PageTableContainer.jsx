import React, { useEffect } from 'react'
import PageTable from '../components/PageTable/PageTable'
import { useDispatch, useSelector } from 'react-redux'
import { pageDelete, pageFetch } from '../actions/actionsPages'
import { authService } from './../services/auth/authService'

function PageTableContainer() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.page.data)
  const role = authService.currentUserValue.role

  const delitePage = (key) => {
    dispatch(pageDelete(key))
  }
  
  return <PageTable tableRows={data} delitePage={delitePage} role={role} />
}

export default PageTableContainer
