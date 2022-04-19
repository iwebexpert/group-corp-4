import { urls, requestOptions } from '../helpers/urlHelper'
import { Dispatch, ActionCreator } from 'redux';

export enum CommentsActionsType {
  COMMENTS_PENDING = 'COMMENTS_PENDING',
  COMMENTS_SUCCESS = 'COMMENTS_SUCCESS',
  COMMENTS_ERROR = 'COMMENTS_ERROR',
  SEND_COMMENT = 'SEND_COMMENT'
}

export type CommentPayload = {
  pageId: string,
  userId: number,
  content: string,
  id?: number
}

type CommentsPendingAction = {
  type: CommentsActionsType.COMMENTS_PENDING
}
type CommentsSuccessAction = {
  type: CommentsActionsType.COMMENTS_SUCCESS,
  payload: Array<CommentPayload>
}
type CommentsErrorAction = {
  type: CommentsActionsType.COMMENTS_ERROR
  payload: Error
}
type sendCommentAction = {
  type: CommentsActionsType.SEND_COMMENT
  payload: CommentPayload
}

export type CommentsActions = CommentsPendingAction | CommentsSuccessAction | CommentsErrorAction | sendCommentAction

export const commentsPending: ActionCreator<CommentsPendingAction> = () => ({
  type: CommentsActionsType.COMMENTS_PENDING,
})
export const commentsSuccess: ActionCreator<CommentsSuccessAction> = (data) => ({
  type: CommentsActionsType.COMMENTS_SUCCESS,
  payload: data,
})
export const commentsError: ActionCreator<CommentsErrorAction> = (error) => ({
  type: CommentsActionsType.COMMENTS_ERROR,
  payload: error,
})
export const sendComment: ActionCreator<sendCommentAction> = (data) => {
  return {
    type: CommentsActionsType.SEND_COMMENT,
    payload: data,
  }
}

export const commentsFetch = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(commentsPending())
    fetch(urls.getComment(id), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(commentsSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(commentsError(err))
      })
  }
}
export const sendCommentThunk = (data: CommentPayload) => {
  return (dispatch: Dispatch) => {
    fetch(urls.sendComments(), requestOptions('POST', data))
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(sendComment(data))
        return data
      })
      .catch((err) => {
        dispatch(commentsError(err))
      })
  }
}