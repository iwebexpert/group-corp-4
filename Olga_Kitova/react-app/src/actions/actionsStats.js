import {authService} from 'services/auth/authService'
import {STATS_GET_PENDING, STATS_GET_SUCCESS, STATS_GET_ERROR} from 'constants/constantsStats'

const BASE_URL = 'api/users?_embed=logs'

const options = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        'Authentication': `Bearer ${authService.token}`
    }   
}

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
    fetch(BASE_URL, options)
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getStatsSuccess(data))
    })
    .catch(error => dispatch(getStatsError(error)))
}
}