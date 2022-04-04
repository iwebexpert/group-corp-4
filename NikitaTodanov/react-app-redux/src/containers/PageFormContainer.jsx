import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  pageAdd,
  pageFormEditReset,
  pageFormEditSave,
} from "../actions/createpeges";
import CreateForm from "../components/CreateForm";

export default function PageFormContainer({ roles }) {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages.data);
  const currentEditId = useSelector((state) => state.pages.currentId);

  const addPages = (data) => {
    dispatch(pageAdd(data));
  };

  const getInitialData = () => {
    if (currentEditId === null) {
      return null;
    }

    let data = pages.filter((item) => item.id === currentEditId);
    return data.length === 1 ? data[0] : null;
  };

  const editPageSave = (data) => {
    dispatch(pageFormEditSave(data));
  };

  const editPageReset = () => {
    dispatch(pageFormEditReset());
  };

  return (
    <CreateForm
      roles={roles}
      dataInitial={getInitialData()}
      onSave={editPageSave}
      onReset={editPageReset}
      onAdd={addPages}
    />
  );
}
