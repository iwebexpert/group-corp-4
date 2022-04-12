import {
  STATS_LOADING,
  STATS_SUCCESS,
  STATS_ERROR,
  STATS_ADD_SUCCESS,
  STATS_ADD_ERROR,
  STATS_EDIT_SUCCESS,
  STATS_EDIT_ERROR,
  STATS_DELETE_SUCCESS,
  STATS_DELETE_ERROR,
} from '../actions/statsActions'

const initialState = {
  data: [],
  loading: true,
  error: null,
  currentId: null,
}

export const statsReducer = (state = initialState, action) => {
  if ([STATS_ERROR, STATS_ADD_ERROR, STATS_EDIT_ERROR, STATS_DELETE_ERROR].includes(action.type)) {
    return { ...state, error: action.payload, loading: false }
  } else {
    switch (action.type) {
      case STATS_LOADING:
        return { ...state, loading: true }
      case STATS_SUCCESS:
        return { ...state, data: action.payload, loading: false }
      case STATS_ADD_SUCCESS:
        return { ...state, data: [...state.data, action.payload], loading: false }
      case STATS_EDIT_SUCCESS:
        return {
          ...state,
          data: state.data.map((item) => (item.id === action.statsId ? action.payload : item)),
          loading: false,
        }
      case STATS_DELETE_SUCCESS:
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
