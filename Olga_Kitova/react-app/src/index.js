import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { ContextProvider } from './context/Context'
import AuthProvider from './services/auth/AuthProvider'
import App from 'app/App.js'
import 'styles/reset.css'
import 'styles/index.css'

ReactDOM.render(
  <ContextProvider>
    <Router>
    <AuthProvider>
      <App />
      </AuthProvider>
    </Router>
  </ContextProvider>,
  document.querySelector("#root")
);