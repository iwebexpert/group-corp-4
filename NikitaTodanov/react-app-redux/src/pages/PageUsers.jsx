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
    fetch("/api/users", options)
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
            <div key={index}>
              <div>Имя Пользователя :{res.name}</div>
              <div>Email:{res.email}</div>
              <div>Роль Пользователя:{res.role}</div>
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
