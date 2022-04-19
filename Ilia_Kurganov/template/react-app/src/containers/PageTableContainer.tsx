import React from 'react'
import PageTable from '../components/PageTable/PageTable'
import { useDispatch, useSelector } from 'react-redux'
import {
  changePageAction,
  deletePageAction,
  editPageAction,
  savePageAction,
} from '../actions/actionsPages'
import { authService } from '../services/auth/authService'
import { AppState } from 'reducers/*'

function PageTableContainer() {
  const dispatch = useDispatch()
  const data = useSelector((state:AppState) => state.page.data)
  const role = authService.currentUserValue.role

  const delitePage = (key:string) => {
    dispatch(deletePageAction(key))
  }

  const editPage = (key:string) => {
    dispatch(editPageAction(key))
  }

  const savePage = (key:string) => {
    const savePaged = data.find((item) => item.id === key)
    if(savePaged){
      delete savePaged.isEdit
    }
    dispatch(savePageAction(key, savePaged))
  }

  const changeField = (key:string, field:string, value:string) => {
    const dataPage = { key, field, value }
    dispatch(changePageAction(dataPage))
  }

  return (
    <PageTable
      tableRows={data}
      delitePage={delitePage}
      editPage={editPage}
      savePage={savePage}
      changeField={changeField}
      role={role}
    />
  )
}

export default PageTableContainer
