import { Reducer } from "redux";
import {
  CommentPayload,
  CommentActionType,
  ActionComments
  } from "../actions/createcomments";

  export type CommentReducerState = {
    loading:boolean,
    data: any,
    error:  Error | null,
    pageId: string | null
  }
  const initialState = {
    loading: false,
    data: [],
    error: null,
    pageId: null,
  };

  export const commentReducer:Reducer<CommentReducerState, ActionComments>= (state = initialState, action) => {
    switch (action.type) {
      case CommentActionType.COMMENT_PENDING:
        return {
          ...state,
          loading: true,
        };
      case CommentActionType.COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
  
      case CommentActionType.COMMENT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CommentActionType.COMMENT_DELETE:
        return {
          ...state,
          data: state.data.filter((item:CommentPayload) => item.id !== action.payload),
        };
  
      case CommentActionType.COMMENT_ADD:
        return {
          ...state,
          data: state.data.concat(action.payload),
        };
  
      case CommentActionType.COMMENT_FORM_EDIT_START:
        return {
          ...state,
          pageId: action.payload,
        };
  
      case CommentActionType.COMMENT_FORM_EDIT_SAVE:
        return {
          ...state,
          pageId: null,
          data: state.data.map((item:CommentPayload) =>
            item.id === state.pageId ? action.payload : item
          ),
        };
  
      case CommentActionType.COMMENT_FORM_EDIT_RESET:
        return {
          ...state,
          pageId: null,
        };
  
      default:
        return state;
    }
  };