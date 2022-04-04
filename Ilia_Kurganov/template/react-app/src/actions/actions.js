import { authService } from './../services/auth/authService'

export const PAGE_PENDING = 'PAGE_PENDING'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_ERROR = 'PAGE_ERROR'
export const PAGE_ADD = 'PAGE_ADD'
export const PAGE_DELETE = 'PAGE_DELITE'
export const ADD_ROLE = 'ADD_ROLE'

export const pagePending = () => ({
  type: PAGE_PENDING,
})
export const pageSuccess = (data) => ({
  type: PAGE_SUCCESS,
  payload: data,
})
export const pageError = (error) => ({
  type: PAGE_PENDING,
  payload: error,
})
export const statsSuccess = (data) => ({
  type: SET_STATS,
  payload: data,
})

export const pageFetch = () => {
  return (dispatch) => {
    dispatch(pagePending())
    const options = {
      method: 'GET',
      header: {
        Authentication: `Bearer ${authService.token}`,
      },
    }
    fetch('/api/pages', options)
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(pageSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(pageError(err))
      })
  }
}

export const pageAdd = (data) => ({
  type: PAGE_ADD,
  payload: data,
})

export const pageDelete = (id) => ({
  type: PAGE_DELETE,
  payload: id,
})

export const addRole = (role) => ({
  type: ADD_ROLE,
  payload: role,
})
