import { requestOptions, urls } from '../helpers/urlHelper'

export const LOGS_PENDING = 'LOGS_PENDING'
export const LOGS_SUCCESS = 'LOGS_SUCCESS'
export const LOGS_ERROR = 'LOGS_ERROR'

export const logsPending = () => ({
  type: LOGS_PENDING,
})
export const logsSuccess = (data) => ({
  type: LOGS_SUCCESS,
  payload: data,
})
export const logsError = (err) => ({
  type: LOGS_ERROR,
  payload: err,
})

export const getLogs = () => {
  return (dispatch) => {
    dispatch(logsPending())
    fetch(urls.logs(), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(logsSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(logsError(err))
      })
  }
}

export const sendLog = (data) => {
  return () => {
    fetch(urls.logs, requestOptions('POST', data)).then((res) => res.json())
  }
}
