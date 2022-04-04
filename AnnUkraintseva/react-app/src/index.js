import React from 'react'
import ReactDOM from 'react-dom'
import ThemeContextMUI from './contexts/ThemeContextMUI'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
import PageFormPages from './pages/PagesFormPages'
import PageComment from './pages/PagesComment'
import { PageProfile } from './pages/PagesProgile'
import PageLogout from './pages/PagesLogout'
import PageError from './pages/PagesError'
import AuthProvider from './services/auth/AuthProvider'
import AuthRequir from './services/auth/AuthRequir'
import PagesAbout from './pages/PageAbout'

import { Provider } from 'react-redux'
import { store } from './store'
import { PageLoggerUser } from './pages/PagesLoggerUser'

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextMUI>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PagesAbout />} />
              <Route
                path="/pagesLink"
                element={
                  <AuthRequir redirectTo="/profile">
                    <PageFormPages />
                  </AuthRequir>
                }
              />
              <Route path="/commentLink" element={<PageComment />} />
              <Route path="/profile" element={<PageProfile />} />
              <Route path="/logout" element={<PageLogout />} />
              <Route path="/stats" element={
              <AuthRequir redirectTo="/profile">
                    <PageLoggerUser />
                  </AuthRequir>} />

              <Route path="*" element={<PageError />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeContextMUI>
   </Provider>,
  document.querySelector('#root'),
)
