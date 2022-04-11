import {combineReducers} from 'redux'
import { pagesReducer } from './reducersPages'
import { statsReducer } from './reducersStats'
import { commentsReducer } from './reducersComments'
import { usersReducer } from './reducersUsers'

export const rootReducer = combineReducers({
    pages: pagesReducer,
    stats: statsReducer,
    comments: commentsReducer,
    users: usersReducer,
})