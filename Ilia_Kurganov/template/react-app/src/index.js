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
import PageUsers from './pages/PageUsers'
import PageError from './pages/PageError'
import PageLogout from './pages/PageLogout'
import PageProfile from './pages/PageProfile'
import PageSignIn from './pages/PageSignIn'
import AuthProvider from './services/auth/AuthProvider'
import AuthRequireRole from './services/auth/AuthRequireRole'
import store from './store'
import PageLogs from './pages/PageLogs'
import PageComments from './pages/PageComments'
import PageWithPageItem from './pages/PageWithPageItem'
// const Config = require('Config');

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeContext>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<PageApp />} />
                <Route
                  path="/pages"
                  element={
                    <AuthRequireRole redirect="/">
                      <PageWithPages />
                    </AuthRequireRole>
                  }
                />
                <Route
                  path="/pages/:id"
                  element={
                    <AuthRequireRole redirect="/">
                      <PageWithPageItem />
                    </AuthRequireRole>
                  }
                />
                <Route path="/users" element={<PageUsers />} />
                <Route path="/comments" element={<PageComments />} />
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
                <Route path="/logs" element={<PageLogs />} />
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
