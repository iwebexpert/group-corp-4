import { requestOptions, urls } from '../helpers/urlHelper'
import { Dispatch, ActionCreator } from 'redux';


export enum LogsActionsType {
  LOGS_PENDING = 'LOGS_PENDING',
  LOGS_SUCCESS = 'LOGS_SUCCESS',
  LOGS_ERROR = 'LOGS_ERROR',
  SEND_LOG = 'SEND_LOG',
}

export type logsSuccessPayloadType = {
  id: string,
  action: string,
  user: string
}

export type LogsPendingAction = {
  type: LogsActionsType.LOGS_PENDING
}
export type LogsSuccessAction = {
  type: LogsActionsType.LOGS_SUCCESS,
  payload: [logsSuccessPayloadType]
}
export type LogsErrorAction = {
  type: LogsActionsType.LOGS_ERROR,
  payload: Error
}
export type SendLogAction = {
  type: LogsActionsType.SEND_LOG,
  payload: logsSuccessPayloadType
}

export type LogsActions = LogsPendingAction | LogsSuccessAction | LogsErrorAction | SendLogAction

export const logsPending: ActionCreator<LogsPendingAction> = () => ({
  type: LogsActionsType.LOGS_PENDING,
})
export const logsSuccess: ActionCreator<LogsSuccessAction> = (data) => ({
  type: LogsActionsType.LOGS_SUCCESS,
  payload: data,
})
export const logsError: ActionCreator<LogsErrorAction> = (err) => ({
  type: LogsActionsType.LOGS_ERROR,
  payload: err,
})

export const sendLog: ActionCreator<SendLogAction> = (data) => {
  fetch(urls.logs(), requestOptions('POST', data))
  return {
    type: LogsActionsType.SEND_LOG,
    payload: data,
  }
}

export const getLogs = () => {
  return (dispatch: Dispatch) => {
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

