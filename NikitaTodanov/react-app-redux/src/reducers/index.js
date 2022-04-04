import {combineReducers} from 'redux'
import {pagesReducer} from './pageReducer'

export const rootReducer = combineReducers({
  pages: pagesReducer,
})