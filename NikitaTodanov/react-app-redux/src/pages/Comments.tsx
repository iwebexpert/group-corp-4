import React, { useEffect, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";

type ResultPropps = {
  pageId: string
  userId: string
  content: string

}

function Comments() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch("/api/comments", options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error;
        }

        setResult(result);
      });
  }, []);

  return (
    <ContainerWrapper>

      <div>
        {result.map((res: ResultPropps, index: number) => (
          <div key={index + res.pageId}>
            <div>Комментарий пользователя: {res.userId}</div>
            <div>Страница:{res.pageId}</div>
            <div >Комментарий:{res.content}</div>
            <div>
              <br />
            </div>
          </div>
        ))}
      </div>

    </ContainerWrapper>
  );
}

export default Comments;
