import { authService } from "../services/auth/authService";

export const PAGE_PENDING = "PAGE_PENDING";
export const PAGE_SUCCESS = "PAGE_SUCCESS";
export const PAGE_ERROR = "PAGE_ERROR";

export const PAGE_DELETE = "PAGE_DELETE";
export const PAGE_ADD = "PAGE_ADD";

export const PAGE_FORM_EDIT_START = "PAGE_FORM_EDIT_START";
export const PAGE_FORM_EDIT_SAVE = "PAGE_FORM_EDIT_SAVE";
export const PAGE_FORM_EDIT_RESET = "PAGE_FORM_EDIT_RESET";

export const pagePending = () => ({
  type: PAGE_PENDING,
});

export const pageSuccess = (data) => ({
  type: PAGE_SUCCESS,
  payload: data,
});

export const pageError = (error) => ({
  type: PAGE_ERROR,
  payload: error,
});

export const pageFetch = () => {
  return (dispatch) => {
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
        console.log("result", result);
        dispatch(pageSuccess(result));
        return result;
      })
      .catch((error) => {
        dispatch(pageError(error));
      });
  };
};

export const pageDelete = (id) => ({
  type: PAGE_DELETE,
  payload: id,
});

export const pageAdd = (data) => ({
  type: PAGE_ADD,
  payload: data,
});

// Редактирование формы
export const pageFormEditStart = (id) => ({
  type: PAGE_FORM_EDIT_START,
  payload: id,
});

export const pageFormEditSave = (data) => ({
  type: PAGE_FORM_EDIT_SAVE,
  payload: data,
});

export const pageFormEditReset = () => ({
  type: PAGE_FORM_EDIT_RESET,
});
