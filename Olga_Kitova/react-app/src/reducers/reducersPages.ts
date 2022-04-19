import { PagesActionTypes } from 'constants/constantsPages'
import { Reducer } from 'redux'
import { PagesAction, PagesPayload } from 'actions/actionsPages'

export type PagesReducerState = {
  data: PagesPayload[]
  loading: boolean
  error: Error | null
  currentId: string | null
  currentPage: PagesPayload | null
  headerPages: PagesPayload[]
}

const initialState: PagesReducerState = {
  data: [],
  loading: false,
  error: null,
  currentId: null,
  currentPage: null,
  headerPages: [],
}

export const pagesReducer: Reducer<PagesReducerState, PagesAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PagesActionTypes.PAGES_GET_PENDING:
      return { ...state, loading: true }
    case PagesActionTypes.PAGES_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        headerPages: [
          ...action.payload.map((obj: PagesPayload) => ({ title: obj.title, url: obj.url })),
        ],
      }
    case PagesActionTypes.PAGES_GET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case PagesActionTypes.PAGE_GET_PENDING:
      return { ...state, loading: true, currentPage: null }
    case PagesActionTypes.PAGE_GET_SUCCESS:
      let receivedPage = action.payload.reduce((acc: any, current: any) => {
        return current
      }, {})
      return { ...state, loading: false, currentPage: receivedPage }
    case PagesActionTypes.PAGE_GET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case PagesActionTypes.PAGES_ADD_SUCCESS:
      return { ...state, data: [...state.data, action.payload] }
    case PagesActionTypes.PAGES_ADD_ERROR:
      return { ...state, error: action.payload }
    case PagesActionTypes.PAGES_DELETE_SUCCESS:
      return state
    case PagesActionTypes.PAGES_DELETE_ERROR:
      return { ...state, error: action.payload }
    case PagesActionTypes.PAGES_EDIT_ID_SUCCESS:
      return { ...state, currentId: action.payload }
    case PagesActionTypes.PAGES_EDIT_ID_RESET:
      return { ...state, currentId: null }
    case PagesActionTypes.PAGES_EDIT_SUCCESS:
      return { ...state, currentId: null }
    case PagesActionTypes.PAGES_EDIT_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
