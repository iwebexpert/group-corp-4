import React from 'react';
import ReactDOM from 'react-dom'
import App from 'components/App';
import { ThemeContextProvider } from './contexts/ThemeContext';

import './index.css'

// import './index.scss'
// const Config =require('Config')
ReactDOM.render(
<ThemeContextProvider >
  <App/>
  {/* <div>{process.env.REACT_APP_BASE_URL}</div>
  <div>{Config.REACT_APP_BASE_URL}</div> */}
</ThemeContextProvider>,
 document.querySelector('#root'))