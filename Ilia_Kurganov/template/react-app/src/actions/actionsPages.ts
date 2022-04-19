import { ActionCreator, Dispatch } from 'redux'
import { requestOptions, urls } from '../helpers/urlHelper'

export enum PageActionType {
  PAGES_PENDING = 'PAGES_PENDING',
  PAGES_SUCCESS = 'PAGES_SUCCESS',
  PAGES_ERROR = 'PAGES_ERROR',
  ONE_PAGE_SUCCESS = 'ONE_PAGE_SUCCESS',
  PAGE_ADD = 'PAGE_ADD',
  PAGE_DELETE = 'PAGE_DELITE',
  EDIT_PAGE = 'EDIT_PAGE',
  SAVE_PAGE = 'SAVE_PAGE',
  CHANGE_PAGE = 'CHANGE_PAGE',
  ONE_PAGE_SUCCESS_BY_URL = 'ONE_PAGE_SUCCESS_BY_URL'
}

export type PagePayload = {
  id: string,
  url: string,
  title: string,
  content: string,
  userId: string,
  isEdit?: boolean
}
export type PagePayloadForChangePage = {
  key: string,
  field: string,
  value: string
}

export type pagesPendingAction = {
  type: PageActionType.PAGES_PENDING
}
export type pagesSuccessAction = {
  type: PageActionType.PAGES_SUCCESS,
  payload: [PagePayload]
}
export type pagesErrorAction = {
  type: PageActionType.PAGES_ERROR,
  payload: Error
}
export type onePagesSuccessAction = {
  type: PageActionType.ONE_PAGE_SUCCESS,
  payload: PagePayload
}
export type onePagesSuccessBuUrlAction = {
  type: PageActionType.ONE_PAGE_SUCCESS_BY_URL,
  payload: PagePayload[]
}
export type editPageActionType = {
  type: PageActionType.EDIT_PAGE,
  payload: string
}
export type changePageActionType = {
  type: PageActionType.CHANGE_PAGE,
  payload: PagePayloadForChangePage
}
export type savePageActionType = {
  type: PageActionType.SAVE_PAGE,
  payload: string
}
export type pageAddAction = {
  type: PageActionType.PAGE_ADD,
  payload: PagePayload
}
export type deletePageActionType = {
  type: PageActionType.PAGE_DELETE,
  payload: string
}

export type PagesActions = pagesPendingAction | pagesSuccessAction | pagesErrorAction | onePagesSuccessAction | editPageActionType | changePageActionType | savePageActionType | pageAddAction | deletePageActionType | onePagesSuccessBuUrlAction

export const pagesPending: ActionCreator<pagesPendingAction> = () => ({
  type: PageActionType.PAGES_PENDING,
})

export const pagesSuccess: ActionCreator<pagesSuccessAction> = (data) => ({
  type: PageActionType.PAGES_SUCCESS,
  payload: data,
})
export const pagesError: ActionCreator<pagesErrorAction> = (error) => ({
  type: PageActionType.PAGES_ERROR,
  payload: error,
})
export const onePageSuccess: ActionCreator<onePagesSuccessAction> = (data) => ({
  type: PageActionType.ONE_PAGE_SUCCESS,
  payload: data,
})
export const onePageSuccessByUrl: ActionCreator<onePagesSuccessBuUrlAction> = (data) => ({
  type: PageActionType.ONE_PAGE_SUCCESS_BY_URL,
  payload: data,
})
export const editPageAction: ActionCreator<editPageActionType> = (data) => ({
  type: PageActionType.EDIT_PAGE,
  payload: data,
})
export const changePageAction: ActionCreator<changePageActionType> = (data) => ({
  type: PageActionType.CHANGE_PAGE,
  payload: data,
})
export const savePageAction: ActionCreator<savePageActionType> = (data, savePage) => {
  fetch(urls.currentPages(data), requestOptions('PUT', savePage))
  return {
    type: PageActionType.SAVE_PAGE,
    payload: data,
  }
}
export const pageAdd: ActionCreator<pageAddAction> = (data) => {
  fetch(urls.pages(), requestOptions('POST', data))
  return {
    type: PageActionType.PAGE_ADD,
    payload: data,
  }
}

export const deletePageAction: ActionCreator<deletePageActionType> = (id) => {
  fetch(urls.currentPages(id), requestOptions('DELETE'))
  return {
    type: PageActionType.PAGE_DELETE,
    payload: id,
  }
}

export const pagesFetch = () => {
  return (dispatch: Dispatch) => {
    dispatch(pagesPending())
    fetch(urls.pages(), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(pagesSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(pagesError(err))
      })
  }
}
export const onePageFetch = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(pagesPending())
    fetch(urls.currentPages(id), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(onePageSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(pagesError(err))
      })
  }
}

export const onePageFetchbyURL = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(pagesPending())
    fetch(urls.onePageByUrl(url), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(onePageSuccessByUrl(data))
        return data
      })
      .catch((err) => {
        dispatch(pagesError(err))
      })
  }
}
