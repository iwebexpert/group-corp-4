
import { UsersPayload, UsersActionType, UsersActions } from '../actions/actionsUsers'
import { Reducer } from 'redux'

export type UsersReducerState = {
  isLoading: boolean,
  data: Array<UsersPayload>,
  error: Error | null
}

const initialState: UsersReducerState = {
  isLoading: false,
  data: [],
  error: null
}

export const usersReducer: Reducer<UsersReducerState, UsersActions> = (state = initialState, action) => {
  switch (action.type) {
    case UsersActionType.USERS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case UsersActionType.USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case UsersActionType.USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      return state
  }
}