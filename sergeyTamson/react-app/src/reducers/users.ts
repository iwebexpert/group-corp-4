import { Reducer } from 'redux'
import { UserActionTypes, UserActions, UserPayload } from '../actions/user'

export type UserReducerState = {
  loading: Boolean
  data: any
  error: Error | null
  allUsers: any
}

const initialState: UserReducerState = {
  loading: false,
  data: null,
  error: null,
  allUsers: [],
}

export const userReducer: Reducer<UserReducerState, UserActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case UserActionTypes.USER_PENDING:
      return {
        ...state,
        loading: true,
      }
    case UserActionTypes.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case UserActionTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case UserActionTypes.ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload,
      }

    case UserActionTypes.USER_LOGOUT:
      return state

    default:
      return state
  }
}
