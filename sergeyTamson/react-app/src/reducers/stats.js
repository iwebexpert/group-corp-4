import { STATS_PENDING, STATS_SUCCESS, STATS_ERROR } from '../actions/stats'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATS_PENDING:
      return { ...state, loading: true }
    case STATS_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case STATS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
