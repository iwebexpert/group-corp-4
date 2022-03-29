import React, {useState, useEffect} from "react"
import LoginForm from "../../components/LoginForm"
import { authServices } from "./authServices"

export default function AuthProvider({children}){

    const [user,setUser] = useState(null)
    useEffect(()=>{
        const currentUser = authServices.currentUserValue
        setUser(currentUser)
        console.log('currentuser: ', currentUser);
    }, [])

    const handleSucessAuth=(user)=>{
        setUser(user)
    }
    return(
        <>
        {user === null ? <LoginForm handleSucessAuth={handleSucessAuth}/> : children}
        </>
    )
}