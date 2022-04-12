import { urls, request, pageResponse } from '../../helpers/requestHelper'

export const STATS_LOADING = 'STATS_LOADING'
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const STATS_ERROR = 'STATS_ERROR'
export const STATS_ADD_SUCCESS = 'STATS_ADD_SUCCESS'
export const STATS_ADD_ERROR = 'STATS_ADD_ERROR'
export const STATS_EDIT_SUCCESS = 'STATS_EDIT_SUCCESS'
export const STATS_EDIT_ERROR = 'STATS_EDIT_ERROR'
export const STATS_DELETE_SUCCESS = 'STATS_DELETE_SUCCESS'
export const STATS_DELETE_ERROR = 'STATS_DELETE_ERROR'

export const statsLoading = () => ({
  type: STATS_LOADING,
})

export const getAllstats = () => {
  return (dispatch) => {
    dispatch(statsLoading())
    request(url.stats(), 'GET')
      .then((data) => dispatch(statsResponse(STATS_SUCCESS, data)))
      .catch((error) => dispatch(statsResponse(STATS_ERROR, error)))
  }
}
export const addstats = (data) => {
  return (dispatch) => {
    dispatch(statsLoading())
    request(url.stats(), 'POST', data)
      .then((data) => dispatch(statsResponse(STATS_ADD_SUCCESS, data)))
      .catch((error) => dispatch(statsResponse(STATS_ADD_ERROR, error)))
  }
}
export const editstats = (data) => {
  return (dispatch) => {
    dispatch(statsLoading())
    request(url.getStats(data.id), 'PUT', data)
      .then((data) => dispatch(statsResponse(STATS_EDIT_SUCCESS, data)))
      .catch((error) => dispatch(statsResponse(STATS_EDIT_ERROR, error)))
  }
}
export const deletestats = (id) => {
  return (dispatch) => {
    dispatch(statsLoading())
    request(url.getStats(id), 'DELETE')
      .then(() => dispatch(statsResponse(STATS_DELETE_SUCCESS, id)))
      .catch((error) => dispatch(statsResponse(STATS_DELETE_ERROR, error)))
  }
}
