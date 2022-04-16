import React, { useState, useEffect, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

interface ToggleTheme {
  toogleThemeMode: () => void
}

interface ObjectLiteralContext {
  toggleTheme: ToggleTheme
  openEdit: boolean
  changeWindowEdit: () => void
}

const Context = React.createContext<Partial<ObjectLiteralContext>>({
  toggleTheme: {
    toogleThemeMode: () => {}
  },
  openEdit: false,
  changeWindowEdit: () => {}
})

type ContextProviderProps = {
  children: React.ReactNode
}

function ContextProvider({ children }: ContextProviderProps) {
  const saveTheme = () => {
    let config: PaletteMode = 'dark'
    const localStorageSaveTheme = localStorage.getItem('theme')
    if (localStorageSaveTheme) {
      config = JSON.parse(localStorageSaveTheme)
    }
    return config
  }

  const [mode, setMode] = useState<PaletteMode>(saveTheme)
  const [openEdit, setOpenEdit] = useState(false)

  const toggleTheme = useMemo(
    () => ({
      toogleThemeMode() {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(mode))
  }, [mode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#f44336',
          },
          secondary: {
            main: '#4615b2',
          },
        },
      }),
    [mode],
  )

  const changeWindowEdit = () => {
    setOpenEdit(!openEdit)
  }

  return (
    <Context.Provider value={{ toggleTheme, openEdit, changeWindowEdit }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  )
}

export { ContextProvider, Context }
