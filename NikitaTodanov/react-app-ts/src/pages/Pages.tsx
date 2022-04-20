import { ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import PageCommetContainer from "containers/PageCommetContainer";
import PageTableCommentContainer from "containers/PageTableCommentContainer";


type typeResultProps = {
  userId: string
  url: string
  title: string
  comment:string
}
function Pages() {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch("/api/pages", options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        setResult(result);
      });
  }, []);

  return (
    <>
      <div>
        {result.map((res:typeResultProps, index:number) => (
          <div key={index + res.userId}>
            <ListItemButton component={Link} to={`/${res.url}`}>
             Посмотреть страницу: {res.title}
            </ListItemButton>
            <div>{res.comment}</div>
            <PageCommetContainer  />
          </div>
        ))}
        <PageTableCommentContainer  />
      </div>
    </>
  );
}

export default Pages;
