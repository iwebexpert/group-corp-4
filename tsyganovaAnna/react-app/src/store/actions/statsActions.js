import { urls, request, response } from '../../helpers/requestHelper'

export const STATS_LOADING = 'STATS_LOADING'
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const STATS_ERROR = 'STATS_ERROR'
export const STATS_ADD_SUCCESS = 'STATS_ADD_SUCCESS'
export const STATS_ADD_ERROR = 'STATS_ADD_ERROR'

export const getLogsOfUser = () => {
  return (dispatch) => {
    request(urls.getLogsOfUser(), 'GET')
      .then((data) => dispatch(response(STATS_SUCCESS, data)))
      .catch((error) => dispatch(response(STATS_ERROR, error)))
  }
}
export const addStats = (data) => {
  return (dispatch) => {
    request(urls.stats(), 'POST', data)
      .then((data) => dispatch(response(STATS_ADD_SUCCESS, data)))
      .catch((error) => dispatch(response(STATS_ADD_ERROR, error)))
  }
}
