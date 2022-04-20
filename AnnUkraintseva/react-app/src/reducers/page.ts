import { Reducer } from 'redux'
import { PageActionTypes, PageActions, PagePayload } from '../actions/page'



export type PageReduserState = {
  loading: boolean
  data: PagePayload[]
  oneData: PagePayload[] | []
  error: Error | null
  currentID: string | null
  url: string | null
}

const initialState: PageReduserState = {
  loading: false,
  data: [],
  oneData: [],
  error: null,
  currentID: null,
  url: null,
}

export const pageReducer: Reducer<PageReduserState, PageActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
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
        loading: false,
      }
    case PageActionTypes.PAGE_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case PageActionTypes.PAGE_ADD_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    case PageActionTypes.PAGE_ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case PageActionTypes.PAGE_FORM_EDIT_START:
      return {
        ...state,
        currentID: action.payload,
      }
    case PageActionTypes.PAGE_FORM_EDIT_SAVE:
      return {
        ...state,
        currentID: null,
        data: state.data.map((item: PagePayload) =>
          item.id === state.currentID ? {...item,...action.payload}: item,
        ),
      }
    case PageActionTypes.PAGE_FORM_EDIT_RESET:
      return {
        ...state,
        currentID: null,
      }
    case PageActionTypes.ONE_PAGE_PENDING:
      return {
        ...state,
        loading: true,
      }
    case PageActionTypes.ONE_PAGE_SUCCESS:
      console.log('!action.payload', action.payload)
      return {
        ...state,
        loading: false,
        oneData: action.payload,
      }
    case PageActionTypes.ONE_PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}