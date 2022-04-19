import { requestOptions, urls } from '../helpers/urlHelper';
import { ActionCreator, Dispatch } from 'redux';

export enum UsersActionType {
  USERS_SUCCESS = 'USERS_SUCCESS',
  USERS_PENDING = 'USERS_PENDING',
  USERS_ERROR = 'USERS_ERROR',
}

export type UsersPayload = {
  id: number,
  name: string,
  email: string,
  password: string,
  role: string,
  token: string
}

export type usersPendingAction = {
  type: UsersActionType.USERS_PENDING,
}
export type usersSuccessAction = {
  type: UsersActionType.USERS_SUCCESS,
  payload: Array<UsersPayload>
}
export type usersErrorAction = {
  type: UsersActionType.USERS_ERROR,
  payload: Error
}

export type UsersActions = usersPendingAction | usersSuccessAction | usersErrorAction

export const usersPending: ActionCreator<usersPendingAction> = () => ({
  type: UsersActionType.USERS_PENDING,
})
export const usersSuccess: ActionCreator<usersSuccessAction> = (data) => ({
  type: UsersActionType.USERS_SUCCESS,
  payload: data,
})
export const usersError: ActionCreator<usersErrorAction> = (err) => ({
  type: UsersActionType.USERS_ERROR,
  payload: err,
})

export const getUsers = () => {
  return (dispatch: Dispatch) => {
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