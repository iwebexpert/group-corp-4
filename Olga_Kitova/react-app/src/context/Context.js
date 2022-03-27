import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Context = React.createContext()

function ContextProvider({children}) {
    const saveTheme = () => {
      let config = 'light'
      const localStorageSaveTheme = localStorage.getItem('theme')
      if (localStorageSaveTheme) {
        config = JSON.parse(localStorageSaveTheme)
      }
      return config
    };

    const [mode, setMode] = useState(saveTheme);
    const [openEdit, setOpenEdit] = useState(false);
    
    const toggleTheme = useMemo(() => ({
        toogleThemeMode() {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        }
      }),[])

      useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(mode))
      },[mode])

      const theme = useMemo(() => 
      createTheme({
        palette: {
          mode,
          primary: {
              main: '#f44336',
            },
            secondary: {
              main: '#4615b2'
            }
        }
      }),[mode])
  
    const changeWindowEdit = () => {
        setOpenEdit(!openEdit)
    }

    return (
      <Context.Provider value={{toggleTheme, openEdit, changeWindowEdit}}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Context.Provider>
    )
}
ContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export {ContextProvider, Context}
