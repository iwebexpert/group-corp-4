import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

ReactDOM.render(
  <>
    <div>Test</div>
    <div>REACT_APP_BASE_URL:{process.env.REACT_APP_BASE_URL}</div>
    <div>REACT_APP_THEME:{process.env.REACT_APP_THEME}</div>
  </>,
  document.querySelector('#root'),
)
