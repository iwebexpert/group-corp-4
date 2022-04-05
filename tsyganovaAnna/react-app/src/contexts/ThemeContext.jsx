import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const ThemeModeContext = React.createContext({ toogleColorMode: () => {} })

function ThemeContext(props) {
  const [mode, setMode] = useState(
    localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light',
  )
  localStorage.setItem('mode', mode)

  const colorMode = useMemo(
    () => ({
      toogleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <ThemeModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

ThemeContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default ThemeContext
