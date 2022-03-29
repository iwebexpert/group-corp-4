import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import './style.scss'
import { ThemeContext } from './context/ThemeContext'
import { App } from './components/App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageEquipment from './pages/PageEquipment'
import PageApp from './pages/PageApp'
import PageBranches from './pages/PageBranches'
import PageError from './pages/PageError'
import PageLogout from './pages/PageLogout'
import PageProfile from './pages/PageProfile'
import PageSignIn from './pages/PageSignIn'
import AuthProvider from './services/auth/AuthProvider'
import AuthRequireRole from './services/auth/AuthRequireRole'
// const Config = require('Config');

ReactDOM.render(
  <>
    <ThemeContext>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<PageApp />} />
              <Route
                path="/equipment"
                element={
                  <AuthRequireRole redirect="/">
                    <PageEquipment />
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
              <Route path="*" element={<PageError />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeContext>
  </>,
  document.querySelector('#root'),
)
