import React, {useEffect} from "react"
import { authServices } from "../services/auth/authServices"
import ContainerWrapper from "./ContainerWrapper"

export default function PageLogout(){
    

    useEffect(()=>{
        authServices.logout()
        window.location.href = '/'
    })

    return(
        <ContainerWrapper>
            
        </ContainerWrapper>
    )
}