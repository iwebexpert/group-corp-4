import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App/App.jsx'

import ThemeContext from './contexts/ThemeContext'
ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById('root'),
)
