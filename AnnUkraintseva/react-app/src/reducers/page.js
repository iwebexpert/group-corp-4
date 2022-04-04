import { PAGE_PENDING, PAGE_SUCCESS, PAGE_ERROR, PAGE_DELETE_ERROR,PAGE_DELETE_SUCCESS, PAGE_ADD_ERROR,PAGE_ADD_SUCCESS,PAGE_FORM_EDIT_START, PAGE_FORM_EDIT_SAVE, PAGE_FORM_EDIT_RESET } from '../actions/page'

const initialState = {
  loading: false,
  data: [],
  error: null,
  currentID: null,
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
    case PAGE_DELETE_SUCCESS:
      return {
        ...state,
        // data: state.data.filter((item) => item.id !== action.payload),
      }
      case PAGE_DELETE_ERROR:
        return {
          ...state,
          data: action.payload,
        } 

    case PAGE_ADD_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
      case PAGE_ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      }
      case PAGE_FORM_EDIT_START:
      return {
        ...state,
        currentID: action.payload
      }
      case PAGE_FORM_EDIT_SAVE:
      return {
        ...state,
        currentID: null,
        data: state.data.map((item)=>item.id === state.currentID ? action.payload:item)
      }
      case PAGE_FORM_EDIT_RESET:
      return {
        ...state,
        currentID: null
      }

    default:
      return state
  }
}
