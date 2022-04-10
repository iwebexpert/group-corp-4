import {
  USER_PENDING,
  USER_SUCCESS,
  USER_ERROR,
  USER_LOGOUT,
  ALL_USER_SUCCESS,
} from '../actions/user'

const initialState = {
  loading: false,
  data: null,
  error: null,
  allUsers: [],
  //   currentId: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PENDING:
      return {
        ...state,
        loading: true,
      }
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload,
      }

    case USER_LOGOUT:
      return {}

    default:
      return state
  }
}
