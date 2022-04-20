import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  commentFetch,
} from "actions/createcomments";

import { CreateCommentTable } from "components/CommentTable/CreateCommentTable ";
import { AppState } from "reducers/index";

export default function PageTableCommentContainer() {
  const dispatch = useDispatch();
  const comments = useSelector((state: AppState) => state.comments.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(commentFetch());
    }, 1500);
  }, []);

  return (
    <CreateCommentTable
      comments={comments}
    />
  );
}
