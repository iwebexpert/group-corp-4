import React from 'react'
import ReactDOM from 'react-dom'
import ThemeContextMUI from './contexts/ThemeContextMUI'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import Layout from './components/Layout'
// import pagesFormPages from './pages/pagesFormPages'
import pageFormPages from './pages/pageFormPages'

ReactDOM.render(
  
    <ThemeContextMUI>
      <Router>
        <Routes>
          <Route path = "/" element = {<Layout/>}>
            {/* <Route index element = {<div>1234</div>}/> */}
            <Route path = '/pagesLink' element = {<pageFormPages/>}/>
            <Route path = "/commentLink" element = {<div>comment</div>}/>
            <Route path = '/profile' element = {<div>profile</div>}/>
            <Route path = '/logout' element = {<div>logout</div>}/>
            <Route path='*' element={<div>error404</div>}/>
          </Route>
        </Routes>
      </Router>
 
    </ThemeContextMUI>
  ,
  document.querySelector('#root'),
)
