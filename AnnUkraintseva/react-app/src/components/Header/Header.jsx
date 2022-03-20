import React from 'react'

import { ThemeContextConsumer } from '../../contexts/ThemeContexts'

export default function Header() {
  return (
    
      <ThemeContextConsumer>
      {(context)=>(
          <div  className={'headerStyle headerStyle-' + context.theme}>
              <div>
          <button
            className={'themeButton themeButton-' + context.theme}
            onClick={context.toggleTheme}
          >
            Переключить тему 
          </button>
        </div>
        <hr />
          </div>
        
        
      )}
      </ThemeContextConsumer>
    
  )
}
