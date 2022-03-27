import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import './style.scss'
import { ThemeContext } from './context/ThemeContext'
import { App } from './components/App'
// const Config = require('Config');

ReactDOM.render(
  <>
    <ThemeContext>
      <App />
    </ThemeContext>
  </>,
  document.querySelector('#root'),
)
