import { ActiveActionTypes, ActiveActions } from '../actions/activeUser'
import { Reducer } from 'redux'

export type ActiveReduserState = {
  loading: boolean
  data: ActiveType[]
  error: Error | null
}

const initialState: ActiveReduserState = {
  loading: false,
  data: [],
  error: null,
}

export const activeReducer:Reducer<ActiveReduserState,ActiveActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActiveActionTypes.ACTIVE_PENDING:
      return {
        ...state,
        loading: true,
      }
    case ActiveActionTypes.ACTIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case ActiveActionTypes.ACTIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
