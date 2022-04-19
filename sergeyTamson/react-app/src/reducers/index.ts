import { combineReducers } from 'redux'
import { commentsReducer, CommentsReducerState } from './comments'
import { pageReducer, PageReducerState } from './page'
import { statsReducer, StatsReducerState } from './stats'
import { userReducer, UserReducerState } from './users'

export type AppState = {
  user: UserReducerState
  page: PageReducerState
  stats: StatsReducerState
  comments: CommentsReducerState
}

export const rootReducer = combineReducers<AppState>({
  user: userReducer,
  page: pageReducer,
  stats: statsReducer,
  comments: commentsReducer,
})
