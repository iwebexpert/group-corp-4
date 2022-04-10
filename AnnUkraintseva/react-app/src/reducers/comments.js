import {
  COMMENT_PENDING,
  COMMENT_SUCCESS,
  COMMENT_ERROR,
  COMMENT_ADD_SUCCESS,
  COMMENT_ADD_ERROR,
} from '../actions/comments'

const initialState = {
  loading: false,
  data: [],
  error: null,
}

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_PENDING:
      return {
        ...state,
        loading: true,
      }
    case COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case COMMENT_ADD_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    case COMMENT_ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
