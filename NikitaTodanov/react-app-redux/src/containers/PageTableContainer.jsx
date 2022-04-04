import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  pageFetch,
  pageDelete,
  pageFormEditStart,
} from "../actions/createpeges";
import CreatePageTable from "../components/PageTable";

export default function PageTableContainer({ roles }) {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(pageFetch());
    }, 1500);
  }, []);

  const deletePage = (id) => {
    if (roles[0] === "user") {
      return;
    }
    console.log("Delete item", id);
    dispatch(pageDelete(id));
  };

  const editPageMode = (id) => {
    if (roles[0] === "user") {
      return;
    }
    console.log("Delete item", id);
    dispatch(pageFormEditStart(id));
  };

  return (
    <CreatePageTable
      roles={roles}
      pages={pages}
      onEditPageMode={editPageMode}
      onDeletePage={deletePage}
    />
  );
}
