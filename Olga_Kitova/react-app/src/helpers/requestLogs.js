import {BASE_URL_LOGS, getOptions} from 'config/requestConfig'
 
export const fetchRequestLogs = (data) => {
    return fetch(BASE_URL_LOGS, getOptions('POST', data, false))
    .then((res) => res.text())
    .then(res => {
        if(res.error) throw res.error
        else {
            return res
        }
    })
    .catch(err => console.log(err))
}