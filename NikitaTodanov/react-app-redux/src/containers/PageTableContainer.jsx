import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  pageFetch,
  pageDelete,
  pageFormEditStart,
} from "../actions/createpeges";

import CreatePageTable from "../components/PageTable";

export default function PageTableContainer({ privileges }) {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(pageFetch());
    }, 1500);
  }, []);

  //pages
  const deletePage = (id) => {
    if (privileges.isRoot) {
      return;
    }
    dispatch(pageDelete(id));
  };

  const editPageMode = (id) => {
    if (privileges.isRoot) {
      return;
    }

    dispatch(pageFormEditStart(id));
  };

  //comments

  return (
    <CreatePageTable
      privileges={privileges}
      pages={pages}
      onEditPageMode={editPageMode}
      onDeletePage={deletePage}
    />
  );
}
