import { USERS_PENDING, USERS_SUCCESS, USERS_ERROR} from '../actions/actionsUsers'

const initialState = {
  isLoading: false,
  data: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    default:
      return state
  }
}