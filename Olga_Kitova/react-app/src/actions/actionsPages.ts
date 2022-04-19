import { PagesActionTypes } from 'constants/constantsPages'
import { getOptions } from 'config/requestConfig'
import { BASE_URL_PAGES } from 'helpers/URLRequest'
import { ActionCreator, Dispatch } from 'redux'

// Union of types
export type PagesAction =
  | GetPagesPending
  | GetPagesSuccess
  | GetPagesError
  | GetPagePending
  | GetPageSuccess
  | GetPageError
  | AddPagesSuccess
  | AddPagesError
  | DeletePagesSuccess
  | DeletePagesError
  | EditIdpages
  | ClearCurrentIdByEditPages
  | EditPagesSuccess
  | EditPagesError

export type PagesPayload = {
  id?: string
  url: string
  title: string
  content?: string
  userId?: string
  user?: UserType
}

// Get all pages

// Action types
export type GetPagesPending = {
  type: PagesActionTypes.PAGES_GET_PENDING
}
// Action
export const getPagesPending: ActionCreator<GetPagesPending> = () => ({
  type: PagesActionTypes.PAGES_GET_PENDING,
})

// Action types
export type GetPagesSuccess = {
  type: PagesActionTypes.PAGES_GET_SUCCESS
  payload: PagesPayload[]
}
// Action
export const getPagesSuccess: ActionCreator<GetPagesSuccess> = (data) => ({
  type: PagesActionTypes.PAGES_GET_SUCCESS,
  payload: data,
})

// Action types
export type GetPagesError = {
  type: PagesActionTypes.PAGES_GET_ERROR
  payload: Error
}
// Action
export const getPagesError: ActionCreator<GetPagesError> = (error) => ({
  type: PagesActionTypes.PAGES_GET_ERROR,
  payload: error,
})

// Get pages fetch
export const getPagesFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(getPagesPending())
    fetch(BASE_URL_PAGES, getOptions('GET'))
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error
        else dispatch(getPagesSuccess(data))
      })
      .catch((error) => dispatch(getPagesError(error)))
  }
}

// Get one page

// Action types
export type GetPagePending = {
  type: PagesActionTypes.PAGE_GET_PENDING
}
// Action
export const getPagePending: ActionCreator<GetPagePending> = () => ({
  type: PagesActionTypes.PAGE_GET_PENDING,
})

// Action types
export type GetPageSuccess = {
  type: PagesActionTypes.PAGE_GET_SUCCESS
  payload: PagesPayload[]
}
// Action
export const getPageSuccess: ActionCreator<GetPageSuccess> = (data) => ({
  type: PagesActionTypes.PAGE_GET_SUCCESS,
  payload: data,
})

// Action types
export type GetPageError = {
  type: PagesActionTypes.PAGE_GET_ERROR
  payload: Error
}
// Action
export const getPageError: ActionCreator<GetPageError> = (error) => ({
  type: PagesActionTypes.PAGE_GET_ERROR,
  payload: error,
})
// Get one page fetch
export const getOnePageFetch: ActionCreator<any> = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getPagePending())
    fetch(`${BASE_URL_PAGES}?url=${url}&_expand=user`, getOptions('GET'))
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error
        else dispatch(getPageSuccess(data))
      })
      .catch((error) => dispatch(getPageError(error)))
  }
}

// Add pages

// Action types
export type AddPagesSuccess = {
  type: PagesActionTypes.PAGES_ADD_SUCCESS
  payload: PagesPayload
}
// Action
export const addPagesSuccess: ActionCreator<AddPagesSuccess> = (data) => ({
  type: PagesActionTypes.PAGES_ADD_SUCCESS,
  payload: data,
})

// Action types
export type AddPagesError = {
  type: PagesActionTypes.PAGES_ADD_ERROR
  payload: Error
}
// Action
export const addPagesError: ActionCreator<AddPagesError> = (error) => ({
  type: PagesActionTypes.PAGES_ADD_ERROR,
  payload: error,
})

// Add pages fetch
export const addPagesFetch: ActionCreator<any> = (data: PagesPayload) => {
  return (dispatch: Dispatch) => {
    fetch(BASE_URL_PAGES, getOptions('POST', data))
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        else dispatch(addPagesSuccess(res))
      })
      .catch((error) => dispatch(addPagesError(error)))
  }
}

// Delete pages

// Action types
export type DeletePagesSuccess = {
  type: PagesActionTypes.PAGES_DELETE_SUCCESS
}
// Action
export const deletePagesSuccess: ActionCreator<DeletePagesSuccess> = () => ({
  type: PagesActionTypes.PAGES_DELETE_SUCCESS,
})

// Action types
export type DeletePagesError = {
  type: PagesActionTypes.PAGES_DELETE_ERROR
  payload: Error
}
// Action
export const deletePagesError: ActionCreator<DeletePagesError> = (error) => ({
  type: PagesActionTypes.PAGES_DELETE_ERROR,
  payload: error,
})
//Delete pages fetch
export const deletePagesFetch: ActionCreator<any> = (id: string) => {
  return (dispatch: Dispatch) => {
    fetch(`${BASE_URL_PAGES}/${id}`, getOptions('DELETE'))
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        } else {
          dispatch(deletePagesSuccess())
          dispatch(getPagesFetch())
        }
      })
      .catch((error) => dispatch(deletePagesError(error)))
  }
}

// Current Id by edit pages

// Action types
export type EditIdpages = {
  type: PagesActionTypes.PAGES_EDIT_ID_SUCCESS
  payload: string
}
// Action
export const editIdpages: ActionCreator<EditIdpages> = (id) => ({
  type: PagesActionTypes.PAGES_EDIT_ID_SUCCESS,
  payload: id,
})

export const writeCurrentIdByEditPages: ActionCreator<any> = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(editIdpages(id))
  }
}

// Current Id reset

// Action types
export type ClearCurrentIdByEditPages = {
  type: PagesActionTypes.PAGES_EDIT_ID_RESET
}
// Action
export const clearCurrentIdByEditPages: ActionCreator<ClearCurrentIdByEditPages> = () => ({
  type: PagesActionTypes.PAGES_EDIT_ID_RESET,
})

// Edit pages

// Action types
export type EditPagesSuccess = {
  type: PagesActionTypes.PAGES_EDIT_SUCCESS
}
// Action
export const editPagesSuccess: ActionCreator<EditPagesSuccess> = () => ({
  type: PagesActionTypes.PAGES_EDIT_SUCCESS,
})

// Action types
export type EditPagesError = {
  type: PagesActionTypes.PAGES_EDIT_ERROR
  payload: Error
}
// Action
export const editPagesError: ActionCreator<EditPagesError> = (error) => ({
  type: PagesActionTypes.PAGES_EDIT_ERROR,
  payload: error,
})

// Edit pages fetch
export const editPagesFetch: ActionCreator<any> = (data: PagesPayload) => {
  return (dispatch: Dispatch) => {
    fetch(`${BASE_URL_PAGES}/${data.id}`, getOptions('PATCH', data))
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        else {
          dispatch(editPagesSuccess())
          dispatch(getPagesFetch())
        }
      })
      .catch((error) => dispatch(editPagesError(error)))
  }
}
