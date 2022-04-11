import { ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import PageCommetContainer from "../containers/PageCommetContainer";
import PageTableCommentContainer from "../containers/PageTableCommentContainer";

function Pages({ privileges }) {
  let location = useLocation();

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
        {result.map((res, index) => (
          <div key={index + res.userId}>
            <ListItemButton component={Link} to={`/${res.url}`}>
             Посмотреть страницу: {res.title}
            </ListItemButton>
            <div>{res.comment}</div>
            <PageCommetContainer privileges={privileges} />
          </div>
        ))}
        <PageTableCommentContainer privileges={privileges} />
      </div>
    </>
  );
}

export default Pages;
