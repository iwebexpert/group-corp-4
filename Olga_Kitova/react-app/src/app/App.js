import React from 'react'
import PropTypes from 'prop-types'
import {Routes, Route} from 'react-router-dom'
import Layout from 'layouts/Layout'
import Blog from 'layouts/Blog'
import PageAboutProject from 'pages/PageAboutProject'
import PageProfile from 'pages/PageProfile'
import PageLogout from 'pages/PageLogout'
import PageError from 'pages/PageError'
import LoginForm from 'components/LoginForm/LoginForm'
import PageStats from 'pages/PageStats'
import AuthRequireRole from 'services/auth/AuthRequireRole'
import AuthRequireRoleBased from 'services/auth/AuthRequireRoleBased'
import PageShow from 'pages/PageShow'
import PageListPages from 'pages/PageListPages'
import PageAddPage from 'pages/PageAddPage'
import PageListComments from 'pages/PageListComments'
import PageListUsers from 'pages/PageListUsers'


export default function App({user, handleSuccessAuth}) {
  return (
    <>
        <Routes>
          <Route path="/" element={<Blog />}>
          <Route index element={<PageShow url="home" user={user}/>} />
          <Route path="page/:id" element={<PageShow user={user}/>}/>
          <Route path="login" element={< LoginForm handleSuccessAuth={handleSuccessAuth} />}/>
          <Route path="logout" element={<PageLogout />} />
          <Route path="*" element={<PageError />} />
          </Route>
          <Route path="/admin" element={<AuthRequireRoleBased><Layout /></AuthRequireRoleBased>}>
            <Route index element={<PageAboutProject />}/>
            <Route path="profile" element={ <PageProfile user={user} />}></Route>
            <Route path="show_pages" element={<PageListPages user={user} />} />
            <Route path="stats" element={<AuthRequireRole><PageStats/></AuthRequireRole>}/>
            <Route path="add_pages" element={<AuthRequireRole><PageAddPage userId={user?.id}/></AuthRequireRole>} />
            <Route path="comments" element={<PageListComments/>} />
            <Route path="users" element={<AuthRequireRole><PageListUsers /></AuthRequireRole>} />
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
     </>
  )
}

//Props types
App.defaultProps = {
  user: {},
  handleSuccessAuth: () => {}
}
App.propTypes = {
user: PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  password: PropTypes.string
}),
handleSuccessAuth: PropTypes.func.isRequired
}