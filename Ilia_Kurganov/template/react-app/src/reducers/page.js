import {
  PAGES_PENDING,
  PAGES_ERROR,
  PAGES_SUCCESS,
  PAGE_DELETE,
  PAGE_ADD,
  ONE_PAGE_SUCCESS
} from '../actions/actionsPages'

const initialState = {
  isLoading: false,
  data: [],
  role: null,
}

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGES_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case PAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
      case PAGES_ERROR:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        }
    case ONE_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [action.payload],
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

    default:
      return state
  }
}
