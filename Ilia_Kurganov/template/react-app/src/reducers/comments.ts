import { CommentPayload, CommentsActions, CommentsActionsType } from '../actions/actionsComments'
import { Reducer } from 'redux';

export type CommentsReducerState = {
  isLoading: boolean,
  data: Array<CommentPayload>,
  isError: boolean,
  error: Error | null,
}

const initialState: CommentsReducerState = {
  isLoading: false,
  data: [],
  isError: false,
  error: null,
}

export const commentsReducer: Reducer<CommentsReducerState, CommentsActions> = (state = initialState, action) => {
  switch (action.type) {
    case CommentsActionsType.COMMENTS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case CommentsActionsType.COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case CommentsActionsType.COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      }
    case CommentsActionsType.SEND_COMMENT:
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.payload),
      }
    default:
      return state
  }
}
