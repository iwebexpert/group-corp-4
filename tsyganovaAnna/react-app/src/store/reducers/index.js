import { combineReducers } from 'redux'
import { pageReducer } from './pageReducer'
import { commentReducer } from './commentReducer'
import { statsReducer } from './statsReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  page: pageReducer,
  comment: commentReducer,
  stats: statsReducer,
  user: userReducer,
})
