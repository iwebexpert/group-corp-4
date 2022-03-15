import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

import './index.css'
import './index.scss'

// const Config = require('Config')
ReactDOM.render(
  <>
    <App />
    <hr />
    <div>TEST</div>
    <div>REACT_APP_BASE_URL: {process.env.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_CONFIG_THEME: {process.env.REACT_APP_CONFIG_THEME}</div>
    <hr />
    {/* <div>REACT_APP_BASE_URL: {Config.env.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_CONFIG_THEME: {Config.env.REACT_APP_CONFIG_THEME}</div> */}
  </>,
  document.querySelector('#root'),
)
