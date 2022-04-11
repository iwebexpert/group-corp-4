import {combineReducers} from 'redux'
import { commentReducer } from './commentReducer'
import {pagesReducer} from './pageReducer'

export const rootReducer = combineReducers({
  pages: pagesReducer,
  comments: commentReducer
})