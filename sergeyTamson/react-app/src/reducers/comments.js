import {
  COMMENTS_DELETE,
  COMMENTS_ERROR,
  COMMENTS_FIND_ID,
  COMMENTS_PENDING,
  COMMENTS_SUCCESS,
} from '../actions/comments'

const initialState = {
  loading: false,
  data: [],
  error: null,
  //   currentId: null,
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case COMMENTS_DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      }
    case COMMENTS_FIND_ID:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return state
  }
}
