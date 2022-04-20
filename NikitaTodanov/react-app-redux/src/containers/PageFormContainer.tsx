import React from "react";
import { useSelector, useDispatch } from "react-redux";


import CreateForm from "components/CreateForm";
import { AppState } from "reducers/index";
import {
  PagePayload, pageAdd,
  pageFormEditReset,
  pageFormEditSave,
} from '../actions/createpeges'

export default function PageFormContainer() {
  const dispatch = useDispatch();
  const pages = useSelector((state: AppState) => state.pages.data);
  const currentEditId = useSelector((state: AppState) => state.pages.currentId);

  const addPages = (data: PagePayload) => {
    dispatch(pageAdd(data));
  };

  const getInitialData = () => {
    if (currentEditId === null) {
      return null;
    }

    let data = pages.filter((item: PagePayload) => item.id === currentEditId);
    return data.length === 1 ? data[0] : null;
  };

  const editPageSave = (data: PagePayload) => {
    dispatch(pageFormEditSave(data));
  };

  const editPageReset = () => {
    dispatch(pageFormEditReset());
  };

  return (
    <CreateForm
      dataInitial={getInitialData()}
      onSave={editPageSave}
      onReset={editPageReset}
      onAdd={addPages}
    />
  );
}
