import React, { useEffect, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";

type typeResultProps = {
  name: string
  email: string
  role: string
}

function Comments() {
  const [result, setResult] = useState([]);

  useEffect(() => {

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

      <div>
        {result.map((res: typeResultProps, index: number) => (
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

    </ContainerWrapper>
  );
}

export default Comments;
