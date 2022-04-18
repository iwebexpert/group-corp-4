import { Reducer } from 'redux'
import { CommentsActionTypes, CommentsActions, CommentsPayload } from '../actions/comments'

export type CommentsReducerState = {
  loading: Boolean
  data: any
  error: Error | null
}

const initialState: CommentsReducerState = {
  loading: false,
  data: [],
  error: null,
}

export const commentsReducer: Reducer<CommentsReducerState, CommentsActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CommentsActionTypes.COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case CommentsActionTypes.COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case CommentsActionTypes.COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CommentsActionTypes.COMMENTS_DELETE:
      return {
        ...state,
        data: state.data.filter((item: CommentsPayload) => item.id !== action.payload),
      }

    default:
      return state
  }
}
