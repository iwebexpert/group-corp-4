import React, { useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");
    const [openEdit, setOpenEdit] = useState(false);

    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    const changeWindowEdit = () => {
        setOpenEdit(!openEdit)
    }

  return (
    <Context.Provider value={{theme, toggleTheme, openEdit, changeWindowEdit}}>
            {children}
        </Context.Provider>
  )
}

export {ContextProvider, Context}
