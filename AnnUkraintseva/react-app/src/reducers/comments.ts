import { Reducer } from 'redux'
import {
  CommentActionTypes, CommentActions
} from '../actions/comments'

export type CommentReduserState ={
  loading: boolean,
  data: CommentType[],
  error: Error | null,
}

const initialState: CommentReduserState = {
  loading: false,
  data: [],
  error: null,
}

export const commentReducer: Reducer<CommentReduserState, CommentActions> = (state = initialState, action) => {
  switch (action.type) {
    case CommentActionTypes.COMMENT_PENDING:
      return {
        ...state,
        loading: true,
      }
    case CommentActionTypes.COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case CommentActionTypes.COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CommentActionTypes.COMMENT_ADD_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    case CommentActionTypes.COMMENT_ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
