import { authServices } from '../services/auth/authServices'

export const PAGE_PENDING = 'PAGE_PENDING'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_ERROR = 'PAGE_ERROR'
export const PAGE_DELETE_ERROR = 'PAGE_DELETE_ERROR'
export const PAGE_DELETE_SUCCESS = 'PAGE_DELETE_SUCCESS'

export const PAGE_ADD_ERROR = 'PAGE_ADD_ERROR'
export const PAGE_ADD_SUCCESS = 'PAGE_ADD_SUCCESS'

export const PAGE_FORM_EDIT_START = 'PAGE_FORM_EDIT_START'
export const PAGE_FORM_EDIT_SAVE = 'PAGE_FORM_EDIT_SAVE'
export const PAGE_FORM_EDIT_RESET = 'PAGE_FORM_EDIT_RESET'

export const pagePending = () => ({
  type: PAGE_PENDING,
})
export const pageSuccess = (data) => ({
  type: PAGE_SUCCESS,
  payload: data,
})
export const pageError = (error) => ({
  type: PAGE_ERROR,
  payload: error,
})

export const pageFetch = () => {
  return (dispatch) => {
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
        console.log('result', result)
        dispatch(pageSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(pageError(error))
      })
  }
}

export const pageDelereSuccess = () => ({
  type: PAGE_DELETE_SUCCESS,
})
export const pageDeleteError = (error) => ({
  type: PAGE_DELETE_ERROR,
  payload: error,
})

export const pageDeleteFetch = (id) => {
  return (dispatch) => {
    fetch(`/api/pages/${id}`, { method: 'DELETE' })
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        } else {
          dispatch(pageDelereSuccess())
        }
      })
      .catch((error) => {
        dispatch(pageDeleteError(error))
      })
  }
}

export const pageAddSuccess = (data) => ({
  type: PAGE_ADD_SUCCESS,
  payload: data,
})
export const pageAddError = (error) => ({
  type: PAGE_ADD_ERROR,
  payload: error,
})

export const pageAddFetch = (data) => {
  return (dispatch) => {
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
        console.log('result', result)
        dispatch(pageAddSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(pageAddError(error))
      })
  }
}

export const pageFormEditStart = (id) => ({
  type: PAGE_FORM_EDIT_START,
  payload: id,
})
export const pageFormEditSave = (data) => ({
  type: PAGE_FORM_EDIT_SAVE,
  payload: data,
})
export const pageFormEditReset = () => ({
  type: PAGE_FORM_EDIT_RESET,
})
