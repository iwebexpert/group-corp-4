import { Reducer } from "redux"
import { 
 AllUserActionTypes, AllUserActions
} from "../actions/allUser"

export type AllUserReduserState={
  loading: boolean,
    data: UserType[],
    error: Error |null,
}

const initialState = {
    loading: false,
    data: [],
    error: null,
  }

  export const allUserReducer: Reducer<AllUserReduserState, AllUserActions> = (state = initialState, action) => {
    switch (action.type) {
      case AllUserActionTypes.ALL_USER_PENDING:
        return {
          ...state,
          loading: true,
        }
      case AllUserActionTypes.ALL_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        }
      case AllUserActionTypes.ALL_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      
  
      default:
        return state
    }
  }
