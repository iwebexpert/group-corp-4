import { ActionCreator, Dispatch } from "redux"
import { ThunkActionDispatch } from "redux-thunk"
import { authServices } from "../services/auth/authServices"

export enum CommentActionTypes{
  COMMENT_PENDING = 'COMMENT_PENDING',
  COMMENT_SUCCESS = 'COMMENT_SUCCESS',
  COMMENT_ERROR = 'COMMENT_ERROR',
  COMMENT_ADD_ERROR = 'COMMENT_ADD_ERROR',
  COMMENT_ADD_SUCCESS = 'COMMENT_ADD_SUCCESS',
}

//Actoin types
export type CommentPendingAction={
  type:CommentActionTypes.COMMENT_PENDING
}
export type CommentSuccessAction={
  type:CommentActionTypes.COMMENT_SUCCESS
  payload: CommentType[]
}
export type CommentErrorAction={
  type:CommentActionTypes.COMMENT_ERROR
  payload: Error
}
export type CommentAddSuccessAction={
  type:CommentActionTypes.COMMENT_ADD_SUCCESS
  payload: CommentType
}
export type CommentAddErrorAction={
  type:CommentActionTypes.COMMENT_ADD_ERROR
  payload: Error
}

export type CommentPayload={
  id: string
  pageId: string
  userId: string
  content: string
}


export type CommentActions = 
  CommentPendingAction 
| CommentSuccessAction 
| CommentErrorAction 
| CommentAddSuccessAction
| CommentAddErrorAction

//Actoins
export const commentPending: ActionCreator<CommentPendingAction> = () => ({
  type: CommentActionTypes.COMMENT_PENDING,
})
export const commentSuccess: ActionCreator<CommentSuccessAction> = (data) => ({
  type: CommentActionTypes.COMMENT_SUCCESS,
  payload: data,
})
export const commentError: ActionCreator<CommentErrorAction> = (error) => ({
  type: CommentActionTypes.COMMENT_ERROR,
  payload: error,
})

export const commentFetch: ThunkActionDispatch<any> = (pageId) => {
  return (dispatch: Dispatch) => {
    dispatch(commentPending())

    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authServices.token}`,

      },
    }
    fetch(`/api/comments?pageId=${pageId}`,options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(commentSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(commentError(error))
      })
  }
}


export const commentAddSuccess: ActionCreator<CommentAddSuccessAction> = (data) => ({
  type: CommentActionTypes.COMMENT_ADD_SUCCESS,
  payload: data,
})
export const commentAddError: ActionCreator<CommentAddErrorAction> = (error) => ({
  type: CommentActionTypes.COMMENT_ADD_ERROR,
  payload: error,
})


export const commentAddFetch: ThunkActionDispatch<any> = (data) => {
  return (dispatch: Dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authServices.token}`,
      },
      body: JSON.stringify(data),
    }

    fetch('/api/comments', options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(commentAddSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(commentAddError(error))
      })
  }
}
