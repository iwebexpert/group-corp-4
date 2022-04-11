import { ACTIVE_PENDING, ACTIVE_SUCCESS, ACTIVE_ERROR } from "../actions/activeUser"

const initialState = {
    loading: false,
    data: [],
    error: null,
  }

  export const activeReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVE_PENDING:
        return {
          ...state,
          loading: true,
        }
      case ACTIVE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        }
      case ACTIVE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      
  
      default:
        return state
    }
  }
