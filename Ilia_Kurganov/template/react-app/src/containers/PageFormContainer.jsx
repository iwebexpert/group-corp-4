import React from 'react'
import PageForm from '../components/PageForm/PageForm'
import { useDispatch } from 'react-redux'
import { pageAdd } from '../actions/actionsPages'

function PageFormContainer() {
  const dispatch = useDispatch()

  const addRows = (data) => {
    dispatch(pageAdd(data))
  }

  return <PageForm addRows={addRows} />
}
export default PageFormContainer
