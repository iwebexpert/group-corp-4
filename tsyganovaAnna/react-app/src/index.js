import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeContext from './contexts/ThemeContext'
import Routers from './Routers'

ReactDOM.render(
  <ThemeContext>
    <Router>
      <Routers />
    </Router>
  </ThemeContext>,
  document.getElementById('root'),
)
