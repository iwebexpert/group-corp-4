import { CommentsActionTypes } from 'constants/constantsComments'
import { Reducer } from 'redux'
import { CommentsActions, CommentsPayload } from 'actions/actionComments'

export type CommentsReducerState = {
  data: CommentsPayload[]
  loading: boolean
  error: Error | null
  currentsComments: CommentsPayload[]
}

const initialState: CommentsReducerState = {
  data: [],
  loading: false,
  error: null,
  currentsComments: [],
}

export const commentsReducer: Reducer<CommentsReducerState, CommentsActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CommentsActionTypes.COMMENTS_GET_PENDING:
      return { ...state, loading: true, currentsComments: [] }
    case CommentsActionTypes.COMMENTS_GET_SUCCESS:
      return { ...state, loading: false, currentsComments: [...action.payload] }
    case CommentsActionTypes.COMMENTS_GET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case CommentsActionTypes.ALL_COMMENTS_GET_PENDING:
      return { ...state, loading: true }
    case CommentsActionTypes.ALL_COMMENTS_GET_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case CommentsActionTypes.ALL_COMMENTS_GET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case CommentsActionTypes.COMMENTS_ADD_SUCCESS:
      return { ...state, currentsComments: [...state.currentsComments, action.payload] }
    case CommentsActionTypes.COMMENTS_ADD_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
