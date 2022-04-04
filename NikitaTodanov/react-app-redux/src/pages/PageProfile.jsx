import React from "react";
import ContainerWrapper from "./ContainerWrapper";

export default function PageProfile({ roles }) {
  return (
    <ContainerWrapper>
      <div>PageProfile</div>
      <div>{roles.toString()}</div>
    </ContainerWrapper>
  );
}
