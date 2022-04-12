import { combineReducers } from 'redux'
import { commentsReducer } from './comments'
import { pageReducer } from './page'
import { statsReducer } from './stats'
import { userReducer } from './users'

export const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  stats: statsReducer,
  comments: commentsReducer,
})
