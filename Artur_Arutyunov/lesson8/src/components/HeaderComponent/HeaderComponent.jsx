import React from 'react'
import { ThemeContextConsumer } from '../Theme/ThemeContext'
import { FaRegMoon, FaSun } from 'react-icons/fa'
import './HeaderComponent.css'

export default function HeaderComponent() {
  const selectedIcon = (prop) => {
    if (prop === 'light') {
      return <FaRegMoon />
    }
    if (prop === 'dark') {
      return <FaSun />
    }
  }
  return (
    <ThemeContextConsumer>
      {(context) => (
        <header className="headerStyle">
          <div onClick={context.toggleTheme}>{selectedIcon(context.theme)}</div>
        </header>
      )}
    </ThemeContextConsumer>
  )
}
