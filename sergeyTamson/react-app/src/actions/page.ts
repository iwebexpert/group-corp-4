import { authService } from '../components/services/auth/authService'
import { ActionCreator, Dispatch } from 'redux'

export enum PageActionTypes {
  PAGE_ALL_PENDING = 'PAGE_ALL_PENDING',
  PAGE_ALL_SUCCESS = 'PAGE_ALL_SUCCESS',
  PAGE_ALL_ERROR = 'PAGE_ALL_ERROR',
  PAGE_PENDING = 'PAGE_PENDING',
  PAGE_SUCCESS = 'PAGE_SUCCESS',
  PAGE_ERROR = 'PAGE_ERROR',
  PAGE_DELETE_SUCCESS = 'PAGE_DELETE_SUCCESS',
  PAGE_DELETE_ERROR = 'PAGE_DELETE_ERROR',
  PAGE_ADD = 'PAGE_ADD',
  PAGE_EDIT_START = 'PAGE_EDIT_START',
  PAGE_EDIT_SAVE = 'PAGE_EDIT_SAVE',
  PAGE_EDIT_RESET = 'PAGE_EDIT_RESET',
  PAGE_EDIT_ERROR = 'PAGE_EDIT_ERROR',
}

export type PageAllPendingAction = {
  type: PageActionTypes.PAGE_ALL_PENDING
}
export type PageAllSuccessAction = {
  type: PageActionTypes.PAGE_ALL_SUCCESS
  payload: string
}
export type PageAllErrorAction = {
  type: PageActionTypes.PAGE_ALL_ERROR
  payload: Error
}

export type PagePendingAction = {
  type: PageActionTypes.PAGE_PENDING
}
export type PageSuccessAction = {
  type: PageActionTypes.PAGE_SUCCESS
  payload: string
}
export type PageErrorAction = {
  type: PageActionTypes.PAGE_ERROR
  payload: Error
}
export type PageDeleteSuccessAction = {
  type: PageActionTypes.PAGE_DELETE_SUCCESS
  payload: any
}
export type PageDeleteErrorAction = {
  type: PageActionTypes.PAGE_DELETE_ERROR
  payload: Error
}
export type PageAddAction = {
  type: PageActionTypes.PAGE_ADD
  payload: any
}
export type PageEditStartAction = {
  type: PageActionTypes.PAGE_EDIT_START
  payload: any
}
export type PageEditSaveAction = {
  type: PageActionTypes.PAGE_EDIT_SAVE
  payload: any
}
export type PageEditResetAction = {
  type: PageActionTypes.PAGE_EDIT_RESET
}
export type PageEditErrorAction = {
  type: PageActionTypes.PAGE_EDIT_ERROR
  payload: Error
}

export type PageActions =
  | PageAllPendingAction
  | PageAllSuccessAction
  | PageAllErrorAction
  | PagePendingAction
  | PageSuccessAction
  | PageErrorAction
  | PageDeleteSuccessAction
  | PageDeleteErrorAction
  | PageAddAction
  | PageEditStartAction
  | PageEditSaveAction
  | PageEditResetAction
  | PageEditErrorAction

export type PagePayload = {
  id: number | string
  url: string
  title: string
  content: string
  userId: number | string
  privat: boolean
}

// Actions
export const pageAllPending: ActionCreator<PageAllPendingAction> = () => ({
  type: PageActionTypes.PAGE_ALL_PENDING,
})

export const pageAllSuccess: ActionCreator<PageAllSuccessAction> = (data) => ({
  type: PageActionTypes.PAGE_ALL_SUCCESS,
  payload: data,
})

export const pageAllError: ActionCreator<PageAllErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_ALL_ERROR,
  payload: error,
})

export const pagePending: ActionCreator<PagePendingAction> = () => ({
  type: PageActionTypes.PAGE_PENDING,
})

export const pageSuccess: ActionCreator<PageSuccessAction> = (data) => ({
  type: PageActionTypes.PAGE_SUCCESS,
  payload: data,
})

export const pageError: ActionCreator<PageErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_ERROR,
  payload: error,
})

export const pageDeleteSuccess: ActionCreator<PageDeleteSuccessAction> = (id) => ({
  type: PageActionTypes.PAGE_DELETE_SUCCESS,
  payload: id,
})

export const pageDeleteError: ActionCreator<PageDeleteErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_DELETE_ERROR,
  payload: error,
})

export const editPageStart: ActionCreator<PageEditStartAction> = (id) => ({
  type: PageActionTypes.PAGE_EDIT_START,
  payload: id,
})

export const editPageSave: ActionCreator<PageEditSaveAction> = (data) => ({
  type: PageActionTypes.PAGE_EDIT_SAVE,
  payload: data,
})

export const editPageReset: ActionCreator<PageEditResetAction> = () => ({
  type: PageActionTypes.PAGE_EDIT_RESET,
})
export const editPageError: ActionCreator<PageEditErrorAction> = (error) => ({
  type: PageActionTypes.PAGE_EDIT_ERROR,
  payload: error,
})

export const pageFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(pageAllPending())
    const options = {
      method: 'GET',
    }
    fetch('http://localhost:9000/api/pages', options)
      .then((res) => {
        if (!res.ok) {
          if ([400, 401, 403, 404, 500, 504].indexOf(res.status) !== -1) {
            authService.logout()
            location.reload()
          }
          const error = res.statusText
          return Promise.reject(error)
        } else {
          return res.json()
        }
      })
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        return dispatch(pageAllSuccess(res))
      })
      .catch((error) => {
        dispatch(pageAllError(error))
      })
  }
}

export const pageDelete: ActionCreator<any> = (id) => {
  return (dispatch: Dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch(`http://localhost:9000/api/pages/${id}`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        return dispatch(pageDeleteSuccess(id))
      })
      .catch((err) => dispatch(pageDeleteError(err)))
  }
}

//Добавление  страницы
export const pageAdd: ActionCreator<PageAddAction> = (data) => {
  data.status = 'STATUS_ADD'
  data.rejection_reason = ''
  data.approval_date = ''

  if (data.date instanceof Date) {
    data.date = data.date.toString()
  }

  const options = {
    method: 'POST',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Authentication: `Bearer ${authService.token}`,
    },
    body: JSON.stringify(data),
  }

  fetch('http://localhost:9000/api/pages', options)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error
      }
      return res
    })
    .catch((err) => console.log(err))

  return {
    type: PageActionTypes.PAGE_ADD,
    payload: data,
  }
}

export const editPageFetch: ActionCreator<any> = (data) => {
  return (dispatch: Dispatch) => {
    dispatch(editPageStart(data?.id))
    const options = {
      method: 'PUT',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authService.token}`,
      },
      body: JSON.stringify(data),
    }
    fetch(`http://localhost:9000/api/pages/${data.id}`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        else {
          return dispatch(editPageSave(data))
        }
      })
      .catch((error) => dispatch(editPageError(error)))
  }
}

export const IdPageFetch: ActionCreator<any> = (url) => {
  return (dispatch: Dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
    }
    fetch(`http://localhost:9000/api/pages?url=${url}`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        else dispatch(pageSuccess(res))
      })
      .catch((error) => dispatch(pageError(error)))
  }
}
