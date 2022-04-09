import {COMMENTS_GET_PENDING, COMMENTS_GET_SUCCESS, COMMENTS_GET_ERROR,
        ALL_COMMENTS_GET_PENDING, ALL_COMMENTS_GET_SUCCESS, ALL_COMMENTS_GET_ERROR,
        COMMENTS_ADD_SUCCESS, COMMENTS_ADD_ERROR } from 'constants/constantsComments'

const initialState = {
    data: [],
    loading: false,
    error: null,
    currentsComments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMMENTS_GET_PENDING:
                return {...state, loading: true, currentsComments: []};
        case COMMENTS_GET_SUCCESS:
                return {...state, loading: false, currentsComments: [...action.payload]};
        case COMMENTS_GET_ERROR:
                return {...state, loading: false, error: action.payload};
        case ALL_COMMENTS_GET_PENDING:
                return {...state, loading: true};
        case ALL_COMMENTS_GET_SUCCESS:
                return {...state, loading: false, data: action.payload};
        case ALL_COMMENTS_GET_ERROR:
                return {...state, loading: false, error: action.payload};
        case COMMENTS_ADD_SUCCESS:
                return {...state, currentsComments: [...state.currentsComments, action.payload]};
        case COMMENTS_ADD_ERROR:
                return {...state, error: action.payload};
        default:
            return state
    }
}