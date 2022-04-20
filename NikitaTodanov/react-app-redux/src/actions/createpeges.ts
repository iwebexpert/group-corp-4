// import { PAGE_FORM_EDIT_SAVE, PAGE_FORM_EDIT_RESET } from './createpeges';

import { ActionCreator, Dispatch } from "redux";
import { authService } from "services/auth/authService";

// export const PAGE_PENDING = "PAGE_PENDING";
// export const PAGE_SUCCESS = "PAGE_SUCCESS";
// export const PAGE_ERROR = "PAGE_ERROR";

// export const PAGE_DELETE = "PAGE_DELETE";
// export const PAGE_ADD = "PAGE_ADD";

// export const PAGE_FORM_EDIT_START = "PAGE_FORM_EDIT_START";
// export const PAGE_FORM_EDIT_SAVE = "PAGE_FORM_EDIT_SAVE";
// export const PAGE_FORM_EDIT_RESET = "PAGE_FORM_EDIT_RESET"export

export enum CreatePageActionType {
  PAGE_PENDING = "PAGE_PENDING",
  PAGE_SUCCESS = "PAGE_SUCCESS",
  PAGE_ERROR = "PAGE_ERROR",
  PAGE_DELETE = "PAGE_DELETE",
  PAGE_ADD = "PAGE_ADD",
  PAGE_FORM_EDIT_START = "PAGE_FORM_EDIT_START",
  PAGE_FORM_EDIT_SAVE = "PAGE_FORM_EDIT_SAVE",
  PAGE_FORM_EDIT_RESET = "PAGE_FORM_EDIT_RESET",
}

//Action types
export type PagePendingAction = {
  type: CreatePageActionType.PAGE_PENDING;
};
export type PageSuccessAction = {
  type: CreatePageActionType.PAGE_SUCCESS;
  payload: any;
};
export type PageErrorAction = {
  type: CreatePageActionType.PAGE_ERROR;
  payload: Error;
};
export type PageDeleteAction = {
  type: CreatePageActionType.PAGE_DELETE;
  payload: string;
};
export type PageAddAction = {
  type: CreatePageActionType.PAGE_ADD;
  payload: string;
};
export type PageFormEditStart = {
  type: CreatePageActionType.PAGE_FORM_EDIT_START;
  payload: string;
};
export type PageFormEditSave = {
  type: CreatePageActionType.PAGE_FORM_EDIT_SAVE;
  payload: string;
};
export type PageFormEditReset = {
  type: CreatePageActionType.PAGE_FORM_EDIT_RESET;
};

export type PageActions =
  | PagePendingAction
  | PageSuccessAction
  | PageErrorAction
  | PageDeleteAction
  | PageAddAction
  | PageFormEditStart
  | PageFormEditSave
  | PageFormEditReset;

export type PagePayload = {
  id: string;
  url: string;
  title: string;
  content: string;
  userId: string;
};

//Action

export const pagePending: ActionCreator<PagePendingAction> = () => ({
  type: CreatePageActionType.PAGE_PENDING,
});

export const pageSuccess: ActionCreator<PageSuccessAction> = (data) => ({
  type: CreatePageActionType.PAGE_SUCCESS,
  payload: data,
});

export const pageError: ActionCreator<PageErrorAction> = (error) => ({
  type: CreatePageActionType.PAGE_ERROR,
  payload: error,
});

export const pageFetch: ActionCreator<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(pagePending());

    const options = {
      method: "GET",
      headers: {
        Authentication: `Bearer ${authService.token}`,
      },
    };

    fetch("/api/pages", options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error;
        }

        dispatch(pageSuccess(result));
        return result;
      })
      .catch((error) => {
        dispatch(pageError(error));
      });
  };
};

export const pageDelete: ActionCreator<PageDeleteAction> = (id) => ({
  type: CreatePageActionType.PAGE_DELETE,
  payload: id,
});

export const pageAdd: ActionCreator<PageAddAction> = (data) => ({
  type: CreatePageActionType.PAGE_ADD,
  payload: data,
});

// Редактирование формы
export const pageFormEditStart: ActionCreator<PageFormEditStart> = (id) => ({
  type: CreatePageActionType.PAGE_FORM_EDIT_START,
  payload: id,
});

export const pageFormEditSave: ActionCreator<PageFormEditSave> = (data) => ({
  type: CreatePageActionType.PAGE_FORM_EDIT_SAVE,
  payload: data,
});

export const pageFormEditReset: ActionCreator<PageFormEditReset> = () => ({
  type: CreatePageActionType.PAGE_FORM_EDIT_RESET,
});
