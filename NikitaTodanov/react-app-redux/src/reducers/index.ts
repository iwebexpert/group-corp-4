import {combineReducers} from 'redux'
import { commentReducer,CommentReducerState } from './commentReducer'
import {PageReducerState, pagesReducer} from './pageReducer'

export type AppState = {
  pages: PageReducerState,
  comments:CommentReducerState

}

export const rootReducer = combineReducers({
  pages: pagesReducer,
  comments: commentReducer
})