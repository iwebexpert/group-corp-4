import { useEffect ,useState} from "react";

export const loggerMiddleware = (store) => (next) => (action) => {
  // const [data, setData]=useState([])
  // console.log("@@@ loggerMiddleware начало логгирования");
  // console.log("Текущий action", action);
  // console.log("Текущий state", store.getState());


  //Если не admin
//   if(store.getState().pages.currentId === 'admin'  ){
//       return
//   }

// useEffect(() => {
//   if(roles[0] !== 'users'){
//     return
// }
// let data = action
//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({data})
//   };
//   fetch('/api/log', requestOptions)
//       .then(response => response.json())
//       .then(data => setData(data));
//   },[])
 
  const res = next(action);

  // console.log("Текущий action", res);
  // console.log("Текущий state", store.getState());
  // console.log("@@@ loggerMiddleware завершение логгирования");

  return res;
};
