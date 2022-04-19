import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import './styles/normalize.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/app/App'
import AuthProvider from './components/services/auth/AuthProvider'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </Provider>,
  document.querySelector('#root'),
)
