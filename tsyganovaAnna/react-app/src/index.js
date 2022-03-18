import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

import './index.css'
import './index.sass'

const Config = require('Config')

ReactDOM.render(
  <Fragment>
    <App />
    <hr />
    <div>Test</div>
    <div>REACT_APP_BASE_URL: {process.env.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_CONFIG_THEME: {process.env.REACT_APP_CONFIG_THEME}</div>
    <hr />
    <div>REACT_APP_BASE_URL: {Config.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_CONFIG_THEME: {Config.REACT_APP_CONFIG_THEME}</div>
  </Fragment>,
  document.querySelector('#root'),
)
