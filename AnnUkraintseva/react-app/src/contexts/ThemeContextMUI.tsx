import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

export const ThemeModeContext = React.createContext({ toogleColorMode: () => {} })

type ThemeContextProps = {
  children: React.ReactNode
}

function ThemeContextMUI(props: ThemeContextProps) {   
    const colorMode = useMemo(
        () => ({
          toogleColorMode: () => {
            
            setMode((prevMode) => (
              prevMode === 'light' ? 'dark' :'light'))
          },
        }),
        [],
      )

    const themePages: any = () => {
        let config = 'light'
        const localStorageThemePages = localStorage.getItem('config.themePages')
        if (localStorageThemePages) {
          config = JSON.parse(localStorageThemePages)
        }
        return config
      }

      const [mode, setMode] = React.useState<PaletteMode>(themePages)
    
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
