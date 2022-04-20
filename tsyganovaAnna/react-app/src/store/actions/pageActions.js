import { urls, request, response } from '../../helpers/requestHelper'

export const PAGE_LOADING = 'PAGE_LOADING'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_ERROR = 'PAGE_ERROR'
export const PAGE_ADD_SUCCESS = 'PAGE_ADD_SUCCESS'
export const PAGE_ADD_ERROR = 'PAGE_ADD_ERROR'
export const PAGE_EDIT_SUCCESS = 'PAGE_EDIT_SUCCESS'
export const PAGE_EDIT_ERROR = 'PAGE_EDIT_ERROR'
export const PAGE_DELETE_SUCCESS = 'PAGE_DELETE_SUCCESS'
export const PAGE_DELETE_ERROR = 'PAGE_DELETE_ERROR'
export const PAGE_GET_SUCCESS = 'PAGE_GET_SUCCESS'
export const PAGE_GET_ERROR = 'PAGE_GET_ERROR'

export const pageLoading = () => ({
  type: PAGE_LOADING,
})

export const getAllPage = () => {
  return (dispatch) => {
    dispatch(pageLoading())
    request(urls.pages(), 'GET')
      .then((data) => dispatch(response(PAGE_SUCCESS, data)))
      .catch((error) => dispatch(response(PAGE_ERROR, error)))
  }
}
export const getPageByUrl = (url) => {
  return (dispatch) => {
    dispatch(pageLoading())
    request(urls.getPageByUrl(url), 'GET')
      .then((data) => dispatch(response(PAGE_GET_SUCCESS, data)))
      .catch((error) => dispatch(response(PAGE_GET_ERROR, error)))
  }
}
export const getPage = (id) => {
  return (dispatch) => {
    dispatch(pageLoading())
    request(urls.getPage(id), 'GET')
      .then((data) => dispatch(response(PAGE_SUCCESS, data)))
      .catch((error) => dispatch(response(PAGE_ERROR, error)))
  }
}
export const addPage = (data) => {
  return (dispatch) => {
    dispatch(pageLoading())
    request(urls.pages(), 'POST', data)
      .then((data) => dispatch(response(PAGE_ADD_SUCCESS, data)))
      .catch((error) => dispatch(response(PAGE_ADD_ERROR, error)))
  }
}
export const editPage = (data) => {
  return (dispatch) => {
    dispatch(pageLoading())
    request(urls.getPage(data.id), 'PUT', data)
      .then((data) => dispatch(response(PAGE_EDIT_SUCCESS, data)))
      .catch((error) => dispatch(response(PAGE_EDIT_ERROR, error)))
  }
}
export const deletePage = (id) => {
  return (dispatch) => {
    dispatch(pageLoading())
    request(urls.getPage(id), 'DELETE')
      .then(() => dispatch(response(PAGE_DELETE_SUCCESS, id)))
      .catch((error) => dispatch(response(PAGE_DELETE_ERROR, error)))
  }
}
