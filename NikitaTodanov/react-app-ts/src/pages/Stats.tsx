import React, { useEffect, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";



type resultProps = {
  userId: string,
  type: string,
  content: string,
  action: string,

}


function Stats() {
  const [result, setResult] = useState([]);

  useEffect(() => {

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

      <div>
        {result.map((res: resultProps, key: number) => (
          <div key={res.userId + 1}>
            <div>Информация о действиях пользователя: {res.userId}</div>
            <div>{res.userId}</div>
            <div>{res.type}</div>
            <div>{res.content}</div>
            <div>{res.action}</div>
            <div>
              <br />
            </div>
          </div>
        ))}
      </div>

    </ContainerWrapper>
  );
}

export default Stats;
