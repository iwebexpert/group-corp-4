import { authService } from '../../services/auth/authService'

export const PAGE_LOADING = 'PAGE_LOADING'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_ERROR = 'PAGE_ERROR'
export const PAGE_ADD = 'PAGE_ADD'
export const PAGE_ADD_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_ADD_ERROR = 'PAGE_ERROR'
export const PAGE_DELETE = 'PAGE_DELETE'

export const PAGE_EDIT = 'PAGE_EDIT'

export const pageLoading = () => ({
  type: PAGE_LOADING,
})

export const getAllPage = () => {
  return (dispatch) => {
    dispatch(pageLoading())
    request('/api/pages', 'GET')
      .then((data) => dispatch(pageResponse(PAGE_SUCCESS, data)))
      .catch((error) => dispatch(pageResponse(PAGE_ERROR, error)))
  }
}

export const addPage = (data) => {
  console.log('data: ', data)
  return (dispatch) => {
    dispatch(pageLoading())
    request('/api/pages', 'POST', data)
      .then((data) => {
        console.log('data: ', data)
        return dispatch(pageResponse(PAGE_ADD_SUCCESS, data))
      })
      .catch((error) => dispatch(pageResponse(PAGE_ADD_ERROR, error)))
  }
}
// export const addPage = (data) => ({
//   type: PAGE_ADD,
//   payload: data,
// })
export const pageEdit = (data) => ({
  type: PAGE_EDIT,
  payload: data,
  pageId: data.id,
})

export const pageDelete = (id) => ({
  type: PAGE_DELETE,
  payload: id,
})
export const pageResponse = (type, response) => ({
  type: type,
  payload: response,
})

const request = (api, method, body = null) =>
  fetch(api, getOptions(method, body)).then((response) => response.json())

const getOptions = (method, body) => {
  let headers = {
    'Content-Type': 'application/json',
    Authentication: `Bearer ${authService.token}`,
  }
  if (body) {
    console.log('JSON.stringify(body): ', JSON.stringify(body))
    headers.body = JSON.stringify(body)
  }
  return {
    method: method,
    headers: headers,
  }
}
