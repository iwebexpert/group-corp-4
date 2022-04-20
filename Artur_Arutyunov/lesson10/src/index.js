import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { BrowserRouter } from 'react-router-dom'
import CustomTheme from './components/Theme/CustomTheme'

ReactDOM.render(
  <CustomTheme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CustomTheme>,
  document.querySelector('#root'),
)
