import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ComponetnPage() {

  let params = useParams();

  console.log(params);
  const [result, setResult] = useState([]);


  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //   };
  //   fetch(`/api/pages`, options)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       if (result.error) {
  //         throw result.error;
  //       }

  //       setResult(result);
  //     });
  // }, []);

  return (
    <div>
      {/* <div>
        <h1>{params.slug}</h1>
      </div> */}
    </div>
  );
}

export default ComponetnPage;
