import { combineReducers } from 'redux'
import { pagesReducer, PagesReducerState } from './reducersPages'
import { statsReducer, StatsReducerState } from './reducersStats'
import { commentsReducer, CommentsReducerState } from './reducersComments'
import { usersReducer, UsersReducerState } from './reducersUsers'

export type AppState = {
  pages: PagesReducerState
  stats: StatsReducerState
  comments: CommentsReducerState
  users: UsersReducerState
}

export const rootReducer = combineReducers<AppState>({
  pages: pagesReducer,
  stats: statsReducer,
  comments: commentsReducer,
  users: usersReducer,
})
