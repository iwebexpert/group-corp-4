import { Reducer } from 'redux'
import { StatsActionTypes, StatsActions, StatsPayload } from '../actions/stats'

export type StatsReducerState = {
  users: any
  loading: boolean
  error: any
}

const initialState: StatsReducerState = {
  users: [],
  loading: false,
  error: null,
}

export const statsReducer: Reducer<StatsReducerState, StatsActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case StatsActionTypes.STATS_PENDING:
      return { ...state, loading: true }
    case StatsActionTypes.STATS_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case StatsActionTypes.STATS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
