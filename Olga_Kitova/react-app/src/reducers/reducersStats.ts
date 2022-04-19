import { StatsActionTypes } from 'constants/constantsStats'
import { Reducer } from 'redux'
import { StatsActions, StatsPayload } from 'actions/actionsStats'

export type StatsReducerState = {
  users: StatsPayload[]
  loading: boolean
  error: Error | null
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
    case StatsActionTypes.STATS_GET_PENDING:
      return { ...state, loading: true }
    case StatsActionTypes.STATS_GET_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case StatsActionTypes.STATS_GET_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
