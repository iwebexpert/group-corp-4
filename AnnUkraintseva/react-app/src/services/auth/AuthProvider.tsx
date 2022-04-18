import React, {useState, useEffect} from "react"
import LoginForm from "../../components/LoginForm"
import { authServices } from "./authServices"

type AuthProviderProps={
    children: React.ReactNode
}

export default function AuthProvider({children}:AuthProviderProps){

    const [user,setUser] = useState<UserType | null>(null)
    useEffect(()=>{
        const currentUser = authServices.currentUserValue
        setUser(currentUser)
    }, [])

    const handleSucessAuth=(user: UserType)=>{
        setUser(user)
    }
    return(
        <>
        {user === null ? <LoginForm handleSucessAuth={handleSucessAuth}/> : children}
        </>
    )
}