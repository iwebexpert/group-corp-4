import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.jsx'
import { ThemeContextProvider } from './contexts/theme-context/theme-context'
import './styles/index.scss'
import './styles/normalize.css'

ReactDOM.render(
  <Fragment>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Fragment>,
  document.querySelector('#root'),
)
