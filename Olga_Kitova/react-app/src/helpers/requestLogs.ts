import { getOptions } from 'config/requestConfig'
import { BASE_URL_LOGS } from 'helpers/URLRequest'
import { FetchRequestLogsPayload } from 'middlewares/loggerActionUserMiddleware'

export const fetchRequestLogs = (data: FetchRequestLogsPayload) => {
  return fetch(BASE_URL_LOGS, getOptions('POST', data, false))
    .then((res: Response) => res && res.json())
    .then((res) => {
      if (res.error) throw res.error
      else {
        return res
      }
    })
    .catch((err) => console.log(err))
}
