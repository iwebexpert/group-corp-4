import {combineReducers} from  'redux'
import {pageReducer, PageReduserState} from './page'
import { activeReducer, ActiveReduserState } from './active'
import { commentReducer, CommentReduserState } from './comments'
import {allUserReducer, AllUserReduserState} from './allUser'

export type AppState={
    page: PageReduserState
    active: ActiveReduserState
    comment: CommentReduserState
    users: AllUserReduserState
}


export const rootReducer=combineReducers({
    page: pageReducer,
    active: activeReducer,
    comment: commentReducer,
    users: allUserReducer,
})