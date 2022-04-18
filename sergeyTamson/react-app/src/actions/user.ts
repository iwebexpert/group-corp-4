import { ActionCreator, Dispatch } from 'redux'

export enum UserActionTypes {
  USER_PENDING = 'USER_PENDING',
  USER_SUCCESS = 'USER_SUCCESS',
  USER_ERROR = 'USER_ERROR',
  USER_LOGOUT = 'USER_LOGOUT',
  ALL_USER_SUCCESS = 'ALL_USER_SUCCESS',
}

export type UserPendingAction = {
  type: UserActionTypes.USER_PENDING
}
export type UserSuccessAction = {
  type: UserActionTypes.USER_SUCCESS
  payload: any
}
export type UserErrorAction = {
  type: UserActionTypes.USER_ERROR
  payload: Error
}
export type UserLogoutAction = {
  type: UserActionTypes.USER_LOGOUT
}
export type AllUserSuccessAction = {
  type: UserActionTypes.ALL_USER_SUCCESS
  payload: any
}

export type UserActions =
  | UserPendingAction
  | UserSuccessAction
  | UserErrorAction
  | UserLogoutAction
  | AllUserSuccessAction

export type UserPayload = {
  id: number | null
  name: string
  email: string
  password?: string
  role: string
  token?: string
}

// Actions
export const userPending: ActionCreator<UserPendingAction> = () => ({
  type: UserActionTypes.USER_PENDING,
})

export const userSuccess: ActionCreator<UserSuccessAction> = (data) => ({
  type: UserActionTypes.USER_SUCCESS,
  payload: data,
})

export const userError: ActionCreator<UserErrorAction> = (error) => ({
  type: UserActionTypes.USER_ERROR,
  payload: error,
})

export const userLogout: ActionCreator<UserLogoutAction> = () => ({
  type: UserActionTypes.USER_LOGOUT,
})

export const allUserSuccess: ActionCreator<AllUserSuccessAction> = (data) => ({
  type: UserActionTypes.ALL_USER_SUCCESS,
  payload: data,
})

export const userFetch = () => {
  return (dispatch: Dispatch) => {
    dispatch(userPending())

    const raw: any = localStorage.getItem('user')

    raw !== null
      ? dispatch(userSuccess(JSON.parse(raw)))
      : dispatch(userError('Пользователь не найден'))
  }
}

export const allUserFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        // Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch(`http://localhost:9000/api/users`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        return dispatch(allUserSuccess(res))
      })
      .catch((err) => console.log(err))
  }
}
