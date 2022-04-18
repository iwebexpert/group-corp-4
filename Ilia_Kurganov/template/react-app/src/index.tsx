/// <reference path="./type.d.ts" />
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './style.css'
import './style.scss'
import { ThemeContext } from './context/ThemeContext'
import { AppLayout } from './components/AppLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PageWithPages } from './pages/PageWithPages'
import PageAboutApp from './pages/PageAboutApp'
import PageUsers from './pages/PageUsers'
import PageError from './pages/PageError'
import PageLogout from './pages/PageLogout'
import PageProfile from './pages/PageProfile'
import AuthProvider from './services/auth/AuthProvider'
import AuthRequireRole from './services/auth/AuthRequireRole'
import store from './store'
import PageLogs from './pages/PageLogs'
import PageWithPageItem from './pages/PageWithPageItem'
import { AdminAppLayout } from './components/AdminAppLayout'
import PageForUser from './pages/PageForUser'
// const Config = require('Config');

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeContext>
        <AuthProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthRequireRole roleString="user" redirect="/admin">
                    <AppLayout />
                  </AuthRequireRole>
                }
              >
                <Route index element={<PageAboutApp />} />
                <Route path="pages" element={<PageForUser />} />
                <Route path="pages/:id" element={<PageWithPageItem />} />
                <Route path="profile" element={<PageProfile />} />
                <Route path="logout" element={<PageLogout />} />
                <Route path="*" element={<PageError />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <AuthRequireRole roleString="admin" redirect="/">
                    <AdminAppLayout />
                  </AuthRequireRole>
                }
              >
                <Route index element={<PageAboutApp />} />
                <Route path="pages" element={<PageWithPages />} />
                <Route path="pages/:id" element={<PageWithPageItem />} />
                <Route path="users" element={<PageUsers />} />
                <Route path="profile" element={<PageProfile />} />
                <Route path="logout" element={<PageLogout />} />
                <Route path="logs" element={<PageLogs />} />
                <Route path="*" element={<PageError />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeContext>
    </Provider>
  </>,
  document.querySelector('#root'),
)
