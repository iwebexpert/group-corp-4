import { requestOptions, urls } from '../helpers/urlHelper'

export const PAGES_PENDING = 'PAGES_PENDING'
export const PAGES_SUCCESS = 'PAGES_SUCCESS'
export const PAGES_ERROR = 'PAGES_ERROR'
export const ONE_PAGE_SUCCESS = 'ONE_PAGE_SUCCESS'
export const PAGE_ADD = 'PAGE_ADD'
export const PAGE_DELETE = 'PAGE_DELITE'

export const pagesPending = () => ({
  type: PAGES_PENDING,
})
export const pagesSuccess = (data) => ({
  type: PAGES_SUCCESS,
  payload: data,
})
export const pagesError = (error) => ({
  type: PAGES_PENDING,
  payload: error,
})
export const onePageSuccess = (data) => ({
  type: ONE_PAGE_SUCCESS,
  payload: data,
})
export const statsSuccess = (data) => ({
  type: SET_STATS,
  payload: data,
})

export const pagesFetch = () => {
  return (dispatch) => {
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
export const onePageFetch = (id) => {
  return (dispatch) => {
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

export const pageAdd = (data) => ({
  type: PAGE_ADD,
  payload: data,
})

export const pageDelete = (id) => ({
  type: PAGE_DELETE,
  payload: id,
})
