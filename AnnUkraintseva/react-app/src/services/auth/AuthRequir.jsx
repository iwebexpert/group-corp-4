import React from "react"
import { Navigate } from "react-router-dom"
import { getCurrentUser } from "./authServices"

export default function AuthRequir({children, redirectTo}){
    
    const currentUser = getCurrentUser()
    let isAuthenticated = true
    {currentUser.role === 'admin'? isAuthenticated = true : isAuthenticated =false}
    return isAuthenticated ? React.cloneElement(children):<Navigate to = {redirectTo}/>
}