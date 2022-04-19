import { CommentsActionTypes } from 'constants/constantsComments'
import { getOptions } from 'config/requestConfig'
import { BASE_URL_COMMENTS } from 'helpers/URLRequest'
import { ActionCreator, Dispatch } from 'redux'
import { PagesPayload } from './actionsPages'

// Union of types
export type CommentsActions =
  | GetCommentsPending
  | GetCommentsSuccess
  | GetCommentsError
  | GetAllCommentsPending
  | GetAllCommentsSuccess
  | GetAllCommentsError
  | AddCommentsError
  | AddCommentsSuccess

export type CommentsPayload = {
  id: string
  pageId: string
  userId: string
  content: string
  page?: PagesPayload
  user?: UserType
}

// Get comments by one page

// Action type
export type GetCommentsPending = {
  type: CommentsActionTypes.COMMENTS_GET_PENDING
}
// Action
export const getCommentsPending: ActionCreator<GetCommentsPending> = () => ({
  type: CommentsActionTypes.COMMENTS_GET_PENDING,
})

// Action type
export type GetCommentsSuccess = {
  type: CommentsActionTypes.COMMENTS_GET_SUCCESS
  payload: CommentsPayload[]
}
//Action
export const getCommentsSuccess: ActionCreator<GetCommentsSuccess> = (data) => ({
  type: CommentsActionTypes.COMMENTS_GET_SUCCESS,
  payload: data,
})

// Action type
export type GetCommentsError = {
  type: CommentsActionTypes.COMMENTS_GET_ERROR
  payload: Error
}
// Action
export const getCommentsError: ActionCreator<GetCommentsError> = (error) => ({
  type: CommentsActionTypes.COMMENTS_GET_ERROR,
  payload: error,
})

// Get comments from one page fetch
export const getCommentsFetch: ActionCreator<any> = (pageId) => {
  return (dispatch: Dispatch) => {
    dispatch(getCommentsPending())
    fetch(`${BASE_URL_COMMENTS}?pageId=${pageId}&_expand=user`, getOptions('GET'))
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error
        else dispatch(getCommentsSuccess(data))
      })
      .catch((error) => dispatch(getCommentsError(error)))
  }
}

// Get all comments

// Action types
export type GetAllCommentsPending = {
  type: CommentsActionTypes.ALL_COMMENTS_GET_PENDING
}
// Action
export const getAllCommentsPending: ActionCreator<GetAllCommentsPending> = () => ({
  type: CommentsActionTypes.ALL_COMMENTS_GET_PENDING,
})

// Action types
export type GetAllCommentsSuccess = {
  type: CommentsActionTypes.ALL_COMMENTS_GET_SUCCESS
  payload: CommentsPayload[]
}
// Action
export const getAllCommentsSuccess: ActionCreator<GetAllCommentsSuccess> = (data) => ({
  type: CommentsActionTypes.ALL_COMMENTS_GET_SUCCESS,
  payload: data,
})

// Action types
export type GetAllCommentsError = {
  type: CommentsActionTypes.ALL_COMMENTS_GET_ERROR
  payload: Error
}
// Action
export const getAllCommentsError: ActionCreator<GetAllCommentsError> = (error) => ({
  type: CommentsActionTypes.ALL_COMMENTS_GET_ERROR,
  payload: error,
})

// Get comments fetch
export const getAllCommentsFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(getAllCommentsPending())
    fetch(`${BASE_URL_COMMENTS}?_expand=page`, getOptions('GET'))
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error
        else dispatch(getAllCommentsSuccess(data))
      })
      .catch((error) => dispatch(getAllCommentsError(error)))
  }
}

// Add comments

// Action types
export type AddCommentsSuccess = {
  type: CommentsActionTypes.COMMENTS_ADD_SUCCESS
  payload: CommentsPayload
}
// Action
export const addCommentsSuccess: ActionCreator<AddCommentsSuccess> = (data) => ({
  type: CommentsActionTypes.COMMENTS_ADD_SUCCESS,
  payload: data,
})

//Action types
export type AddCommentsError = {
  type: CommentsActionTypes.COMMENTS_ADD_ERROR
  payload: Error
}
// Action
export const addCommentsError: ActionCreator<AddCommentsError> = (error) => ({
  type: CommentsActionTypes.COMMENTS_ADD_ERROR,
  payload: error,
})

// Add comments fetch
export const addCommentsFetch: ActionCreator<any> = (data) => {
  return (dispatch: Dispatch) => {
    fetch(BASE_URL_COMMENTS, getOptions('POST', data))
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        else {
          const id = res?.id
          fetch(`${BASE_URL_COMMENTS}/${id}?_expand=user`, getOptions('GET'))
            .then((data) => data.json())
            .then((data) => {
              if (data.error) throw data.error
              else dispatch(addCommentsSuccess(data))
            })
        }
      })
      .catch((error) => dispatch(addCommentsError(error)))
  }
}
