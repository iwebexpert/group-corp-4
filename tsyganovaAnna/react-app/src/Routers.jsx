import React from 'react'
import { Routes, Route } from 'react-router-dom'

import App from './App'
import PagesList from './views/admin/PagesList'
import Page from './views/Page'
import Profile from './views/Profile'
import Comments from './views/admin/CommentsList'
import Users from './views/admin/Users'
import Login from './views/Login'
import Error from './views/Error'
import Stats from './views/admin/Stats'
import AuthProvider from './services/auth/AuthProvider'

export default function Routers() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route element={<AuthProvider />}>
          <Route path="/" element={<Page url="home" />} />
          <Route path="home" element={<Page url="home" />} />
          <Route path="profile" element={<Profile />} />
          <Route path="page/:id" element={<Page />} />
          <Route path="login" element={<Login />} />
          <Route path="admin">
            <Route path="pages" element={<PagesList />} />
            <Route path="comments" element={<Comments />} />
            <Route path="users" element={<Users />} />
            <Route path="stats" element={<Stats />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </Routes>
  )
}
