import { COMMENTS_ERROR, COMMENTS_PENDING, COMMENTS_SUCCESS } from '../actions/actionsComments'

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  error: null,
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      }
    default:
      return state
  }
}
