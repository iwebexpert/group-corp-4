import React, { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.jsx'
import './styles/index.scss'
import './styles/normalize.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './components/services/auth/AuthProvider.jsx'

ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>,
  document.querySelector('#root'),
)
