import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter as Router} from 'react-router-dom'
import { ContextProvider } from './context/Context'
import AuthProvider from './services/auth/AuthProvider'
import App from 'app/App.js'
import 'styles/reset.css'
import 'styles/index.css'

ReactDOM.render(
<Provider store={store}>
<ContextProvider>
    <Router>
    <AuthProvider>
      <App />
      </AuthProvider>
    </Router>
  </ContextProvider>
</Provider>,
  document.querySelector("#root")
);