import React, { useState } from "react";
import ManagingPageForm from "./ManagingPageForm";
import ManagingPageTable from "./ManagingPageTable";

export default function App() {
  const [createTable, setCreateTable] = useState([]);

  const AddTable = (data) => {
    setCreateTable(createTable.concat([data]));
    console.log(createTable);
  };
  const DeleteTable = (id) => {
    const filtered = createTable.filter((item) => item.id !== id);
    setCreateTable(filtered);
  };

  return (
    <>
      From APP!
      <ManagingPageForm onAddCreateTable={AddTable} />
      <ManagingPageTable
        createTable={createTable}
        onDeleteTable={DeleteTable}
      />
    </>
  );
}
