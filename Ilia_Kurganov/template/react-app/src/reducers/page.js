import {
  PAGE_PENDING,
  PAGE_ERROR,
  PAGE_SUCCESS,
  PAGE_DELETE,
  PAGE_ADD,
  ADD_ROLE,
} from '../actions/actions'

const initialState = {
  isLoading: false,
  data: [],
  role: null,
}

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case PAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case PAGE_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    case PAGE_DELETE:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) => item.id !== action.payload),
      }
    case ADD_ROLE:
      return {
        ...state,
        role: action.payload,
      }

    default:
      return state
  }
}
