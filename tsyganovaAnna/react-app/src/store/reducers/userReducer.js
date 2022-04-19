import {
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
  USER_ADD_SUCCESS,
  USER_ADD_ERROR,
  USER_EDIT_SUCCESS,
  USER_EDIT_ERROR,
  USER_DELETE_SUCCESS,
  USER_DELETE_ERROR,
} from '../actions/userActions'

const initialState = {
  data: [],
  loading: true,
  error: null,
  currentId: null,
}

export const userReducer = (state = initialState, action) => {
  if ([USER_ERROR, USER_ADD_ERROR, USER_EDIT_ERROR, USER_DELETE_ERROR].includes(action.type)) {
    return { ...state, error: action.payload, loading: false }
  } else {
    switch (action.type) {
      case USER_LOADING:
        return { ...state, loading: true }
      case USER_SUCCESS:
        return { ...state, data: action.payload, loading: false }
      case USER_ADD_SUCCESS:
        return { ...state, data: [...state.data, action.payload], loading: false }
      case USER_EDIT_SUCCESS:
        return {
          ...state,
          data: state.data.map((item) => (item.id === action.userId ? action.payload : item)),
          loading: false,
        }
      case USER_DELETE_SUCCESS:
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
