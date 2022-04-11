import {STATS_GET_PENDING, STATS_GET_SUCCESS, STATS_GET_ERROR} from 'constants/constantsStats'
import {BASE_URL_USERS_LOGS, getOptions} from 'config/requestConfig'


// Get users with logs
export const getStatsPending = () => ({
    type: STATS_GET_PENDING
})
export const getStatsSuccess = (data) => ({
    type: STATS_GET_SUCCESS,
    payload: data
})
export const getStatsError = (error) => ({
    type: STATS_GET_ERROR,
    payload: error
})

// Get stats fetch
export const getUsersWithLogsFetch = () => {
return (dispatch) => {
    dispatch(getStatsPending())
    fetch(BASE_URL_USERS_LOGS, getOptions('GET'))
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getStatsSuccess(data))
    })
    .catch(error => dispatch(getStatsError(error)))
}
}