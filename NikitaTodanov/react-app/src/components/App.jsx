import React, { useState, useEffect, Suspense } from "react";
import ManagingPageForm from "./ManagingPageForm";
const ManagingPageTable = React.lazy(() => import("./ManagingPageTable"));

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
  if (process.env.npm_lifecycle_event === "production") {
    useEffect(() => {
      fetch("http://localhost:3000/pages")
        .then((response) => response.json())
        .then((data) => {
          setCreateTable(data);
        });
    }, []);
  } else {
    useEffect(() => {
      const timer = setTimeout(() => {
        fetch("http://localhost:3000/pages")
          .then((response) => response.json())
          .then((data) => {
            setCreateTable(data);
          });
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
  }

  return (
    <>
      From APP!
      <ManagingPageForm onAddCreateTable={AddTable} />
      <Suspense fallback={<h1>Страница загружается.....</h1>}>
        <ManagingPageTable
          createTable={createTable}
          onDeleteTable={DeleteTable}
        />
      </Suspense>
    </>
  );
}
