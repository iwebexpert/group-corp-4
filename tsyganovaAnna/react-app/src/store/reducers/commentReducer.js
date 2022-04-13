import {
  COMMENTS_LOADING,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR,
  COMMENTS_ADD_SUCCESS,
  COMMENTS_ADD_ERROR,
  COMMENTS_EDIT_SUCCESS,
  COMMENTS_EDIT_ERROR,
  COMMENTS_DELETE_SUCCESS,
  COMMENTS_DELETE_ERROR,
} from '../actions/commentActions'

const initialState = {
  data: [],
  loading: true,
  error: null,
  currentId: null,
}

export const commentReducer = (state = initialState, action) => {
  if (
    [COMMENTS_ERROR, COMMENTS_ADD_ERROR, COMMENTS_EDIT_ERROR, COMMENTS_DELETE_ERROR].includes(
      action.type,
    )
  ) {
    return { ...state, error: action.payload, loading: false }
  } else {
    switch (action.type) {
      case COMMENTS_LOADING:
        return { ...state, loading: true }
      case COMMENTS_SUCCESS:
        console.log('action.payload: ', action.payload)
        return { ...state, data: action.payload, loading: false }
      case COMMENTS_ADD_SUCCESS:
        return { ...state, data: [...state.data, action.payload], loading: false }
      case COMMENTS_EDIT_SUCCESS:
        return {
          ...state,
          data: state.data.map((item) => (item.id === action.commentId ? action.payload : item)),
          loading: false,
        }
      case COMMENTS_DELETE_SUCCESS:
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload),
          loading: false,
        }
      default:
        return state
    }
  }
}
