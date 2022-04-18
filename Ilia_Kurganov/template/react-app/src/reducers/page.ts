import { PageActionType, PagePayload } from "../actions/actionsPages"
import { PagesActions } from "../actions/actionsPages"
import { Reducer } from "redux"

export type PageReducerState = {
  isLoading: boolean,
  data: Array<PagePayload>,
  homePage:PagePayload[] ,
  error: Error | null
}

const initialState: PageReducerState = {
  isLoading: false,
  data: [],
  homePage: [],
  error: null
}

export const pageReducer: Reducer<PageReducerState, PagesActions> = (state = initialState, action) => {
  switch (action.type) {
    case PageActionType.PAGES_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case PageActionType.PAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.map((item: PagePayload) => ({ ...item, isEdit: false })),
      }
    case PageActionType.PAGES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case PageActionType.ONE_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [action.payload],
      }
    case PageActionType.ONE_PAGE_SUCCESS_BY_URL:
      return {
        ...state,
        isLoading: false,
        homePage: action.payload,
      }
    case PageActionType.PAGE_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    case PageActionType.EDIT_PAGE:
      return {
        ...state,
        data: state.data.map((item: PagePayload) => {
          if (item.id === action.payload) {
            return { ...item, isEdit: !item.isEdit }
          }
          return item
        }),
      }
    case PageActionType.SAVE_PAGE:
      return {
        ...state,
        data: state.data.map((item: PagePayload) => {
          if (item.id === action.payload) {
            return { ...item, isEdit: false }
          }
          return item
        }),
      }
    case PageActionType.CHANGE_PAGE:
      return {
        ...state,
        data: state.data.map((item: PagePayload) => {
          if (item.id === action.payload.key) {
            const f = { ...item }
            //@ts-ignore
            f[action.payload.field as keyof PagePayload] = action.payload.value
            return f
          }
          return item
        }),
      }
    case PageActionType.PAGE_DELETE:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item: PagePayload) => item.id !== action.payload),
      }

    default:
      return state
  }
}
