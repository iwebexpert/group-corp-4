import { combineReducers } from 'redux'
import { pageReducer } from './pageReducer'
import { commentReducer } from './commentReducer'
import { statsReducer } from './statsReducer'

export const rootReducer = combineReducers({
  page: pageReducer,
  comment: commentReducer,
  stats: statsReducer,
})
