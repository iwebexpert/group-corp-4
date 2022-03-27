import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.jsx'
import './styles/index.scss'
import './styles/normalize.css'

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.querySelector('#root'),
)
