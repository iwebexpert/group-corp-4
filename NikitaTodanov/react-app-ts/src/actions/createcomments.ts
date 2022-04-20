import { ActionCreator, Dispatch } from "redux";
import { authService } from "services/auth/authService";

// export const  COMMENT_PENDING = " COMMENT_PENDING";
// export const  COMMENT_SUCCESS = " COMMENT_SUCCESS";
// export const  COMMENT_ERROR = " COMMENT_ERROR";

// export const  COMMENT_DELETE = " COMMENT_DELETE";
// export const  COMMENT_ADD = " COMMENT_ADD";

// export const COMMENT_FORM_EDIT_START = " COMMENT_FORM_EDIT_START";
// export const  COMMENT_FORM_EDIT_SAVE = " COMMENT_FORM_EDIT_SAVE";
// export const  COMMENT_FORM_EDIT_RESET = " COMMENT_FORM_EDIT_RESET";

export enum CommentActionType {
  COMMENT_PENDING = " COMMENT_PENDING",
  COMMENT_SUCCESS = " COMMENT_SUCCESS",
  COMMENT_ERROR = " COMMENT_ERROR",
  COMMENT_DELETE = " COMMENT_DELETE",
  COMMENT_ADD = " COMMENT_ADD",
  COMMENT_FORM_EDIT_START = " COMMENT_FORM_EDIT_START",
  COMMENT_FORM_EDIT_SAVE = " COMMENT_FORM_EDIT_SAVE",
  COMMENT_FORM_EDIT_RESET = " COMMENT_FORM_EDIT_RESET",
}

//actionType
export type CommentPending = {
  type: CommentActionType.COMMENT_PENDING;
};
export type CommentSuccess = {
  type: CommentActionType.COMMENT_SUCCESS;
  payload: any;
};
export type CommentError = {
  type: CommentActionType.COMMENT_ERROR;
  payload: Error;
};
export type CommentAdd = {
  type: CommentActionType.COMMENT_ADD;
  payload: string;
};
export type CommentDelete = {
  type: CommentActionType.COMMENT_DELETE;
  payload: string;
};
export type CommentFormEditStart = {
  type: CommentActionType.COMMENT_FORM_EDIT_START;
  payload: string;
};
export type CommentFormEditSave = {
  type: CommentActionType.COMMENT_FORM_EDIT_SAVE;
  payload: string;
};
export type CommentFormEditReset = {
  type: CommentActionType.COMMENT_FORM_EDIT_RESET;
};
//
export type CommentPayload = {
  id: string | null;
  pageId: string | null;
  userId: string;
  content: string;
};

export type ActionComments =
  | CommentPending
  | CommentSuccess
  | CommentError
  | CommentAdd
  | CommentDelete
  | CommentFormEditStart
  | CommentFormEditSave
  | CommentFormEditReset;
//action
export const commentPending: ActionCreator<CommentPending> = () => ({
  type: CommentActionType.COMMENT_PENDING,
});

export const commentSuccess: ActionCreator<CommentSuccess> = (data) => ({
  type: CommentActionType.COMMENT_SUCCESS,
  payload: data,
});

export const commentError: ActionCreator<CommentError> = (error) => ({
  type: CommentActionType.COMMENT_ERROR,
  payload: error,
});

export const commentFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(commentPending());

    const options = {
      method: "GET",
      headers: {
        Authentication: `Bearer ${authService.token}`,
      },
    };

    fetch("/api/comments", options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        dispatch(commentSuccess(result));
        return result;
      })
      .catch((error) => {
        dispatch(commentError(error));
      });
  };
};

export const commentDelete: ActionCreator<CommentDelete> = (id) => ({
  type: CommentActionType.COMMENT_DELETE,
  payload: id,
});

export const commentAdd: ActionCreator<CommentAdd> = (data) => ({
  type: CommentActionType.COMMENT_ADD,
  payload: data,
});

// Редактирование формы
export const commentFormEditStart: ActionCreator<CommentFormEditStart> = (
  id
) => ({
  type: CommentActionType.COMMENT_FORM_EDIT_START,
  payload: id,
});

export const commentFormEditSave: ActionCreator<CommentFormEditSave> = (
  data
) => ({
  type: CommentActionType.COMMENT_FORM_EDIT_SAVE,
  payload: data,
});

export const commentFormEditReset: ActionCreator<
  CommentFormEditReset
> = () => ({
  type: CommentActionType.COMMENT_FORM_EDIT_RESET,
});
