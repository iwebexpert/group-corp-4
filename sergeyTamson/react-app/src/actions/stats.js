import { authService } from '../components/services/auth/authService'

export const STATS_PENDING = 'STATS_PENDING'
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const STATS_ERROR = 'STATS_ERROR'

export const statsPending = () => ({
  type: STATS_PENDING,
})

export const statsSuccess = (data) => ({
  type: STATS_SUCCESS,
  payload: data,
})

export const statsError = (error) => ({
  type: STATS_ERROR,
  payload: error,
})

export const statsFetch = () => {
  return (dispatch) => {
    dispatch(statsPending())

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch('api/users?_embed=logs', options)
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
