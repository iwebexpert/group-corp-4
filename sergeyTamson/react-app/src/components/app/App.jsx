import { ThemeProvider } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MainPage from '../../pages/Main.jsx'
import Layout from '../layout/layout-public.jsx'
import { darkTheme, lightTheme } from './styles.js'
import './styles.scss'
import AuthRequire from '../services/auth/AuthRequire'
import AuthRequireRoleAdmin from '../services/auth/AuthRequireRoleAdmin'
import ErrorPage from '../../pages/Error.jsx'
import LogoutPage from '../../pages/Logout.jsx'
import ProfilePage from '../../pages/Profile.jsx'
import AboutPage from '../../pages/About.jsx'
import { pageFetch } from '../../actions/page.js'
import { useDispatch, useSelector } from 'react-redux'
import StatsPage from '../../pages/Stats.jsx'
import CommentsPage from '../../pages/Comments.jsx'
import UsersPage from '../../pages/Users.jsx'
import LayoutPrivat from '../layout/layout-privat.jsx'
import AdminPage from '../../pages/Admin.jsx'
import PagesPage from '../../pages/Pages.jsx'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light')

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.data)

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
