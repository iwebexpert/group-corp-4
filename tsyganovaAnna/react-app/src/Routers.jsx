import React from 'react'
import { Routes, Route } from 'react-router-dom'

import App from './App'
import Pages from './views/Pages'
import Comments from './views/Comments'
import Profile from './views/Profile'
import Login from './views/Login'
import Error from './views/Error'
import Stats from './views/Stats'
import AuthProvider from './services/auth/AuthProvider'

export default function Routers() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route element={<AuthProvider />}>
          <Route path="/" element={<Pages />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </Routes>
  )
}
