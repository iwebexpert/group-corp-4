import { urls, request, response } from '../../helpers/requestHelper'

export const USER_LOADING = 'USER_LOADING'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS'
export const USER_ADD_ERROR = 'USER_ADD_ERROR'
export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS'
export const USER_EDIT_ERROR = 'USER_EDIT_ERROR'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_ERROR = 'USER_DELETE_ERROR'

export const userLoading = () => ({
  type: USER_LOADING,
})

export const getAllUser = () => {
  return (dispatch) => {
    dispatch(userLoading())
    request(urls.users(), 'GET')
      .then((data) => dispatch(response(USER_SUCCESS, data)))
      .catch((error) => dispatch(response(USER_ERROR, error)))
  }
}
export const addUser = (data) => {
  return (dispatch) => {
    dispatch(userLoading())
    request(urls.users(), 'POST', data)
      .then((data) => dispatch(response(USER_ADD_SUCCESS, data)))
      .catch((error) => dispatch(response(USER_ADD_ERROR, error)))
  }
}
export const editUser = (data) => {
  return (dispatch) => {
    dispatch(userLoading())
    request(urls.getUser(data.id), 'PUT', data)
      .then((data) => dispatch(response(USER_EDIT_SUCCESS, data)))
      .catch((error) => dispatch(response(USER_EDIT_ERROR, error)))
  }
}
export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(userLoading())
    request(urls.getUser(id), 'DELETE')
      .then(() => dispatch(response(USER_DELETE_SUCCESS, id)))
      .catch((error) => dispatch(response(USER_DELETE_ERROR, error)))
  }
}
