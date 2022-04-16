import { StatsActionTypes } from 'constants/constantsStats'
import { getOptions } from 'config/requestConfig'
import { BASE_URL_USERS_LOGS } from 'helpers/URLRequest'
import { ActionCreator, Dispatch } from 'redux'

// Union of types
export type StatsActions = GetStatsPending | GetStatsSuccess | GetStatsError

type LogsPayload = {
  userId: Multiple
  actions: {
    date: string
    action: string
  }
  id: Multiple
}

export type StatsPayload = {
  id: string
  name: string
  email: string
  password: string
  role: string
  logs: Array<LogsPayload>
}

// Get users with logs

//Action types
export type GetStatsPending = {
  type: StatsActionTypes.STATS_GET_PENDING
}
// Action
export const getStatsPending: ActionCreator<GetStatsPending> = () => ({
  type: StatsActionTypes.STATS_GET_PENDING,
})

//Action types
export type GetStatsSuccess = {
  type: StatsActionTypes.STATS_GET_SUCCESS
  payload: StatsPayload[]
}
// Action
export const getStatsSuccess: ActionCreator<GetStatsSuccess> = (data) => ({
  type: StatsActionTypes.STATS_GET_SUCCESS,
  payload: data,
})

//Action types
export type GetStatsError = {
  type: StatsActionTypes.STATS_GET_ERROR
  payload: Error
}
// Action
export const getStatsError: ActionCreator<GetStatsError> = (error) => ({
  type: StatsActionTypes.STATS_GET_ERROR,
  payload: error,
})

// Get stats fetch
export const getUsersWithLogsFetch = () => {
  return (dispatch: Dispatch) => {
    dispatch(getStatsPending())
    fetch(BASE_URL_USERS_LOGS, getOptions('GET'))
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.error
        else dispatch(getStatsSuccess(data))
      })
      .catch((error) => dispatch(getStatsError(error)))
  }
}
