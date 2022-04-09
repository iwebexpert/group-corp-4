import {ALL_USERS_GET_PENDING, ALL_USERS_GET_SUCCESS, ALL_USERS_GET_ERROR} from 'constants/constantsUsers'
import {BASE_URL_USERS, getOptions} from 'config/requestConfig'

// Get all users

export const getAllUsersPending = () => ({
    type: ALL_USERS_GET_PENDING
})
export const getAllUsersSuccess = (data) => ({
    type: ALL_USERS_GET_SUCCESS,
    payload: data
})
export const getAllUsersError = (error) => ({
    type: ALL_USERS_GET_ERROR,
    payload: error
})
// Get comments fetch
export const getAllUsersFetch = () => {
return (dispatch) => {
    dispatch(getAllUsersPending())
    fetch(`${BASE_URL_USERS}`, getOptions('GET'))
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getAllUsersSuccess(data))
    })
    .catch(error => dispatch(getAllUsersError(error)))
}
}