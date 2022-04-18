import { ActionCreator, Dispatch } from 'redux'
import { authService } from '../components/services/auth/authService'

export enum StatsActionTypes {
  STATS_PENDING = 'STATS_PENDING',
  STATS_SUCCESS = 'STATS_SUCCESS',
  STATS_ERROR = 'STATS_ERROR',
}

export type StatsPendingAction = {
  type: StatsActionTypes.STATS_PENDING
}
export type StatsSuccessAction = {
  type: StatsActionTypes.STATS_SUCCESS
  payload: any
}
export type StatsErrorAction = {
  type: StatsActionTypes.STATS_ERROR
  payload: Error
}

export type StatsActions = StatsPendingAction | StatsSuccessAction | StatsErrorAction

export type StatsPayload = {
  userId: number
  id: number
}

// Actions
export const statsPending: ActionCreator<StatsPendingAction> = () => ({
  type: StatsActionTypes.STATS_PENDING,
})

export const statsSuccess: ActionCreator<StatsSuccessAction> = (data) => ({
  type: StatsActionTypes.STATS_SUCCESS,
  payload: data,
})

export const statsError: ActionCreator<StatsErrorAction> = (error) => ({
  type: StatsActionTypes.STATS_ERROR,
  payload: error,
})

export const statsFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(statsPending())

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch('http://localhost:9000/api/users?_embed=logs', options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        } else {
          dispatch(statsSuccess(res))
          return res
        }
      })
      .catch((error) => dispatch(statsError(error)))
  }
}
