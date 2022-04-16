import { UsersActionTypes } from 'constants/constantsUsers'
import { getOptions } from 'config/requestConfig'
import { BASE_URL_USERS } from 'helpers/URLRequest'
import { ActionCreator, Dispatch } from 'redux'

// Union of types
export type UsersActions = GetAllUsersPending | GetAllUsersSuccess | GetAllUsersError

export type UsersPayload = {
  id: string
  name: string
  email: string
  password: string
  role: string
}
// Get all users

// Action types
export type GetAllUsersPending = {
  type: UsersActionTypes.ALL_USERS_GET_PENDING
}
// Action
export const getAllUsersPending: ActionCreator<GetAllUsersPending> = () => ({
  type: UsersActionTypes.ALL_USERS_GET_PENDING,
})

// Action types
export type GetAllUsersSuccess = {
  type: UsersActionTypes.ALL_USERS_GET_SUCCESS
  payload: UsersPayload[]
}
// Action
export const getAllUsersSuccess: ActionCreator<GetAllUsersSuccess> = (data) => ({
  type: UsersActionTypes.ALL_USERS_GET_SUCCESS,
  payload: data,
})

// Action types
export type GetAllUsersError = {
  type: UsersActionTypes.ALL_USERS_GET_ERROR
  payload: Error
}
// Action
export const getAllUsersError: ActionCreator<GetAllUsersError> = (error) => ({
  type: UsersActionTypes.ALL_USERS_GET_ERROR,
  payload: error,
})

// Get comments fetch
export const getAllUsersFetch = () => {
  return (dispatch: Dispatch) => {
    dispatch(getAllUsersPending())
    fetch(`${BASE_URL_USERS}`, getOptions('GET'))
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error
        else dispatch(getAllUsersSuccess(data))
      })
      .catch((error) => dispatch(getAllUsersError(error)))
  }
}
