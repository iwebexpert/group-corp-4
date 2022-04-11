import {
    COMMENT_PENDING,
    COMMENT_SUCCESS,
    COMMENT_ERROR,
    COMMENT_DELETE,
    COMMENT_ADD,
    COMMENT_FORM_EDIT_START,
    COMMENT_FORM_EDIT_SAVE,
    COMMENT_FORM_EDIT_RESET,
  } from "../actions/createcomments";


  const initialState = {
    loading: false,
    data: [],
    error: null,
    pageId: null,
  };

  export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case COMMENT_PENDING:
        return {
          ...state,
          loading: true,
        };
      case COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
  
      case COMMENT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case COMMENT_DELETE:
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload),
        };
  
      case COMMENT_ADD:
        return {
          ...state,
          data: state.data.concat(action.payload),
        };
  
      case COMMENT_FORM_EDIT_START:
        return {
          ...state,
          pageId: action.payload,
        };
  
      case COMMENT_FORM_EDIT_SAVE:
        return {
          ...state,
          pageId: null,
          data: state.data.map((item) =>
            item.id === state.currentId ? action.payload : item
          ),
        };
  
      case COMMENT_FORM_EDIT_RESET:
        return {
          ...state,
          pageId: null,
        };
  
      default:
        return state;
    }
  };