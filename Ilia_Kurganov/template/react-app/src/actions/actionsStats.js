export const STATS_PENDING = 'STATS_PENDING'
import { authService } from './../services/auth/authService';
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const STATS_ERROR = 'STATS_ERROR'

export const statsPending = () => ({
  type: STATS_PENDING,
})
export const statsSuccess = (data) => ({
  type: STATS_SUCCESS,
  payload: data,
})
export const statsError = (err) => ({
  type: STATS_ERROR,
  payload: err,
})

export const getStats = () => {
  return (dispatch) => {
    dispatch(statsPending())
    const options = {
      method: 'GET',
      header: {
        Authentication: `Bearer ${authService.token}`,
      },
    }
    fetch('/api/log', options)
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(statsSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(statsError(err))
      })
  }
}
