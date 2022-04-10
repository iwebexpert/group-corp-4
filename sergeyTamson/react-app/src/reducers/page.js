import { PAGE_PENDING, PAGE_SUCCESS, PAGE_ERROR, PAGE_DELETE } from '../actions/page'

const initialState = {
  loading: false,
  data: [],
  error: null,
  //   currentId: null,
}

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_PENDING:
      return {
        ...state,
        loading: true,
      }
    case PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PAGE_DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}
