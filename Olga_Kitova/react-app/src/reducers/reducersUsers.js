import {ALL_USERS_GET_PENDING, ALL_USERS_GET_SUCCESS, ALL_USERS_GET_ERROR} from 'constants/constantsUsers'

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_USERS_GET_PENDING:
                return {...state, loading: true};
        case ALL_USERS_GET_SUCCESS:
                return {...state, loading: false, data: action.payload};
        case ALL_USERS_GET_ERROR:
                return {...state, loading: false, error: action.payload};
        default:
            return state
    }
}