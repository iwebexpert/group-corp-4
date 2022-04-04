import {
  PAGE_PENDING,
  PAGE_SUCCESS,
  PAGE_ERROR,
  PAGE_DELETE,
  PAGE_ADD,
  PAGE_FORM_EDIT_START,
  PAGE_FORM_EDIT_SAVE,
  PAGE_FORM_EDIT_RESET,
} from "../actions/createpeges";

const initialState = {
  loading: false,
  data: [],
  error: null,
  currentId: null,
};

export const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PAGE_DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case PAGE_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case PAGE_FORM_EDIT_START:
      return {
        ...state,
        currentId: action.payload,
      };

    case PAGE_FORM_EDIT_SAVE:
      return {
        ...state,
        currentId: null,
        data: state.data.map((item) =>
          item.id === state.currentId ? action.payload : item
        ),
      };

    case PAGE_FORM_EDIT_RESET:
      return {
        ...state,
        currentId: null,
      };

    default:
      return state;
  }
};
