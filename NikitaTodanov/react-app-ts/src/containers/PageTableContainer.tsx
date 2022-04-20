import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  pageFetch,
  pageDelete,
  pageFormEditStart,
} from "actions/createpeges";


import { AppState } from "reducers/index";
import CreatePageTable from "components/PageTable/index";


export default function PageTableContainer() {
  const dispatch = useDispatch();
  const pages = useSelector((state: AppState) => state.pages.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(pageFetch());
    }, 1500);
  }, []);

  //pages
  const deletePage = (id: string) => {

    dispatch(pageDelete(id));
  };

  const editPageMode = (id: string) => {
    dispatch(pageFormEditStart(id));
  };

  //comments

  return (
    <CreatePageTable
      pages={pages}
      onEditPageMode={editPageMode}
      onDeletePage={deletePage}
    />
  );
}
