import { Reducer } from 'redux'
import { PageActionTypes, PageActions, PagePayload } from '../actions/page'

export type PageReducerState = {
  loading: boolean
  data: any
  allPages: any
  error: any
  currentId: number | null
}

const initialState: PageReducerState = {
  loading: false,
  data: [],
  allPages: [],
  error: null,
  currentId: null,
}

export const pageReducer: Reducer<PageReducerState, PageActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PageActionTypes.PAGE_ALL_PENDING:
      return {
        ...state,
        loading: true,
      }
    case PageActionTypes.PAGE_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        allPages: action.payload,
      }
    case PageActionTypes.PAGE_ALL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PageActionTypes.PAGE_PENDING:
      return {
        ...state,
        loading: true,
      }
    case PageActionTypes.PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case PageActionTypes.PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PageActionTypes.PAGE_DELETE_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item: PagePayload) => item.id !== action.payload),
      }
    case PageActionTypes.PAGE_DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case PageActionTypes.PAGE_EDIT_START:
      return {
        ...state,
        currentId: action.payload,
      }
    case PageActionTypes.PAGE_EDIT_SAVE:
      return {
        ...state,
        data: state.data.filter((item: PagePayload) =>
          item.id === action.payload.id ? action.payload : item,
        ),
      }
    case PageActionTypes.PAGE_EDIT_RESET:
      return {
        ...state,
        currentId: null,
      }
    case PageActionTypes.PAGE_EDIT_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
