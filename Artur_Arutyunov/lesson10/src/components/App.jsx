import React from 'react'
import './App.css'
import Layout from '../Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Authorization from '../Pages/Authorization'
import Exit from '../Pages/Exit'
import Main from '../Pages/Main'
import User from '../Pages/User'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="user" element={<User />} />
          <Route path="auth" element={<Authorization />} />
        </Route>
        <Route path="exit" element={<Exit />} />
      </Routes>
    </div>
  )
}
