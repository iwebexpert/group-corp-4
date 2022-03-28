import React  from "react";
import ReactDOM from "react-dom";
import App from "components/App";


import "./index.css";
import { AppContextProvider } from "./contexts/ThemeContext";



// import './index.scss'
// const Config =require('Config')
ReactDOM.render(
<AppContextProvider>
           {/* <div>{process.env.REACT_APP_BASE_URL}</div>
  <div>{Config.REACT_APP_BASE_URL}</div> */}
  
  <App />
</AppContextProvider>

 
,
  document.querySelector("#root")
);
