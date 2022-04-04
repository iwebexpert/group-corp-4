import React from "react"
import ContainerWrapper from "./ContainerWrapper"
import { Typography } from "@mui/material"
import styled from "@emotion/styled"



export default function PageError(){
    return(
        <ContainerWrapper>
           <Typography align="center"  color="primary" components="h2" >Error 404</Typography>
        </ContainerWrapper>
    )
}
