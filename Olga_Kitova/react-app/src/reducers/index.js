import {combineReducers} from 'redux'
import { pagesReducer } from './reducersPages'
import { statsReducer } from './reducersStats'

export const rootReducer = combineReducers({
    pages: pagesReducer,
    stats: statsReducer,
})