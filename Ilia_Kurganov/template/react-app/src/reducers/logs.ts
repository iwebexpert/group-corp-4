import { LogsActions, LogsActionsType, logsSuccessPayloadType } from '../actions/actionsLogs'
import { Reducer } from 'redux';

export type LogsReducerState = {
  isLoading: boolean,
  data: Array<logsSuccessPayloadType>,
  error: Error | null
}

const initialState: LogsReducerState = {
  isLoading: false,
  data: [],
  error: null
}

export const logsReducer: Reducer<LogsReducerState, LogsActions> = (state = initialState, action) => {
  switch (action.type) {
    case LogsActionsType.LOGS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case LogsActionsType.LOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case LogsActionsType.LOGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case LogsActionsType.SEND_LOG:
      return {
        ...state,
        isLoading: false,
        data:state.data.concat(action.payload),
      }

    default:
      return state
  }
}
