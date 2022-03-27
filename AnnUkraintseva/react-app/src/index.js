import React from 'react'
import ReactDOM from 'react-dom'
// import { ThemeContextProvider } from './contexts/ThemeContexts'
import ThemeContextMUI from './contexts/ThemeContextMUI'

import './index.css'
// import './normalize.css'

// import App from 'components/App'
import Layout from 'components/Layout'

ReactDOM.render(
  <>
    {/* <ThemeContextProvider>
      <App />
    </ThemeContextProvider> */}
    <ThemeContextMUI>
     <Layout/> 
    </ThemeContextMUI>
  </>,
  document.querySelector('#root'),
)
