import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import ThemeContext from './contexts/ThemeContext'
import Routers from './Routers'

ReactDOM.render(
  <Provider store={store}>
    <ThemeContext>
      <Router>
        <Routers />
      </Router>
    </ThemeContext>
  </Provider>,
  document.getElementById('root'),
)
