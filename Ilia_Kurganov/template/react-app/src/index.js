import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import './style.scss'
import {App} from 'components/App'

const Config = require('Config');

ReactDOM.render(
  <>
    <App/>
    <div>REACT_APP_BASE_URL : {process.env.REACT_APP_BASE_URL}</div>
    <div>DB_PASS : {process.env.DB_PASS}</div>
    <div>REACT_APP_BASE_URL : {Config.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_THEME : {Config.REACT_APP_THEME}</div>
  </>,
  document.querySelector('#root'),
)
