import { STATS_PENDING, STATS_SUCCESS, STATS_ERROR } from '../actions/actionsStats'

const initialState = {
  isLoading: false,
  data: [],
}

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case STATS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    default:
      return state
  }
}
