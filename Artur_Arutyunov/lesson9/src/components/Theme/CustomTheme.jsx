import React, { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const dark = {
  primary: { main: '#040404', contrastText: '#fff' },
  background: {
    paper: '#ccc',
    default: '#ccc',
  },
  text: {
    primary: '#fff',
  },
}

export default function CustomTheme({ children, themeStyle }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: themeStyle === 'dark' && dark,
      }),
    [themeStyle],
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
