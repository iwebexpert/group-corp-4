import React, { createContext, useEffect, useMemo, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'

export const ThemeContext = createContext()

export default function CustomTheme({ children }) {
  const [state, setState] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  )

  const handleTheme = () => {
    setState(state === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', state === 'light' ? 'dark' : 'light')
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: state,
        },
      }),
    [state],
  )

  return (
    <ThemeContext.Provider
      value={{
        handleTheme,
        iconTheme: state === 'light' ? <LightModeIcon /> : <NightlightRoundIcon />,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
