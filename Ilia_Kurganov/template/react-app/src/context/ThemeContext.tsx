import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import themes from '../themes'
import { getParams, setParams } from './../helpers/localStorageHelper';
import { PaletteMode } from '@mui/material';

export const ThemeContextProvider = React.createContext({
  themeToggler: () => {},
  })

type ThemeContextProps = {
  children: React.ReactNode
}

export const ThemeContext = (props: ThemeContextProps) => {
  const [theme, setTheme] = useState<PaletteMode>(getParams('config.app', 'light', 'theme'))
  
  const themeToggler = () => {
    setTheme((prevTheme) => {
      let mode: PaletteMode = prevTheme === 'dark' ? 'light' : 'dark'
      setParams("config.app", "theme", mode);
      return mode
    })
  }

  return (
      <ThemeContextProvider.Provider value={{ themeToggler }}>
        <ThemeProvider theme={themes[theme]}>
          {props.children}
        </ThemeProvider>
      </ThemeContextProvider.Provider>
  )
}

