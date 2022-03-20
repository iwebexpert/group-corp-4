import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeContextProvider } from './contexts/ThemeContexts'

import './index.css'

import App from 'components/App'

ReactDOM.render(
  <>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>

    {/* <div>Test</div>
    <div>REACT_APP_BASE_URL:{process.env.REACT_APP_BASE_URL}</div>
    <div></div>
    <div>REACT_APP_THEME:{process.env.REACT_APP_THEME}</div> */}
  </>,
  document.querySelector('#root'),
)
