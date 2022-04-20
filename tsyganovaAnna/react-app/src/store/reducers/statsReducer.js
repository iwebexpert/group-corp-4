import {
  STATS_SUCCESS,
  STATS_ERROR,
  STATS_ADD_SUCCESS,
  STATS_ADD_ERROR,
} from '../actions/statsActions'

const initialState = {
  data: [],
  loading: true,
  error: null,
  currentId: null,
}

export const statsReducer = (state = initialState, action) => {
  if ([STATS_ERROR, STATS_ADD_ERROR].includes(action.type)) {
    return { ...state, error: action.payload, loading: false }
  } else {
    switch (action.type) {
      case STATS_SUCCESS:
        return { ...state, data: action.payload, loading: false }
      case STATS_ADD_SUCCESS:
        return { ...state, data: [...state.data, action.payload], loading: false }
      default:
        return state
    }
  }
}
