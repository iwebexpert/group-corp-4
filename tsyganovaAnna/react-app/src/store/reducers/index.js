import { combineReducers } from 'redux'
import { pageReducer } from './pageReducer'
import { statsReducer } from './statsReducer'

export const rootReducer = combineReducers({
  page: pageReducer,
  stats: statsReducer,
})
