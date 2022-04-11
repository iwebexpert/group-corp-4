import { authService } from "../services/auth/authService";

export const  COMMENT_PENDING = " COMMENT_PENDING";
export const  COMMENT_SUCCESS = " COMMENT_SUCCESS";
export const  COMMENT_ERROR = " COMMENT_ERROR";

export const  COMMENT_DELETE = " COMMENT_DELETE";
export const  COMMENT_ADD = " COMMENT_ADD";

export const COMMENT_FORM_EDIT_START = " COMMENT_FORM_EDIT_START";
export const  COMMENT_FORM_EDIT_SAVE = " COMMENT_FORM_EDIT_SAVE";
export const  COMMENT_FORM_EDIT_RESET = " COMMENT_FORM_EDIT_RESET";

export const commentPending = () => ({
  type: COMMENT_PENDING,
});

export const commentSuccess = (data) => ({
  type: COMMENT_SUCCESS,
  payload: data,
});

export const commentError = (error) => ({
  type: COMMENT_ERROR,
  payload: error,
});

export const commentFetch = () => {
  return (dispatch) => {
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
        dispatch (commentSuccess(result));
        return result;
      })
      .catch((error) => {
        dispatch (commentError(error));
      });
  };
};

export const commentDelete = (id) => ({
  type: COMMENT_DELETE,
  payload: id,
});

export const commentAdd = (data) => ({
  type: COMMENT_ADD,
  payload: data,
});

// Редактирование формы
export const commentFormEditStart = (id) => ({
  type: COMMENT_FORM_EDIT_START,
  payload: id,
});

export const commentFormEditSave = (data) => ({
  type: COMMENT_FORM_EDIT_SAVE,
  payload: data,
});

export const commentFormEditReset = () => ({
  type: COMMENT_FORM_EDIT_RESET,
});
