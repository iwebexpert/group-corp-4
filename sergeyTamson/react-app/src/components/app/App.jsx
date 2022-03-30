import { ThemeProvider } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/Main.jsx'
import Layout from '../layout/layout.jsx'
import { darkTheme, lightTheme } from './styles.js'
import './styles.scss'
import AuthRequire from '../services/auth/AuthRequire'
import AuthRequireRoleBased from '../services/auth/AuthRequireRoleBased'
import ErrorPage from '../../pages/Error.jsx'
import LogoutPage from '../../pages/Logout.jsx'
import ProfilePage from '../../pages/Profile.jsx'
import AboutPage from '../../pages/About.jsx'
import { authService } from '../services/auth/authService.jsx'

const App = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light')

  console.log('USER', user)

  return (
    <ThemeProvider theme={isDarkMode === 'dark' ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Layout setIsDarkMode={setIsDarkMode} />}>
          <Route index element={<MainPage />} />

          <Route
            path="about"
            element={
              <AboutPage />
              // <AuthRequire redirectTo="/">
              // </AuthRequire>
            }
          />
          <Route path="logout" element={<LogoutPage />} />
          <Route
            path="profile"
            element={
              <AuthRequireRoleBased redirectTo="/">
                <ProfilePage />
              </AuthRequireRoleBased>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
