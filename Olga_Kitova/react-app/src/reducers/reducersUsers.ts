import { UsersActionTypes } from 'constants/constantsUsers'
import { Reducer } from 'redux'
import { UsersActions, UsersPayload } from 'actions/actionUsers'

export type UsersReducerState = {
  data: UsersPayload[]
  loading: boolean
  error: Error | null
}

const initialState: UsersReducerState = {
  data: [],
  loading: false,
  error: null,
}

export const usersReducer: Reducer<UsersReducerState, UsersActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case UsersActionTypes.ALL_USERS_GET_PENDING:
      return { ...state, loading: true }
    case UsersActionTypes.ALL_USERS_GET_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case UsersActionTypes.ALL_USERS_GET_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
