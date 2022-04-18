import { ActionTypes } from '@mui/base'
import { ActionCreator, Dispatch } from 'redux'
import { ThunkActionDispatch } from 'redux-thunk'
import { authServices } from '../services/auth/authServices'

export enum PageActionTypes{
  PAGE_PENDING = 'PAGE_PENDING',
  PAGE_SUCCESS = 'PAGE_SUCCESS',
  PAGE_ERROR = 'PAGE_ERROR',
  PAGE_DELETE_ERROR = 'PAGE_DELETE_ERROR',
  PAGE_DELETE_SUCCESS = 'PAGE_DELETE_SUCCESS',
  PAGE_ADD_ERROR = 'PAGE_ADD_ERROR',
  PAGE_ADD_SUCCESS = 'PAGE_ADD_SUCCESS',
  PAGE_FORM_EDIT_START = 'PAGE_FORM_EDIT_START',
  PAGE_FORM_EDIT_SAVE = 'PAGE_FORM_EDIT_SAVE',
  PAGE_FORM_EDIT_RESET = 'PAGE_FORM_EDIT_RESET',
  ONE_PAGE_PENDING = 'ONE_PAGE_PENDING',
  ONE_PAGE_SUCCESS = 'ONE_PAGE_SUCCESS',
  ONE_PAGE_ERROR = 'ONE_PAGE_ERROR',
}

export type PagePayload={
  id: string
  url: string
  title: string
  content: string
  userId: string
  userName: string
}

//Action types

export type PagePendingAction={
  type: PageActionTypes.PAGE_PENDING
}

export type PageSuccessAction={
  type: PageActionTypes.PAGE_SUCCESS
  payload: PageType[]
}
export type PageErrorAction={
  type: PageActionTypes.PAGE_ERROR
  payload: Error
}
export type PageDeleteSuccessAction={
  type: PageActionTypes.PAGE_DELETE_SUCCESS
}
export type PageDeleteErrorAction={
  type: PageActionTypes.PAGE_DELETE_ERROR
  payload: Error
}
export type PageAddSuccessAction={
  type: PageActionTypes.PAGE_ADD_SUCCESS
  payload: PageType
}
export type PageAddErrorAction={
  type: PageActionTypes.PAGE_ADD_ERROR
  payload: Error
}
export type PageFormEditStartAction={
  type: PageActionTypes.PAGE_FORM_EDIT_START
  payload: string
}
export type PageFormEditSaveAction={
  type: PageActionTypes.PAGE_FORM_EDIT_SAVE
  payload: PageType
}
export type PageFormEditResetAction={
  type: PageActionTypes.PAGE_FORM_EDIT_RESET
}
export type PageOnePagePandingAction={
  type: PageActionTypes.ONE_PAGE_PENDING
}
export type PageOnePageSuccessAction={
  type: PageActionTypes.ONE_PAGE_SUCCESS
  payload: PageType
}
export type PageOnePageErrorAction={
  type: PageActionTypes.ONE_PAGE_ERROR
  payload: Error
}


export type PageActions = 
PagePendingAction
| PageSuccessAction 
| PageErrorAction
| PageDeleteSuccessAction
| PageDeleteErrorAction
| PageAddSuccessAction
| PageAddErrorAction
| PageFormEditStartAction
| PageFormEditSaveAction
| PageFormEditResetAction
| PageOnePagePandingAction
| PageOnePageSuccessAction
| PageOnePageErrorAction


//Actions
export const pagePending: ActionCreator<PagePendingAction> = () => ({
  type:PageActionTypes.PAGE_PENDING,
})
export const pageSuccess: ActionCreator<PageSuccessAction> = (data) => ({
  type: PageActionTypes.PAGE_SUCCESS,
  payload: data,
})
export const pageError: ActionCreator<PageErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_ERROR,
  payload: error,
})

export const pageFetch: ThunkActionDispatch<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(pagePending())

    const options = {
      method: 'GET',
      headers: {
        Authentication: `Bearer ${authServices.token}`,
      },
    }
    fetch('/api/pages', options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(pageSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(pageError(error))
      })
  }
}

export const pageDelereSuccess: ActionCreator<PageDeleteSuccessAction> = () => ({
  type: PageActionTypes.PAGE_DELETE_SUCCESS,
})
export const pageDeleteError: ActionCreator<PageDeleteErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_DELETE_ERROR,
  payload: error,
})

export const pageDeleteFetch: ThunkActionDispatch<any> = (id) => {
  return (dispatch: Dispatch) => {

    const options = {
      method: 'DELETE',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authServices.token}`,
      },
    }

    fetch(`/api/pages/${id}`, options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        } else {
          dispatch(pageDelereSuccess())
          dispatch(pageFetch())
        }
      })
      .catch((error) => {
        dispatch(pageDeleteError(error))
      })
  }
}

export const pageAddSuccess: ActionCreator<PageAddSuccessAction> = (data) => ({
  type: PageActionTypes.PAGE_ADD_SUCCESS,
  payload: data,
})
export const pageAddError: ActionCreator<PageAddErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_ADD_ERROR,
  payload: error,
})

export const pageAddFetch: ThunkActionDispatch<any> = (data) => {
  return (dispatch:Dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authServices.token}`,
      },
      body: JSON.stringify(data),
    }

    fetch('/api/pages', options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(pageAddSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(pageAddError(error))
      })
  }
}

export const pageFormEditStart: ActionCreator<PageFormEditStartAction> = (id) => ({
  type: PageActionTypes.PAGE_FORM_EDIT_START,
  payload:id,
})
export const pageFormEditSave: ActionCreator<PageFormEditSaveAction> = (data) => ({
  type: PageActionTypes.PAGE_FORM_EDIT_SAVE,
  payload: data,
})
export const pageFormEditReset: ActionCreator<PageFormEditResetAction> = () => ({
  type: PageActionTypes.PAGE_FORM_EDIT_RESET,
})


export const onePagePending: ActionCreator<PageOnePagePandingAction> = () => ({
  type: PageActionTypes.ONE_PAGE_PENDING,
})
export const onePageSuccess: ActionCreator<PageOnePageSuccessAction> = (data) => ({
  type: PageActionTypes.ONE_PAGE_SUCCESS,
  payload: data,
})
export const onePageError: ActionCreator<PageOnePageErrorAction> = (error) => ({
  type: PageActionTypes.ONE_PAGE_ERROR,
  payload: error,
})


export const onePageFetch: ThunkActionDispatch<any> = (url) => {
  return (dispatch:Dispatch) => {
    dispatch(onePagePending())

    const options = {
      method: 'GET',
      headers: {
        Authentication: `Bearer ${authServices.token}`,
      },
    }
    fetch(`/api/pages?url=${url}`, options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(onePageSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(onePageError(error))
      })
  }
}
