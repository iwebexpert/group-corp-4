import {STATS_GET_PENDING, STATS_GET_SUCCESS, STATS_GET_ERROR} from 'constants/constantsStats'

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const statsReducer = (state = initialState, action) => {
    switch(action.type) {
        case STATS_GET_PENDING: 
            return {...state, loading: true}
        case STATS_GET_SUCCESS: 
            return {...state, loading: false, users: action.payload}
        case STATS_GET_ERROR: 
        return {...state, loading: false, error: action.payload};
        default:
        return state
    }

}

