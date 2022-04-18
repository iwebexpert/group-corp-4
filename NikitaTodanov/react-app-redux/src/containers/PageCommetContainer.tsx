import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  commentAdd,
  commentFormEditReset,
  commentFormEditSave,
} from "actions/createcomments";
import { CreateComment } from "components/CreateComment/CreateComment";
import { AppState } from "reducers/index";
import { CommentPayload } from "../actions/createcomments"


export default function PageCommentContainer() {
  const dispatch = useDispatch();
  const comments = useSelector((state: AppState) => state.comments.data);
  const currentEditId = useSelector((state: AppState) => state.comments.pageId);

  const addComments = (data: CommentPayload) => {
    dispatch(commentAdd(data));
  };

  const getInitialData = () => {
    if (currentEditId === null) {
      return null;
    }

    let data = comments.filter((item: CommentPayload) => item.id === currentEditId);
    return data.length === 1 ? data[0] : null;
  };

  const editCommentSave = (data: CommentPayload) => {
    dispatch(commentFormEditSave(data));
  };

  const editCommentReset = () => {
    dispatch(commentFormEditReset());
  };

  return (
    <CreateComment

      dataInitial={getInitialData()}
      onSave={editCommentSave}
      onAdd={addComments}
    />
  );
}
