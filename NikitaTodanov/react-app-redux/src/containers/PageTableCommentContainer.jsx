import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  commentFetch,
} from "../actions/createcomments";

import { CreateCommentTable } from "../components/CommentTable/CreateCommentTable ";

export default function PageTableCommentContainer({ privileges }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(commentFetch());
    }, 1500);
  }, []);

  return (
    <CreateCommentTable
      privileges={privileges}
      comments={comments}
    />
  );
}
