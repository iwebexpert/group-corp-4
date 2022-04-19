import React from 'react'
import PageForm from '../components/PageForm/PageForm'
import { useDispatch } from 'react-redux'
import { pageAdd, PagePayload } from '../actions/actionsPages'

function PageFormContainer() {
  const dispatch = useDispatch()

  const addRows = (addRows: PagePayload) => {
    dispatch(pageAdd(addRows))
  }

  return <PageForm addRows={addRows} />
}
export default PageFormContainer
