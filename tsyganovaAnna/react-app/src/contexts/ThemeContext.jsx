import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider, experimental_sx as sx } from '@mui/material/styles'
import { lightBlue } from '@mui/material/colors'

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
        typography: {
          fontFamily: ['Chilanka', 'cursive'].join(','),
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
