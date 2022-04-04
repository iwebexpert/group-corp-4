import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './style.css'
import './style.scss'
import { ThemeContext } from './context/ThemeContext'
import { App } from './components/App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PageWithPages } from './pages/PageWithPages'
import PageApp from './pages/PageApp'
import PageBranches from './pages/PageBranches'
import PageError from './pages/PageError'
import PageLogout from './pages/PageLogout'
import PageProfile from './pages/PageProfile'
import PageSignIn from './pages/PageSignIn'
import AuthProvider from './services/auth/AuthProvider'
import AuthRequireRole from './services/auth/AuthRequireRole'
import store from './store'
import PageStats from './pages/PageStats'
import AuthRoleProvider from './services/auth/AuthRoleProvider'
// const Config = require('Config');

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeContext>
        <AuthProvider>
          <AuthRoleProvider>
            <Router>
              <Routes>
                <Route path="/" element={<App />}>
                  <Route index element={<PageApp />} />
                  <Route
                    path="/equipment"
                    element={
                      <AuthRequireRole redirect="/">
                        <PageWithPages />
                      </AuthRequireRole>
                    }
                  />
                  <Route path="/branch" element={<PageBranches />} />
                  <Route
                    path="/profile"
                    element={
                      <AuthRequireRole redirect="/">
                        <PageProfile />
                      </AuthRequireRole>
                    }
                  />
                  <Route path="/logout" element={<PageLogout />} />
                  <Route path="/signIn" element={<PageSignIn />} />
                  <Route path="/stats" element={<PageStats />} />
                  <Route path="*" element={<PageError />} />
                </Route>
              </Routes>
            </Router>
          </AuthRoleProvider>
        </AuthProvider>
      </ThemeContext>
    </Provider>
  </>,
  document.querySelector('#root'),
)
