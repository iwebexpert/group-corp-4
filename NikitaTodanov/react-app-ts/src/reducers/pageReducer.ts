import { Reducer } from "redux";
import { PageActions, CreatePageActionType,PagePayload } from 'actions/createpeges'

export type PageReducerState ={
  loading: boolean,
  data: any,
  error: Error | null,
  currentId: string | null,
}

const initialState:PageReducerState = {
  loading: false,
  data: [],
  error: null,
  currentId: null,
};

export const pagesReducer: Reducer<PageReducerState,PageActions > = (state = initialState, action) => {
  switch (action.type) {
    case CreatePageActionType.PAGE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case  CreatePageActionType.PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case CreatePageActionType.PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CreatePageActionType.PAGE_DELETE:
      return {
        ...state,
        data: state.data.filter((item :PagePayload) => item.id !== action.payload),
      };

    case CreatePageActionType.PAGE_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case CreatePageActionType.PAGE_FORM_EDIT_START:
      return {
        ...state,
        currentId: action.payload,
      };

    case CreatePageActionType.PAGE_FORM_EDIT_SAVE:
      return {
        ...state,
        currentId: null,
        data: state.data.map((item:PagePayload) =>
          item.id === state.currentId ? action.payload : item
        ),
      };

    case CreatePageActionType.PAGE_FORM_EDIT_RESET:
      return {
        ...state,
        currentId: null,
      };

    default:
      return state;
  }
};
