import { ActionCreator, Dispatch } from "redux"
import { ThunkActionDispatch } from "redux-thunk"

export enum ActiveActionTypes {
  ACTIVE_PENDING = 'ACTIVE_PENDING',
  ACTIVE_SUCCESS = 'ACTIVE_SUCCESS',
  ACTIVE_ERROR = 'ACTIVE_ERROR',
}

//Action types
export type ActivePendingAction = {
  type: ActiveActionTypes.ACTIVE_PENDING
}
export type ActiveSuccessAction = {
  type: ActiveActionTypes.ACTIVE_SUCCESS
  payload: ActiveType[]
}
export type ActiveErrorAction = {
  type: ActiveActionTypes.ACTIVE_ERROR
  payload: Error
}

export type ActiveActions = ActivePendingAction | ActiveSuccessAction | ActiveErrorAction
//Actoins
export const activePending: ActionCreator<ActivePendingAction> = () => ({
  type: ActiveActionTypes.ACTIVE_PENDING,
})
export const activeSuccess: ActionCreator<ActiveSuccessAction> = (data) => ({
  type: ActiveActionTypes.ACTIVE_SUCCESS,
  payload: data,
})
export const activeError: ActionCreator<ActiveErrorAction> = (error) => ({
  type: ActiveActionTypes.ACTIVE_ERROR,
  payload: error,
})

export const activeFetch: ThunkActionDispatch<any> = () => {
  return (dispatch:Dispatch) => {
    dispatch(activePending())

    const options = {
      method: 'GET',
      'Content-Type': 'application/json',
    }
    fetch('/api/logger', options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(activeSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(activeError(error))
      })
  }
}
