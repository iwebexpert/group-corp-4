import React from "react"
import { Navigate } from "react-router-dom"
import { authServices } from "./authServices"

export default function AuthRequir({children, redirectTo}){

    const currentUser = JSON.parse(localStorage.getItem('user'))
    let isAuthenticated = true
    {currentUser.role === 'admin'? isAuthenticated = true : isAuthenticated =false}
     let roles =['admin']
    return isAuthenticated ? React.cloneElement(children):<Navigate to = {redirectTo}/>
}