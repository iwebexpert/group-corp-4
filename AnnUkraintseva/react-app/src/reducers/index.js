import {combineReducers} from  'redux'
import {pageReducer} from './page'
import { activeReducer } from './active'
import { commentReducer } from './comments'


export const rootReducer=combineReducers({
    page: pageReducer,
    active: activeReducer,
    comment: commentReducer,
})