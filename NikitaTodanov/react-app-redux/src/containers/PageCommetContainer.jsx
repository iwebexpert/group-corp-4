import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  commentAdd,
  commentFormEditReset,
  commentFormEditSave,
} from "../actions/createcomments";
import { CreateComment } from "../components/CreateComment/CreateComment";

export default function PageCommentContainer({ privileges }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);
  const currentEditId = useSelector((state) => state.comments.pageId);

  const addComments = (data) => {
    dispatch(commentAdd(data));
  };

  const getInitialData = () => {
    if (currentEditId === null) {
      return null;
    }

    let data = comments.filter((item) => item.id === currentEditId);
    return data.length === 1 ? data[0] : null;
  };

  const editCommentSave = (data) => {
    dispatch(commentFormEditSave(data));
  };

  const editCommentReset = () => {
    dispatch(commentFormEditReset());
  };

  return (
    <CreateComment
      privileges={privileges}
      dataInitial={getInitialData()}
      onSave={editCommentSave}
      onReset={editCommentReset}
      onAdd={addComments}
    />
  );
}
