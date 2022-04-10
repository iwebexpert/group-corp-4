import { LOGS_PENDING, LOGS_SUCCESS, LOGS_ERROR } from '../actions/actionsLogs'

const initialState = {
  isLoading: false,
  data: [],
}

export const logsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case LOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case LOGS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    default:
      return state
  }
}
