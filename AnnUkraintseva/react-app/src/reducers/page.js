import {
  PAGE_PENDING,
  PAGE_SUCCESS,
  PAGE_ERROR,
  PAGE_DELETE_ERROR,
  PAGE_DELETE_SUCCESS,
  PAGE_ADD_ERROR,
  PAGE_ADD_SUCCESS,
  PAGE_FORM_EDIT_START,
  PAGE_FORM_EDIT_SAVE,
  PAGE_FORM_EDIT_RESET,
  ONE_PAGE_PENDING,
  ONE_PAGE_SUCCESS,
  ONE_PAGE_ERROR,

} from '../actions/page'

const initialState = {
  loading: false,
  data: [],
  oneData:[],
  error: null,
  currentID: null,
  url: null,
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
        currentID: action.payload,
      }
    case PAGE_FORM_EDIT_SAVE:
      return {
        ...state,
        currentID: null,
        data: state.data.map((item) => (item.id === state.currentID ? action.payload : item)),
      }
    case PAGE_FORM_EDIT_RESET:
      return {
        ...state,
        currentID: null,
      }
      case ONE_PAGE_PENDING:
        return {
          ...state,
          loading: true,
        }
      case ONE_PAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          oneData: action.payload,
        }
      case ONE_PAGE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }

    default:
      return state
  }
}
