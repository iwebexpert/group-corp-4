import { combineReducers } from 'redux'
import { commentsReducer } from './comments'
import { pageReducer } from './page'
import { logsReducer } from './logs'
import { usersReducer } from './users'

const rootReducer = combineReducers({
  page: pageReducer,
  logs: logsReducer,
  comments: commentsReducer,
  users: usersReducer
})

export default rootReducer
