import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import './style.scss'
import { App } from './components/App'
import { ThemeContext } from './context/ThemeContext'
// const Config = require('Config');

ReactDOM.render(
  <>
    <ThemeContext>
      <App />
    </ThemeContext>
    {/* <div>REACT_APP_BASE_URL : {process.env.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_THEME : {Config.REACT_APP_THEME}</div> */}
  </>,
  document.querySelector('#root'),
)
