import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ThemeContextProvider } from './contexts/theme-context/theme-context'
import App from './components/App'

ReactDOM.render(
  <Fragment>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Fragment>,
  document.querySelector('#root'),
)
