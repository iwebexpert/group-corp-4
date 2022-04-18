import { ThemeProvider } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import AuthRequire from '../services/auth/AuthRequire'
import LayoutPrivat from '../layout/layout-privat'
import Layout from '../layout/layout-public'
import MainPage from '../../pages/Main'
import AboutPage from '../../pages/About'
import ErrorPage from '../../pages/Error'
import AdminPage from '../../pages/Admin'
import ProfilePage from '../../pages/Profile'
import PagesPage from '../../pages/Pages'
import CommentsPage from '../../pages/Comments'
import AuthRequireRoleAdmin from '../services/auth/AuthRequireRoleAdmin'
import UsersPage from '../../pages/Users'
import StatsPage from '../../pages/Stats'
import LogoutPage from '../../pages/Logout'
import { pageFetch } from '../../actions/page'
import { AppState } from '../../reducers'
import { darkTheme, lightTheme } from './styles'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light')

  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user.data)

  useEffect(() => {
    window.setTimeout(
      () => {
        dispatch(pageFetch())
      },
      process.env.NODE_ENV === 'development' ? 1000 : 0,
    )
  }, [])

  return (
    <ThemeProvider theme={isDarkMode === 'dark' ? darkTheme : lightTheme}>
      <Routes>
        <Route index element={<Navigate to="/home" />} />

        <Route path="home" element={<Layout setIsDarkMode={setIsDarkMode} />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route
          path="admin"
          element={
            <AuthRequire redirectTo="/home">
              <LayoutPrivat setIsDarkMode={setIsDarkMode} />
            </AuthRequire>
          }
        >
          <Route index element={<AdminPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="pages" element={<PagesPage />} />
          <Route path="comments" element={<CommentsPage />} />

          <Route
            path="users"
            element={
              <AuthRequireRoleAdmin redirectTo="/admin" role={user?.role}>
                <UsersPage />
              </AuthRequireRoleAdmin>
            }
          />
          <Route
            path="stats"
            element={
              <AuthRequireRoleAdmin redirectTo="/admin" role={user?.role}>
                <StatsPage />
              </AuthRequireRoleAdmin>
            }
          />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
