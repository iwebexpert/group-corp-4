import { ActionCreator, Dispatch } from "redux"
import { ThunkActionDispatch } from "redux-thunk"

export const ALL_USER_PENDING = 'ALL_USER_PENDING'
export const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS'
export const ALL_USER_ERROR = 'ALL_USER_ERROR'

export enum AllUserActionTypes{
  ALL_USER_PENDING = 'ALL_USER_PENDING',
  ALL_USER_SUCCESS = 'ALL_USER_SUCCESS',
  ALL_USER_ERROR = 'ALL_USER_ERROR',
}

//Action types
export type AllUserPendingAction = {
  type: AllUserActionTypes.ALL_USER_PENDING
}
export type AllUserSuccessAction = {
  type: AllUserActionTypes.ALL_USER_SUCCESS
  payload: UserType[]
}
export type AllUserErrorAction = {
  type: AllUserActionTypes.ALL_USER_ERROR
  payload: Error
}

export type UsersPayload ={
  id: string
  name: string
  email: string
  password: string
  role: string
  token: string
}

export type AllUserActions = 
AllUserPendingAction | AllUserSuccessAction | AllUserErrorAction

//Actions

export const allUserPending: ActionCreator<AllUserPendingAction> = () => ({
    type: AllUserActionTypes.ALL_USER_PENDING,
  })
  export const allUserSuccess: ActionCreator<AllUserSuccessAction> = (data) => ({
    type: AllUserActionTypes.ALL_USER_SUCCESS,
    payload: data,
  })
  export const allUserError: ActionCreator<AllUserErrorAction> = (error) => ({
    type: AllUserActionTypes.ALL_USER_ERROR,
    payload: error,
  })


  export const allUserFetch: ThunkActionDispatch<any> = () => {
    return (dispatch: Dispatch) => {
      dispatch(allUserPending())
  
      const options = {
        method: 'GET',
        'Content-Type': 'application/json',

      }
      fetch('/api/users', options)
        .then((result) => result.json())
        .then((result) => {
          if (result.error) {
            throw result.error
          }
          dispatch(allUserSuccess(result))
          return result
        })
        .catch((error) => {
          dispatch(allUserError(error))
        })
    }
  }
  