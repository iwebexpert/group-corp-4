import React from "react"
import { Navigate } from "react-router-dom"
import { getCurrentUser } from "./authServices"

type AuthRequirProps={
    children: JSX.Element
    redirectTo: string
}


export default function AuthRequir({children, redirectTo}:AuthRequirProps){
    
    const currentUser = getCurrentUser()
    let isAuthenticated = true
    {currentUser.role === 'admin'? isAuthenticated = true : isAuthenticated =false}
    return isAuthenticated ? React.cloneElement(children):<Navigate to = {redirectTo}/>
}