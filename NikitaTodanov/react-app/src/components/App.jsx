
import React, { useState,useContext, useEffect, Suspense, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { initialState,reducer } from "../hooks/useReducer";
import ManagingPageForm from "./ManagingPageForm";
import Navbar from './NavBar/NavBar'

const ManagingPageTable = React.lazy(() => import("./ManagingPageTable"));


export default function App() {

  const [createTable, setCreateTable] = useState([]);
  const [isLoading, setIsLoading] =useState(false)
  const [value,]=useLocalStorage('theme')
  console.log(value)



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
          setIsLoading(true)
         

        });
    }, []);
  } else {
    useEffect(() => {
      const timer = setTimeout(() => {
        fetch("http://localhost:3000/pages")
          .then((response) => response.json())
          .then((data) => {
            setCreateTable(data);
            setIsLoading(true)
            
           

          });
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
  }

  return (
    
        
        <div className="wrapper">
     
           <Navbar/> 
          <ManagingPageForm onAddCreateTable={AddTable} />
          <Suspense fallback={<h1>Страница загружается.....</h1>}>
          {isLoading &&(<ManagingPageTable
              createTable={createTable}
              onDeleteTable={DeleteTable}
            />)} 
          </Suspense>
          </div>
      

 
  );
}
