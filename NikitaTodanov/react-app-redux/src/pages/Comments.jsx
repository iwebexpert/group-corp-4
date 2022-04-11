import React, { useEffect, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";

function Comments({ privileges }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (privileges.isRoot) {
      return;
    }
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
      {privileges.isRoot ? (
        <div>У вас нет достпа для просмотра данной страницы</div>
      ) : (
        <div>
          {result.map((res, index) => (
            <div key={index + res.pageId}>
              <div>Комментарий пользователя: {res.userId}</div>
              <div>Страница:{res.pageId}</div>
              <div styles={{ color: "red" }}>Комментарий:{res.content}</div>
              <div>
                <br />
              </div>
            </div>
          ))}
        </div>
      )}
    </ContainerWrapper>
  );
}

export default Comments;
