import { requestOptions, urls } from '../helpers/urlHelper';

export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_PENDING = 'USERS_PENDING'
export const USERS_ERROR = 'USERS_ERROR'

export const usersPending = () => ({
  type: USERS_PENDING,
})
export const usersSuccess = (data) => ({
  type: USERS_SUCCESS,
  payload: data,
})
export const usersError = (err) => ({
  type: USERS_ERROR,
  payload: err,
})

export const getUsers = () => {
  return (dispatch) => {
    dispatch(usersPending())
    fetch(urls.users(), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(usersSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(usersError(err))
      })
  }
}