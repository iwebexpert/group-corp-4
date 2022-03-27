import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import themes from '../themes'
import { PropTypes } from 'prop-types'

export const ThemeContextProvider = React.createContext()

export const ThemeContext = (props) => {
  const themeChoicer = () => {
    const themeStorage = localStorage.getItem('config.theme')
    if (themeStorage) {
      return themes[themeStorage]
    }
    return themes.light
  }

  const themeToggler = () => {
    setTheme((theme) => {
      localStorage.setItem('config.theme', theme.palette.mode === 'dark' ? 'light' : 'dark')
      if (theme.palette.mode === 'dark') {
        return themes.light
      } else {
        return themes.dark
      }
    })
  }

  const [theme, setTheme] = useState(themeChoicer)

  return (
    <ThemeProvider theme={theme}>
      <ThemeContextProvider.Provider value={{ themeToggler }}>
        {props.children}
      </ThemeContextProvider.Provider>
    </ThemeProvider>
  )
}

ThemeContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
