import React, { useEffect, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";

function Stats({ privileges }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (privileges.isRoot) {
      return;
    }
    const options = {
      method: "GET",
    };
    fetch("/api/log", options)
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
          {result.map((res, key) => (
            <div key={res.userId + 1}>
              <div>Информация о действиях пользователя: {res.userId}</div>
              <div>{res.userId}</div>
              <div>{res.type}</div>
              <div styles={{ color: "red" }}>{res.content}</div>
              <div>{res.action}</div>
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

export default Stats;
