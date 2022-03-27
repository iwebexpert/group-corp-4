import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const ThemeModeContext = React.createContext({ toogleColorMode: () => {} })

function ThemeContextMUI(props) {   


    const colorMode = useMemo(
        () => ({
          toogleColorMode: () => {
            
            setMode((prevMode) => (prevMode === 'light' ? 'dark' :'light'))
            console.log("mode",mode)
            console.log("mode",mode)
          },
        }),
        [],
      )

    const themePages = () => {
        let config = 'light'
        const localStorageThemePages = localStorage.getItem('config.themePages')
        console.log("localStorageThemePages", localStorageThemePages)
        if (localStorageThemePages) {
          config = JSON.parse(localStorageThemePages)
        }
        return config
      }

      const [mode, setMode] = React.useState(themePages)

    
      useEffect(()=>{
        localStorage.setItem('config.themePages', JSON.stringify(mode))
      },[mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#2ca4db',
          },
          secondary: {
            main: '#fc9d80',
          }
        },
      }),

    [mode],
  )

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

ThemeContextMUI.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default ThemeContextMUI
