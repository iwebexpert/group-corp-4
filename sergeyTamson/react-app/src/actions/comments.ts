import { ActionCreator, Dispatch } from 'redux'
import { authService } from '../components/services/auth/authService'

export enum CommentsActionTypes {
  COMMENTS_PENDING = 'COMMENTS_PENDING',
  COMMENTS_SUCCESS = 'COMMENTS_SUCCESS',
  COMMENTS_ERROR = 'COMMENTS_ERROR',
  COMMENTS_DELETE = 'COMMENTS_DELETE',
  COMMENTS_FIND_ID = 'COMMENTS_FIND_ID',
}

export type CommentsPendingAction = {
  type: CommentsActionTypes.COMMENTS_PENDING
}
export type CommentsSuccessAction = {
  type: CommentsActionTypes.COMMENTS_SUCCESS
  payload: any
}
export type CommentsErrorAction = {
  type: CommentsActionTypes.COMMENTS_ERROR
  payload: Error
}
export type CommentsDeleteAction = {
  type: CommentsActionTypes.COMMENTS_DELETE
  payload: string
}
export type CommentsFindIdAction = {
  type: CommentsActionTypes.COMMENTS_FIND_ID
}

export type CommentsActions =
  | CommentsPendingAction
  | CommentsSuccessAction
  | CommentsErrorAction
  | CommentsDeleteAction
  | CommentsFindIdAction

export type CommentsPayload = {
  content: string
  title: string
  pageId: number | string
  userId: number | string
  id: number | string
}

// Actions
export const commentsPending: ActionCreator<CommentsPendingAction> = () => ({
  type: CommentsActionTypes.COMMENTS_PENDING,
})

export const commentsSuccess: ActionCreator<CommentsSuccessAction> = (data) => ({
  type: CommentsActionTypes.COMMENTS_SUCCESS,
  payload: data,
})

export const commentsError: ActionCreator<CommentsErrorAction> = (error) => ({
  type: CommentsActionTypes.COMMENTS_ERROR,
  payload: error,
})

export const commentsDelete: ActionCreator<CommentsDeleteAction> = (id) => ({
  type: CommentsActionTypes.COMMENTS_DELETE,
  payload: id,
})

export const commentsAddFetch: ActionCreator<any> = (content, title, pageId, userId) => {
  const data = {
    content,
    title,
    pageId,
    userId,
  }

  const options = {
    method: 'POST',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      // Authentication: `Bearer ${authService.token}`,
    },
    body: JSON.stringify(data),
  }

  return fetch('http://localhost:9000/api/comments', options)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) throw res.error
      return res
    })
    .catch((err) => console.log(err))
}

export const commentsFindByPageIdFetch: ActionCreator<any> = (pageId) => {
  return (dispatch: Dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch(`http://localhost:9000/api/comments?pageId=${pageId}`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        return dispatch(commentsSuccess(res))
      })
      .catch((err) => console.log(err))
  }
}
