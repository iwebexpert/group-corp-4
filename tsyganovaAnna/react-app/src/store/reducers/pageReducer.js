import {
  PAGE_LOADING,
  PAGE_SUCCESS,
  PAGE_ERROR,
  PAGE_ADD_SUCCESS,
  PAGE_ADD_ERROR,
  PAGE_EDIT_SUCCESS,
  PAGE_EDIT_ERROR,
  PAGE_DELETE_SUCCESS,
  PAGE_DELETE_ERROR,
} from '../actions/pageActions'

const initialState = {
  data: [],
  loading: true,
  error: null,
  currentId: null,
}

export const pageReducer = (state = initialState, action) => {
  if ([PAGE_ERROR, PAGE_ADD_ERROR, PAGE_EDIT_ERROR, PAGE_DELETE_ERROR].includes(action.type)) {
    return { ...state, error: action.payload, loading: false }
  } else {
    switch (action.type) {
      case PAGE_LOADING:
        return { ...state, loading: true }
      case PAGE_SUCCESS:
        return { ...state, data: action.payload, loading: false }
      case PAGE_ADD_SUCCESS:
        return { ...state, data: [...state.data, action.payload], loading: false }
      case PAGE_EDIT_SUCCESS:
        return {
          ...state,
          data: state.data.map((item) => (item.id === action.pageId ? action.payload : item)),
          loading: false,
        }
      case PAGE_DELETE_SUCCESS:
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
