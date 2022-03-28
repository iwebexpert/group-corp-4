import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../hooks/useReducer";

export const AppContext =createContext()


export const AppContextProvider = ({children}) => {
    const value = useReducer(reducer,initialState)
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}