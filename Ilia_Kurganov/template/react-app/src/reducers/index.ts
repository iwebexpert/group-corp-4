import { combineReducers } from 'redux'
import { commentsReducer, CommentsReducerState } from './comments'
import { pageReducer, PageReducerState } from './page'
import { logsReducer, LogsReducerState } from './logs'
import { usersReducer, UsersReducerState } from './users'

export type AppState = {
  page: PageReducerState,
  logs: LogsReducerState,
  comments: CommentsReducerState,
  users: UsersReducerState
}

const rootReducer = combineReducers<AppState>({
  page: pageReducer,
  logs: logsReducer,
  comments: commentsReducer,
  users: usersReducer
})

export default rootReducer
